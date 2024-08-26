import { Pipe, PipeTransform } from '@angular/core';
import { CalendarDate } from '../service/calendar-dates.service';

@Pipe({
  name: 'pastDateStrikeThrough',
  standalone: true
})
export class PastDateStrikeThroughPipe implements PipeTransform {
  transform(value: string, date: CalendarDate | undefined): string {
    if (!date) {
      return value;
    }

    const currentDate = new Date();
    const givenDate = new Date(date.year, date.month - 1, date.day);

    if (givenDate < currentDate) {
      return `<del>${value}</del>`;
    } else {
      return value;
    }
  }
}
