import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { billingServiceFactory } from '../../../hexagonal/di-factories';
import { INIT_GUESTS } from '../../../hexagonal/domain/model/const';
import { Guests, getTotalNbOfGuests } from '../../../hexagonal/domain/model/stay/guest.model';
import { BillingPort } from '../../../hexagonal/domain/port/billing.port';
import { CalendarDateFormatPipe } from '../../../pipe/calendar-date-format.pipe';
import { PluralizePipe } from "../../../pipe/pluralize.pipe";
import { CalendarDate, CalendarDatesService } from '../../../service/calendar-dates.service';
import { AppState } from '../../../state/app.state';
import { BillInformationActions } from '../../../state/bill-information/bill-information.actions';
import { selectBillInformation } from '../../../state/bill-information/bill-information.selectors';
import { selectStay } from '../../../state/stay/stay.selectors';
import { CalendarComponent } from "../../calendar/calendar.component";
import { GuestsComponent } from "../../guests/guests.component";

@Component({
  selector: 'phone-bill-room',
  standalone: true,
  imports: [CalendarDateFormatPipe, PluralizePipe, GuestsComponent, CalendarComponent, CommonModule],
  providers: [CalendarDateFormatPipe, { provide: BillingPort, useFactory: billingServiceFactory }],
  templateUrl: './phone-bill-room.component.html',
  styleUrl: './phone-bill-room.component.css'
})
export class PhoneBillRoomComponent implements OnDestroy {
  stayId!: string;
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  maximumNbOfGuests: number = 1;
  guests: Guests | undefined;
  nbOfGuests: number = 0;
  nbOfNights: number | undefined;
  pricePerNight: number | undefined;
  completeBillWithoutCharges: number | undefined;
  cleaningFee: number = 0;
  bookInnFee: number = 0;
  VAT: number = 0;
  completeBill: number = 0;
  isBillRoomForPhoneModeOpen: boolean = false;
  isGuestModalOpen: boolean = false;
  isCalendarModalOpen: boolean = false;
  private destroy$ = new Subject<void>();
  constructor(private router: Router, private calendarDateFormatPipe: CalendarDateFormatPipe,
    private billingService: BillingPort, private calendarDatesService: CalendarDatesService, private store: Store<AppState>) {

  }

  ngOnInit(): void {
    combineLatest([this.store.select(selectStay), this.store.select(selectBillInformation)])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([{ stay }, { billInformation }]) => {
        this.stayId = stay?.id ?? "";
        this.maximumNbOfGuests = stay?.maxNumberOfGuests ?? 1;
        this.cleaningFee = stay?.billing.fees.cleaningFee ?? 0;
        this.updateBillPrices(this.nbOfNights, this.nbOfGuests);

        this.startingDate = billInformation?.startingDate;
        this.endingDate = billInformation?.endingDate;
        this.guests = billInformation?.guests !== undefined ? billInformation?.guests : JSON.parse(JSON.stringify(INIT_GUESTS));
        this.nbOfGuests = getTotalNbOfGuests(this.guests);
        if (this.startingDate && this.endingDate) {
          this.nbOfNights = this.calendarDatesService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
        }
        this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateBillPrices(nbOfNights: number | undefined, nbOfGuests: number) {
    if (nbOfNights && this.stayId) {
      this.billingService.getBillingForStay(this.stayId, nbOfNights, nbOfGuests)
        .pipe(takeUntil(this.destroy$))
        .subscribe((billing) => {
          if (billing) {
            const { VAT, bookInnFee, completeBill, completeBillWithoutCharges, pricePerNight } = billing;
            this.pricePerNight = pricePerNight;
            this.completeBillWithoutCharges = completeBillWithoutCharges;
            this.bookInnFee = bookInnFee;
            this.VAT = VAT;
            this.completeBill = completeBill;
          }
        });
    }
  }

  openGuestsModal() {
    this.isCalendarModalOpen = false;
    this.isGuestModalOpen = true;
  }

  getGuests(guests: Guests | undefined) {
    this.guests = guests !== undefined ? { ...guests } : undefined;
    this.nbOfGuests = getTotalNbOfGuests(guests);
    this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
    this.store.dispatch(BillInformationActions.updateGuests({ guests: this.guests }));
  }

  openCalendar() {
    this.isCalendarModalOpen = true;
    this.isGuestModalOpen = false;
  }

  getStartingDate(calendarDate: CalendarDate | undefined) {
    this.startingDate = calendarDate;
    this.store.dispatch(BillInformationActions.updateStartingDate({ startingDate: this.startingDate }));
  }

  getEndingDate(calendarDate: CalendarDate | undefined) {
    this.endingDate = calendarDate;
    this.store.dispatch(BillInformationActions.updateEndingDate({ endingDate: this.endingDate }));
  }

  reserveButtonHandler() {
    if (this.startingDate && this.endingDate && this.guests && this.nbOfGuests > 0) {
      this.router.navigate(['/book/stays'], {
        queryParams: {
          productId: this.stayId,
          startDate: this.calendarDateFormatPipe.transform(this.startingDate, "MM-dd-yyyy"),
          endDate: this.calendarDateFormatPipe.transform(this.endingDate, "MM-dd-yyyy"),
          nbAdults: this.guests.adult.nb,
          nbChildren: this.guests.child.nb,
          nbInfants: this.guests.child.nb,
          nbPets: this.guests.pet.nb
        }
      });
    }

    if (!this.startingDate || !this.endingDate) {
      this.openCalendar();
      return;
    }

    if (this.nbOfGuests === 0) {
      this.openGuestsModal();
    }
  }

  clearAll() {
    this.getGuests(undefined); // renvoyer la donnée en haut
    this.getStartingDate(undefined);
    this.getEndingDate(undefined);
  }

  openBillRoomForPhoneMode() {
    this.isBillRoomForPhoneModeOpen = true;
  }

  closeBillRoomForPhoneMode() {
    this.isBillRoomForPhoneModeOpen = false;
  }
}
