import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Days, DaysShortHand, Month, convertMonthToNumber, getCurrentCalendarDate, getDayName, getNbOfDaysFromMonth, getNextMonth, getPreviousMonth } from '../../model/enum/date.util';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  isCalendarOpen: boolean = true;
  currentDay!: number;
  currentMonth!: Month;
  currentYear!: number;
  firstYear!: number;
  secondYear!: number;
  firstMonth!: Month;
  daysOfTheFirstMonth!: number[];
  secondMonth!: Month;
  daysOfTheSecondMonth!: number[];
  validDaysOfTheFirstMonth!: boolean[];
  validDaysOfTheSecondMonth!: boolean[];
  maxYear: number = 3;
  disablePreviousMonthButton: boolean = false;
  disableNextMonthButton: boolean = false;

  readonly week: string[] = Object.values(DaysShortHand);

  ngOnInit(): void {
    const { currentDay, firstMonth, firstYear, secondMonth, secondYear } = getCurrentCalendarDate();
    this.currentDay = currentDay;
    this.currentMonth = firstMonth;
    this.currentYear = firstYear;
    this.firstMonth = firstMonth;
    this.firstYear = firstYear;
    this.secondMonth = secondMonth;
    this.secondYear = secondYear;
    this.updateDaysOfTheCalendar();
    this.updateAccessToMonthsButton();
  }

  fillEmptyDaySlot(day: Days): number {
    switch (day) {
      case Days.Sunday: return 0;
      case Days.Monday: return 1;
      case Days.Tuesday: return 2;
      case Days.Wednesday: return 3;
      case Days.Thursday: return 4;
      case Days.Friday: return 5;
      case Days.Saturday: return 6;
    }
  }

  getDaysOfTheMonthAndYear(year: number, month: Month): number[] {
    const daysNameOfStartFirstMonth = getDayName(year, convertMonthToNumber(month), 1);
    const nbEmptyDaysFilledForFirstMonth = this.fillEmptyDaySlot(daysNameOfStartFirstMonth);
    let emptyDaysFilledForFirstMonth = Array.from({ length: nbEmptyDaysFilledForFirstMonth }, () => 0);
    const nbOfDaysForFirstMonth = getNbOfDaysFromMonth(month, year);
    const daysOfTheFirstMonth = Array.from({ length: nbOfDaysForFirstMonth }, (_v, i) => i + 1);
    return emptyDaysFilledForFirstMonth.concat(daysOfTheFirstMonth);
  }

  isOlderThanCurrentDate(day: number, month: Month, year: number): boolean {
    if (year < this.currentYear) {
      return true;
    }
    if (year === this.currentYear && convertMonthToNumber(month) < convertMonthToNumber(this.currentMonth)) {
      return true;
    }
    if (year === this.currentYear && convertMonthToNumber(month) === convertMonthToNumber(this.currentMonth) && day < this.currentDay) {
      return true;
    }
    return false;
  }

  updateDaysOfTheCalendar() {
    this.daysOfTheFirstMonth = this.getDaysOfTheMonthAndYear(this.firstYear, this.firstMonth);
    this.validDaysOfTheFirstMonth = this.daysOfTheFirstMonth.filter((day) => day !== 0).map((day) => this.isOlderThanCurrentDate(day, this.firstMonth, this.firstYear));
    this.daysOfTheSecondMonth = this.getDaysOfTheMonthAndYear(this.secondYear, this.secondMonth);
    this.validDaysOfTheSecondMonth = this.daysOfTheSecondMonth.filter((day) => day !== 0).map((day) => this.isOlderThanCurrentDate(day, this.secondMonth, this.secondYear));
  }

  updateAccessToMonthsButton() {
    this.disablePreviousMonthButton = this.shouldDisablePreviousMonthButton();
    this.disableNextMonthButton = this.shouldDisableNextMonthButton();
  }

  closeCalendar() {

  }

  openCalendar() {

  }

  shouldDisableNextMonthButton(): boolean {
    return this.currentYear + this.maxYear === this.secondYear && this.currentMonth === this.firstMonth;
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

  shouldDisablePreviousMonthButton(): boolean {
    return this.currentYear === this.firstYear && this.currentMonth === this.firstMonth;
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
}
