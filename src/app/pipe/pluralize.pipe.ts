import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true
})
export class PluralizePipe implements PipeTransform {

  transform(value: number | undefined, originalString: string, pluralMark: string = "s"): string {
    if (value && value > 1) {
      return `${originalString}${pluralMark}`;
    }
    return originalString;
  }
}
