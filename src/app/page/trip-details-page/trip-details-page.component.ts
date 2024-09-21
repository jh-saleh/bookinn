import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FooterComponent } from "../../component/footer/footer.component";
import { MapComponent } from "../../component/map/map.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";
import { SliderComponent } from "../../component/slider/slider.component";
import { FullViewModalComponent } from "../../component/windows/full-view-classic-modal/full-view-modal.component";
import { tripServiceFactory } from '../../hexagonal/di-factories';
import { CheckType, GuidebookInformation, LeaveRule, StayRule, leaveRulesTable, stayRulesTable } from '../../hexagonal/domain/model/stay/guidebook.model';
import { Trip } from '../../hexagonal/domain/model/trip/trip.model';
import { TripPort } from '../../hexagonal/domain/port/trip.port';
import { CalendarDateFormatPipe } from "../../pipe/calendar-date-format.pipe";
import { CamelToSentencePipe } from "../../pipe/cameltosentence.pipe";
import { HourBoundaryToStringPipe } from '../../pipe/hour-boundary-to-string.pipe';
import { NegationPipe } from "../../pipe/negation.pipe";
import { PluralizePipe } from "../../pipe/pluralize.pipe";
import { CalendarDate, CalendarDatesService } from '../../service/calendar-dates.service';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-trip-details-page',
  standalone: true,
  imports: [CommonModule, DesktopNavbarComponent, FooterComponent, MapComponent, CalendarDateFormatPipe,
    HourBoundaryToStringPipe, SliderComponent, PluralizePipe, FullViewModalComponent,
    CamelToSentencePipe, NegationPipe],
  providers: [{ provide: TripPort, useFactory: tripServiceFactory }, CalendarDatesService],
  templateUrl: './trip-details-page.component.html',
  styleUrl: './trip-details-page.component.css'
})
export class TripDetailsPageComponent implements OnInit {
  isTimeCheck!: boolean;
  trip: Trip | undefined;
  partialRefundDate: CalendarDate | undefined;
  fullRefundDate: CalendarDate | undefined;
  isHouseRulesModalOpen: boolean = false;
  isCancelReservationModalOpen: boolean = false;
  stayRules: GuidebookInformation[] = [];
  leaveRules: GuidebookInformation[] = [];
  refundStatus!: string;
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private tripService: TripPort,
    private calendarDatesService: CalendarDatesService, private router: Router) { }

  ngOnInit(): void {
    const queryTripId: string = this.route.snapshot.paramMap.get('id') ?? "";
    this.tripService.getTrip(queryTripId).subscribe((trip) => {
      this.trip = trip;
      this.isTimeCheck = this.trip?.stay.guidebook.houserules.time.type === CheckType.StandardCheck;
      this.updateRefundDates();
      this.updateHouseRules();
      this.updateRefundStatus();
    });
  }

  updateRefundDates() {
    if (this.trip?.startingDate) {
      this.fullRefundDate = this.calendarDatesService.substractDaysFromDate(this.trip.startingDate, this.trip.stay.guidebook.cancellationPolicy.fullRefund);
    }
    if (this.trip?.startingDate && this.trip?.stay.guidebook.cancellationPolicy.partialRefund) {
      this.partialRefundDate = this.calendarDatesService.substractDaysFromDate(this.trip.startingDate, this.trip.stay.guidebook.cancellationPolicy.partialRefund);
    }
  }

  updateHouseRules() {
    if (this.trip?.stay) {
      this.stayRules = Object.entries(this.trip.stay.guidebook.houserules.stay).map((entry) => ({ enum: entry[0], icon: stayRulesTable[entry[0] as StayRule], included: entry[1] }));
    }
    if (this.trip?.stay.guidebook.houserules.leave) {
      this.leaveRules = this.trip.stay.guidebook.houserules.leave.map((entry) => ({ enum: entry, icon: leaveRulesTable[entry as LeaveRule] }));
    }
  }

  updateRefundStatus() {
    if (this.fullRefundDate &&
      this.calendarDatesService.isBeforeDate(this.calendarDatesService.convertDayToCalendarDate(new Date), this.fullRefundDate)) {
      this.refundStatus = "a complete refund."
    } else if (this.partialRefundDate && this.calendarDatesService.isBeforeDate(this.calendarDatesService.convertDayToCalendarDate(new Date), this.partialRefundDate)) {
      this.refundStatus = "a partial refund."
    } else {
      this.refundStatus = "no refund."
    }
  }

  openHouseRulesModal() {
    this.isHouseRulesModalOpen = true;
  }

  closeHouseRulesModal() {
    this.isHouseRulesModalOpen = false;
  }

  openCancelReservationModal() {
    this.isCancelReservationModalOpen = true;
  }

  closeCancelReservationModal() {
    this.isCancelReservationModalOpen = false;
  }

  cancelTripHandler() {
    if (this.trip) {
      this.closeCancelReservationModal();
      this.tripService.deleteTrip(this.trip.id).subscribe(() => {
        this.router.navigate(['/trips'], { replaceUrl: true });
      })
    }
  }
}
