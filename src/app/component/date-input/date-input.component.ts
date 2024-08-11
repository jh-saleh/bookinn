import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { css } from '@emotion/css';
import { CalendarDate, CalendarDatesService } from '../../IoC/service/calendar-dates.service';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';

@Component({
  selector: 'date-input',
  standalone: true,
  imports: [CommonModule, CalendarDateFormatPipe, FormsModule],
  providers: [CalendarDateFormatPipe, CalendarDatesService],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css'
})
export class DateInputComponent implements OnInit {
  @Input({ required: true }) label!: string;
  _date: CalendarDate | undefined;
  @Input({ required: true }) set date(value: CalendarDate | undefined) {
    this._date = value;
    this.inputValue = this.calendarDateFormatPipe.transform(this._date, "MM/dd/yyyy") ?? '';
  };
  get date(): CalendarDate | undefined {
    return this._date;
  }
  @Input() set borderRadius(value: "left" | "right" | undefined) {
    if (value) {
      this.borderRadiusClass = css`
      border-top-${value}-radius: var(--box-border-radius);
      border-bottom-${value}-radius: var(--box-border-radius);
    `;
    }
  };
  borderRadiusClass: string = "";
  @ViewChild("inputRef") inputRef: ElementRef<HTMLInputElement> | undefined;
  @Input() focusOnInit: boolean = false;
  @Output() sendDate = new EventEmitter<CalendarDate>();
  placeHolderLabel: "Add dates" | "MM/DD/YYYY" = "Add dates";
  inputValue: string = '';
  isValidDate: boolean = true;
  isRequired: boolean = false;

  constructor(private calendarDateFormatPipe: CalendarDateFormatPipe, private calendarDateService: CalendarDatesService) {

  }

  ngOnInit(): void {
    if (this.focusOnInit) {
      this.focusInput();
    }
  }

  focusInput() {
    this.inputRef?.nativeElement.focus();
    this.onFocusHandler();
  }

  onFocusHandler() {
    this.placeHolderLabel = "MM/DD/YYYY";
  }

  resetPlaceholderLabel() {
    this.placeHolderLabel = "Add dates";
  }

  onBlurHandler() {
    this.resetPlaceholderLabel();
    this.evaluateDate();
    if (this.isValidDate && !this.isRequired) {
      this.sendDate.emit(this.calendarDateService.convertStringToCalendarDate(this.inputValue));
    }
  }

  validateDate(dateString: string) {
    const regex = /^(?:(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/([0-9]{4}))$/;
    if (!regex.test(dateString)) {
      return false;
    }
    const [month, day, year] = dateString.split('/').map(Number);
    const daysInMonth: Record<number, number> = {
      1: 31,
      2: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31
    };
    return day <= daysInMonth[month];
  }

  evaluateDate() {
    if (this.inputValue) {
      this.isRequired = false;
      this.isValidDate = this.validateDate(this.inputValue) && this.calendarDateService.isDateInsideCalendar(this.calendarDateService.convertStringToCalendarDate(this.inputValue));
    } else {
      this.isValidDate = true;
      this.isRequired = true;
    }
  }
}
