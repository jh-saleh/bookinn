import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { css } from '@emotion/css';
import { DaysShortHand, Month, convertMonthToNumber, getCurrentCalendarDate, getNextMonth, getPreviousMonth } from '../../hexagonal/domain/model/enum/date.util';
import { CalendarDate, CalendarDatesService, CalendarDay } from '../../service/calendar-dates.service';
import { ModalComponent } from "../windows/modal/modal.component";

@Component({
  selector: 'calendar',
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
  readonly week: string[] = Object.values(DaysShortHand);
  @Output() sendStartingDate = new EventEmitter<CalendarDate | undefined>();
  @Output() sendEndingDate = new EventEmitter<CalendarDate | undefined>();
  dayWrapper: string = css`
    width: ${this.mode === 'modal' ? 45 : 35}px;
    height: ${this.mode === 'modal' ? 45 : 35}px;
  `;
  private _mode: 'normal' | 'modal' = 'modal';
  @Input({ required: true }) set mode(value: 'normal' | 'modal') {
    this._mode = value;
    this.dayWrapper = css`
        width: ${this._mode === 'modal' ? 45 : 35}px;
        height: ${this._mode === 'modal' ? 45 : 35}px;
    `;
  }
  bgColorClass: string = "";
  colorClass: string = "";
  disabledColorClass: string = "";
  hoverBgClass: string = "";
  pathDayClass: string = "";
  startPathDayClass: string = "";
  endPathDayClass: string = "";
  resetSelectedDatesButtonColor: string = "";
  private _theme: 'white' | 'red' = 'white';
  @Input({ required: true }) set theme(value: 'white' | 'red') {
    this._theme = value;
    const isThemeWhite = this._theme === "white";
    this.bgColorClass = css`
      background-color: ${isThemeWhite ? "white" : "var(--background)"};
    `;
    this.colorClass = css`
      color: ${isThemeWhite ? "black" : "white"};
      `;
    this.disabledColorClass = css`
      color: ${isThemeWhite ? "var(--black-500)" : "var(--black-300)"};
    `;
    this.hoverBgClass = css`
    :hover{
      background-color: ${isThemeWhite ? "var(--background-box-hover)" : "var(--crimson-400)"};
      outline: 1px ${isThemeWhite ? "black" : "white"} solid;
      position: relative;
      z-index: 1;
    }
    `;
    this.pathDayClass = css`
      background-color: ${isThemeWhite ? "var(--background-box-hover)" : "var(--crimson-400)"};
    `;
    this.startPathDayClass = css`
      background-color: ${isThemeWhite ? "var(--background-box-hover)" : "var(--crimson-400)"};
      border-top-left-radius: 100%;
      border-bottom-left-radius: 100%;
    `;
    this.endPathDayClass = css`
      background-color: ${isThemeWhite ? "var(--background-box-hover)" : "var(--crimson-400)"};
      border-top-right-radius: 100%;
      border-bottom-right-radius: 100%;
    `;
    this.resetSelectedDatesButtonColor = css`
      color: ${isThemeWhite ? "var(--black-900)" : "white"};
      :hover{
        background-color: ${isThemeWhite ? "var(--background-box-hover)" : "var(--crimson-400)"};
      }
    `;
  }
  @Input() set initStartingDate(date: CalendarDate | undefined) {
    if (date && this.calendarDatesService.isDateInsideCalendar(date)) {
      const position = this.calendarDatesService.getCalendarDatePosition(date);
      this.selectDate(position, 0);
    }

    if (date === undefined) {
      this.resetSelectedDatesWithoutEmittingToParent();
    }
  }
  @Input() set initEndingDate(date: CalendarDate | undefined) {
    if (date && this.calendarDatesService.isDateInsideCalendar(date)) {
      const position = this.calendarDatesService.getCalendarDatePosition(date);
      this.selectDate(position, 1);
    }

    if (date === undefined) {
      this.resetSelectedDatesWithoutEmittingToParent();
    }
  }

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

  selectDateOnClickHandler(position: number) {
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
      this.sendStartingDateHandler();
    }
    if (this.clickPointer === 1) {
      this.sendEndingDateHandler();
    }
  }

  selectDate(position: number, clickPointer: 0 | 1) {
    this.daysSelected[clickPointer] = position;
  }

  resetSelectedDates() {
    this.clickPointer = undefined;
    this.daysSelected = [];
    this.sendStartingDate.emit(undefined);
    this.sendEndingDate.emit(undefined);
  }

  resetSelectedDatesWithoutEmittingToParent() {
    this.clickPointer = undefined;
    this.daysSelected = [];
  }

  sendStartingDateHandler() {
    const date = new Date(this.currentYear, convertMonthToNumber(this.currentMonth) - 1, 1);
    date.setDate(date.getDate() + this.daysSelected[0]);
    this.sendStartingDate.emit(this.calendarDatesService.convertDayToCalendarDate(date));
  }

  sendEndingDateHandler() {
    const date = new Date(this.currentYear, convertMonthToNumber(this.currentMonth) - 1, 1);
    date.setDate(date.getDate() + this.daysSelected[1]);
    this.sendEndingDate.emit(this.calendarDatesService.convertDayToCalendarDate(date));
  }
}