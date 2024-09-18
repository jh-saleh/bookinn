import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillReservationStayComponent } from '../../component/bill/bill-reservation-stay/bill-reservation-stay.component';
import { FooterComponent } from "../../component/footer/footer.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";
import { PaymentOptionsComponent } from "../../component/payment-options/payment-options.component";
import { FullViewModalComponent } from "../../component/windows/full-view-classic-modal/full-view-modal.component";
import { billingServiceFactory, stayServiceFactory, tripServiceFactory } from '../../hexagonal/di-factories';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../hexagonal/domain/model/const';
import { Guests, getTotalNbOfGuests } from '../../hexagonal/domain/model/stay/guest.model';
import { Stay } from '../../hexagonal/domain/model/stay/stay.model';
import { BillingPort } from '../../hexagonal/domain/port/billing.port';
import { StayPort } from '../../hexagonal/domain/port/stay.port';
import { TripPort } from '../../hexagonal/domain/port/trip.port';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { PastDateStrikeThroughPipe } from '../../pipe/past-date-strike-through.pipe';
import { PluralizePipe } from '../../pipe/pluralize.pipe';
import { CalendarDate, CalendarDatesService } from '../../service/calendar-dates.service';

export interface ReservationStartingStates {
  productId: string | undefined;
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  guests: Guests | undefined;
}


@Component({
  selector: 'stay-reservation-page',
  standalone: true,
  imports: [DesktopNavbarComponent, FooterComponent, CalendarDateFormatPipe, PluralizePipe,
    FullViewModalComponent, CommonModule, PaymentOptionsComponent, BillReservationStayComponent, PastDateStrikeThroughPipe],
  providers: [{ provide: StayPort, useFactory: stayServiceFactory }, { provide: BillingPort, useFactory: billingServiceFactory },
  { provide: TripPort, useFactory: tripServiceFactory }],
  templateUrl: './stay-reservation-page.component.html',
  styleUrl: './stay-reservation-page.component.css'
})
export class StayReservationPageComponent implements OnInit {
  startingState: ReservationStartingStates | undefined;
  queryParamEndDate!: string | null;
  queryParamStartDate!: string | null;
  nbOfGuests: number = 0;
  stay!: Stay;
  fullRefundDate: CalendarDate | undefined;
  partialRefundDate: CalendarDate | undefined;
  isCancellationPolicyModalOpen: boolean = false;
  completeBill!: number;
  constructor(private route: ActivatedRoute, private calendarDatesService: CalendarDatesService, private stayService: StayPort,
    private billingService: BillingPort, private tripService: TripPort, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      this.queryParamEndDate = queryParams.get("endDate");
      this.queryParamStartDate = queryParams.get("startDate");

      this.startingState = {
        productId: queryParams.get('productId') ?? undefined,
        endingDate: this.queryParamEndDate ? this.calendarDatesService.convertStringToCalendarDate(this.queryParamEndDate, "-") : undefined,
        startingDate: this.queryParamStartDate ? this.calendarDatesService.convertStringToCalendarDate(this.queryParamStartDate, "-") : undefined,
        guests: {
          adult: {
            nb: queryParams.get("nbAdults") !== null ? Number(queryParams.get("nbAdults")) : 0,
            maximum: MAX_NB_ADULTS,
          },
          child: {
            nb: queryParams.get("nbChildren") !== null ? Number(queryParams.get("nbChildren")) : 0,
            maximum: MAX_NB_CHILDREN
          },
          infant: {
            nb: queryParams.get("nbInfants") !== null ? Number(queryParams.get("nbInfants")) : 0,
            maximum: MAX_NB_INFANTS,
          },
          pet: {
            nb: queryParams.get("nbPets") !== null ? Number(queryParams.get("nbPets")) : 0,
            maximum: MAX_NB_PETS
          },
        }
      }
      this.nbOfGuests = getTotalNbOfGuests(this.startingState.guests);
      this.stayService.getStay(this.startingState.productId).subscribe((stay) => {
        if (stay) {
          this.stay = stay;
          if (this.startingState?.startingDate && this.startingState.startingDate) {
            this.fullRefundDate = this.calendarDatesService.substractDaysFromDate(this.startingState.startingDate, this.stay.guidebook.cancellationPolicy.fullRefund);
            if (this.stay.guidebook.cancellationPolicy.partialRefund) {
              this.partialRefundDate = this.calendarDatesService.substractDaysFromDate(this.startingState.startingDate, this.stay.guidebook.cancellationPolicy.partialRefund);
            }
          }
        }
      });
      if (this.startingState.startingDate && this.startingState.endingDate) {
        this.updateBillPrices(this.calendarDatesService.getNbOfDaysBetweenDates(this.startingState.startingDate, this.startingState.endingDate));
      }
    });
  }

  openCancellationPolicyModal = () => {
    this.isCancellationPolicyModalOpen = true;
  }

  closeCancellationPolicyModal = () => {
    this.isCancellationPolicyModalOpen = false;
  }

  updateBillPrices(nbOfNights: number | undefined) {
    if (nbOfNights) {
      this.billingService.getBillingForStay(this.stay.id, nbOfNights, this.nbOfGuests).subscribe((billing) => {
        if (billing) {
          const { completeBill } = billing;
          this.completeBill = completeBill;
        }
      });
    }
  }

  confirmAndPayHandler() {
    if (this.startingState) {
      const { productId, startingDate, endingDate, guests } = this.startingState;
      if (productId && startingDate && endingDate && guests) {
        this.tripService.createTrip(productId, startingDate, endingDate, guests).subscribe(() => {
          this.router.navigate(['/trips']);
        });
      }
    }
  }
}
