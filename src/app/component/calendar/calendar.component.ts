import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DaysShortHand, Month, convertMonthToNumber, getCurrentCalendarDate, getNextMonth, getPreviousMonth } from '../../model/enum/date.util';
import { CalendarDate, CalendarDatesService, CalendarDay } from '../../service/calendar-dates/calendar-dates.service';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  currentDay!: number;
  currentMonth!: Month;
  currentYear!: number;
  firstYear!: number;
  secondYear!: number;
  firstMonth!: Month;
  daysOfTheFirstMonth!: CalendarDay[];
  secondMonth!: Month;
  daysOfTheSecondMonth!: CalendarDay[];
  maxYear!: number;
  disablePreviousMonthButton: boolean = false;
  disableNextMonthButton: boolean = false;
  selectedDate!: CalendarDate;
  clickPointer: number | undefined;
  daysSelected: number[] = [];
  @Output() startingDate = new EventEmitter<CalendarDate | undefined>();
  @Output() endingDate = new EventEmitter<CalendarDate | undefined>();

  readonly week: string[] = Object.values(DaysShortHand);

  constructor(private calendarDatesService: CalendarDatesService) {

  }

  ngOnInit(): void {
    const { currentDay, firstMonth, firstYear, secondMonth, secondYear } = getCurrentCalendarDate();
    this.currentDay = currentDay;
    this.currentMonth = firstMonth;
    this.currentYear = firstYear;
    this.firstMonth = firstMonth;
    this.firstYear = firstYear;
    this.secondMonth = secondMonth;
    this.secondYear = secondYear;
    this.maxYear = this.calendarDatesService.getMaxYear();
    this.updateDaysOfTheCalendar();
    this.updateAccessToMonthsButton();
  }

  updateDaysOfTheCalendar() {
    this.daysOfTheFirstMonth = this.calendarDatesService.getDaysOfTheMonth(this.firstYear, this.firstMonth);
    this.daysOfTheSecondMonth = this.calendarDatesService.getDaysOfTheMonth(this.secondYear, this.secondMonth);
  }

  updateAccessToMonthsButton() {
    this.disablePreviousMonthButton = this.shouldDisablePreviousMonthButton();
    this.disableNextMonthButton = this.shouldDisableNextMonthButton();
  }

  shouldDisableNextMonthButton(): boolean {
    return this.currentYear + this.maxYear === this.secondYear && this.secondMonth === this.currentMonth;
  }

  shouldDisablePreviousMonthButton(): boolean {
    return this.currentYear === this.firstYear && this.currentMonth === this.firstMonth;
  }

  nextMonth() {
    this.firstMonth = this.secondMonth;
    this.secondMonth = getNextMonth(this.secondMonth);
    if (Month.January === this.secondMonth) {
      this.secondYear = this.firstYear + 1;
    }
    if (Month.February === this.secondMonth) {
      this.firstYear = this.firstYear + 1;
    }
    this.updateDaysOfTheCalendar();
    this.updateAccessToMonthsButton();
  }

  previousMonth() {
    this.secondMonth = this.firstMonth;
    this.firstMonth = getPreviousMonth(this.firstMonth);
    if (Month.December === this.firstMonth) {
      this.firstYear = this.secondYear - 1;
    }
    if (Month.November === this.firstMonth) {
      this.secondYear = this.secondYear - 1;
    }
    this.updateDaysOfTheCalendar();
    this.updateAccessToMonthsButton();
  }

  selectDate(position: number) {
    if (this.clickPointer === undefined) {
      this.clickPointer = 0;
    }
    if (position === this.daysSelected[0] || position === this.daysSelected[1]) {
      return;
    }
    if (position > this.daysSelected[0]) {
      this.clickPointer = 1;
    }
    if (position < this.daysSelected[0]) {
      this.clickPointer = 0;
    }
    this.daysSelected[this.clickPointer] = position;
    if (this.clickPointer === 0) {
      this.sendStartingDate();
    }
    if (this.clickPointer === 1) {
      this.sendEndingDate();
    }
  }

  resetSelectedDates() {
    this.clickPointer = undefined;
    this.daysSelected = [];
    this.startingDate.emit(undefined);
    this.endingDate.emit(undefined);
  }

  sendStartingDate() {
    const date = new Date(this.currentYear, convertMonthToNumber(this.currentMonth), 1);
    date.setDate(date.getDate() + this.daysSelected[0] + 1);
    this.startingDate.emit({ year: date.getFullYear(), month: date.getMonth(), day: date.getUTCDate() });
  }

  sendEndingDate() {
    const date = new Date(this.currentYear, convertMonthToNumber(this.currentMonth), 1);
    date.setDate(date.getDate() + this.daysSelected[1] + 1);
    this.endingDate.emit({ year: date.getFullYear(), month: date.getMonth(), day: date.getUTCDate() });
  }
}