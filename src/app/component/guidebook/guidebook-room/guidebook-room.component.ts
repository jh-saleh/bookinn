import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarDate, CalendarDatesService } from '../../../IoC/service/calendar-dates.service';
import { CheckType, GuideBook, GuidebookInformation, HourBoundary, LeaveRule, SafetyDevice, StayRule, leaveRulesTable, safetyDeviceTable, stayRulesTable } from '../../../model/inn/guidebook.model';
import { CalendarDateFormatPipe } from '../../../pipe/calendar-date-format.pipe';
import { CamelToSentencePipe } from '../../../pipe/cameltosentence.pipe';
import { NegationPipe } from '../../../pipe/negation.pipe';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';
import { FullViewModalComponent } from '../../windows/full-view-classic-modal/full-view-modal.component';

@Component({
  selector: 'guidebook-room',
  standalone: true,
  imports: [CommonModule, FullViewModalComponent, PluralizePipe, CamelToSentencePipe, NegationPipe, FullViewModalComponent, CalendarDateFormatPipe],
  providers: [CalendarDatesService],
  templateUrl: './guidebook-room.component.html',
  styleUrl: './guidebook-room.component.css'
})
export class GuidebookRoomComponent {
  _guidebook!: GuideBook;
  @Input({ required: true }) set guidebook(value: GuideBook) {
    this._guidebook = value;
    this.isTimeCheck = this._guidebook.houserules.time.type === CheckType.StandardCheck;
    if (this.isTimeCheck) {
      if (this._guidebook.houserules.time.interval?.checkIn) {
        this.checkInHours = this.getHours(this._guidebook.houserules.time.interval.checkIn);
      }
      if (this._guidebook.houserules.time.interval?.checkOut) {
        this.checkOutHours = this.getHours(this._guidebook.houserules.time.interval?.checkOut);
      }
    }
    this.stayRules = Object.entries(this._guidebook.houserules.stay).map((entry) => ({ enum: entry[0], icon: stayRulesTable[entry[0] as StayRule], included: entry[1] }));
    if (this._guidebook.houserules.leave) {
      this.leaveRules = this._guidebook.houserules.leave.map((entry) => ({ enum: entry, icon: leaveRulesTable[entry as LeaveRule] }));
    }
    this.safetyRules = Object.entries(this._guidebook.safety).map((entry) => ({ enum: entry[0], icon: safetyDeviceTable[entry[0] as SafetyDevice], included: entry[1] }));
  };
  get guidebook(): GuideBook {
    return this._guidebook;
  }
  isTimeCheck!: boolean;
  checkInHours?: string;
  checkOutHours?: string;
  stayRules: GuidebookInformation[] = [];
  leaveRules: GuidebookInformation[] = [];
  safetyRules: GuidebookInformation[] = [];
  @Input({ required: true }) maxNumberOfGuests!: number;
  isHouseRulesModalOpen: boolean = false;
  isSafetyPropertyModalOpen: boolean = false;
  isCancellationPolicyModalOpen: boolean = false;
  fullRefundDate: CalendarDate | undefined;
  partialRefundDate: CalendarDate | undefined;
  noRefundDate: CalendarDate | undefined;
  _startingDate: CalendarDate | undefined;
  @Input({ required: true }) set startingDate(date: CalendarDate | undefined) {
    this._startingDate = date;
    console.log("startingDate", date);
    if (date) {
      if (this.guidebook.cancellationPolicy.fullRefund) {
        this.fullRefundDate = this.calendarDatesService.substractDaysFromDate(date, this.guidebook.cancellationPolicy.fullRefund);
      }
      if (this.guidebook.cancellationPolicy.partialRefund) {
        this.partialRefundDate = this.calendarDatesService.substractDaysFromDate(date, this.guidebook.cancellationPolicy.partialRefund);
      }
      this.noRefundDate = this.calendarDatesService.substractDaysFromDate(date, this.guidebook.cancellationPolicy.noRefund);
    }
  }
  get startingDate(): CalendarDate | undefined {
    return;
  }
  @Input({ required: true }) endingDate: CalendarDate | undefined;
  houseRulesSummary: string[] = [];

  constructor(private calendarDatesService: CalendarDatesService) {

  }

  readonly openHouseRulesModal = () => {
    this.isHouseRulesModalOpen = true;
  }

  readonly closeHouseRulesModal = () => {
    this.isHouseRulesModalOpen = false;
  }

  readonly openSafetyPropertyModal = () => {
    this.isSafetyPropertyModalOpen = true;
  }

  readonly closeSafetyPropertyModal = () => {
    this.isSafetyPropertyModalOpen = false;
  }

  readonly openCancellationPolicyModal = (disableOnClickFunction: boolean = false) => {
    if (disableOnClickFunction) {
      return;
    }
    this.isCancellationPolicyModalOpen = true;
  }

  readonly closeCancellationPolicyModal = (disableOnClickFunction: boolean = false) => {
    if (disableOnClickFunction) {
      return;
    }
    this.isCancellationPolicyModalOpen = false;
  }

  getHours(hourBoundary: HourBoundary): string {
    const { lowerBoundary, upperBoundary } = hourBoundary;
    if (lowerBoundary && upperBoundary) {
      return `: ${lowerBoundary} - ${upperBoundary}`;
    } else if (lowerBoundary) {
      return `before ${lowerBoundary}`;
    } else {
      return `after ${upperBoundary}`;
    }
  }
}