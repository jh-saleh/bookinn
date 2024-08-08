import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { CalendarDate } from '../IoC/service/calendar-dates.service';

@Pipe({
  name: 'calendarDateFormat',
  standalone: true
})
export class CalendarDateFormatPipe implements PipeTransform {

  transform(calendarDate?: CalendarDate, format: string = 'mediumDate'): string | null {
    if (!calendarDate) return null;
    // Convert CalendarDate to a Date object
    const date = new Date(calendarDate.year, calendarDate.month - 1, calendarDate.day);
    // Use DatePipe to format the Date object
    return new DatePipe('en-US').transform(date, format);
  }
}
