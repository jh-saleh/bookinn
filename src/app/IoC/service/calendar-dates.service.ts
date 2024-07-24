import { Injectable } from '@angular/core';
import { Days, Month, convertMonthToNumber, getDayName } from '../../model/enum/date.util';

export interface CalendarDate {
  day: number;
  month: number;
  year: number;
}

export interface CalendarDay {
  position?: number;
  dayOfTheMonth: number;
  unavailable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarDatesService {
  maxYear: number = 2;
  private positionIndex: number = 0;
  private days: Record<string, CalendarDay[]> = {};
  private currentDay!: number;
  private currentMonth!: number;
  private currentYear!: number;
  private firstMonth!: number;
  private firstYear!: number;

  constructor() {
    const { day, month, year } = this.getCurrentCalendarDate();
    this.currentDay = day;
    this.currentMonth = month;
    this.currentYear = year;
    this.firstMonth = month;
    this.firstYear = year;
    this.init();
  }

  private getCurrentCalendarDate(): CalendarDate {
    const currentDate = new Date();
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    return {
      day: currentDay,
      month: currentMonth,
      year: currentYear,
    };
  }

  private fillEmptyDaySlot(day: Days): number {
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

  private getNbOfDaysFromMonth(month: number, year: number): number {
    if (year < 1980) {
      throw Error("The year cannot be before 1980");
    }
    const thirties = [9, 11, 4, 6];
    if (thirties.includes(month)) {
      return 30;
    } else if (2 === month) {
      return year % 4 === 0 ? 29 : 28;
    } else {
      return 31;
    }
  }

  private isOlderThanCurrentDate(day: number, month: number, year: number): boolean {
    if (year < this.currentYear) {
      return true;
    }
    if (year === this.currentYear && month < this.currentMonth) {
      return true;
    }
    if (year === this.currentYear && month === this.currentMonth && day < this.currentDay) {
      return true;
    }
    return false;
  }

  private generateDaysOfTheMonth(year: number, month: number): CalendarDay[] {
    const daysNameOfStartFirstMonth = getDayName(year, month, 1);
    const nbEmptyDaysFilledForFirstMonth = this.fillEmptyDaySlot(daysNameOfStartFirstMonth);
    let emptyDaysFilledForFirstMonth: CalendarDay[] = Array.from({ length: nbEmptyDaysFilledForFirstMonth }, () => { return { dayOfTheMonth: 0 } });
    const nbOfDaysForMonth = this.getNbOfDaysFromMonth(month, year);
    return [...emptyDaysFilledForFirstMonth,
    ...Array.from({ length: nbOfDaysForMonth },
      (_v, i) => { return { position: this.positionIndex++, dayOfTheMonth: i + 1, unavailable: this.isOlderThanCurrentDate(i + 1, month, year) } })];
  }

  getDaysOfTheMonth(year: number, month: Month): CalendarDay[] {
    return this.days[`${year}-${convertMonthToNumber(month)}`];
  }

  getMaxYear(): number {
    return this.maxYear;
  }

  private nextMonth() {
    this.firstMonth = (this.firstMonth % 12) + 1;
    if (this.firstMonth === 1) {
      this.firstYear++;
    }
  }

  private init() {
    for (let y = 0; y < this.maxYear; y++) {
      for (let m = 0; m < 12; m++) {
        this.days[`${this.firstYear}-${this.firstMonth}`]
          = this.generateDaysOfTheMonth(this.firstYear, this.firstMonth);
        this.nextMonth();
      }
    }
    this.days[`${this.firstYear}-${this.firstMonth}`]
      = this.generateDaysOfTheMonth(this.firstYear, this.firstMonth);
    this.nextMonth();
  }
}
