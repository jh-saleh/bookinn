import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { css } from '@emotion/css';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { CalendarDate, CalendarDatesService } from '../../service/calendar-dates.service';

@Component({
  selector: 'date-input',
  standalone: true,
  imports: [CommonModule, CalendarDateFormatPipe, FormsModule],
  providers: [CalendarDateFormatPipe, CalendarDatesService],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css'
})
export class DateInputComponent implements AfterViewInit, OnInit {
  @Input({ required: true }) label!: string;
  _date: CalendarDate | undefined;
  @Input({ required: true }) set date(value: CalendarDate | undefined) {
    this._date = value;
    this.inputValue = this.calendarDateFormatPipe.transform(this._date, "MM/dd/yyyy") ?? '';
    this.isValidDate = true;
  };
  get date(): CalendarDate | undefined {
    return this._date;
  }
  @Input() set borderRadius(value: "left" | "right" | undefined) {
    const leftBorder = css`
      border-left: 1px var(--black-300) solid;
    `;
    const rightBorder = css`
      border-right: 1px var(--black-300) solid;
    `;
    if (value) {
      this.borderRadiusClass = css`
      border-top-${value}-radius: var(--box-border-radius);
      border-bottom-${value}-radius: var(--box-border-radius);
      border-top: 1px var(--black-300) solid;
      border-bottom: 1px var(--black-300) solid;
      ${value === "left" ? leftBorder : rightBorder}
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
  @Input() minDate: CalendarDate | undefined;
  @Input() maxDate: CalendarDate | undefined;

  constructor(private calendarDateFormatPipe: CalendarDateFormatPipe, private calendarDateService: CalendarDatesService) {

  }

  ngAfterViewInit(): void {
    if (this.focusOnInit) {
      this.inputRef?.nativeElement.focus();
    }
  }

  ngOnInit(): void {
    if (this.focusOnInit) {
      this.onFocusHandler();
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
    if (this.inputValue && this.isValidDate) {
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
      if (this.validateDate(this.inputValue)) {
        const inputCalendarDate = this.calendarDateService.convertStringToCalendarDate(this.inputValue);
        this.isValidDate = this.calendarDateService.isDateInsideCalendar(inputCalendarDate)
          && (!this.minDate || (this.minDate && this.calendarDateService.isStrictlyAfterDate(inputCalendarDate, this.minDate)))
          && (!this.maxDate || (this.maxDate && this.calendarDateService.isStrictlyBeforeDate(inputCalendarDate, this.maxDate)));
      } else {
        this.isValidDate = false;
      }
    } else {
      this.isValidDate = true;
    }
  }
}
