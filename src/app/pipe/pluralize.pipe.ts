import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true
})
export class PluralizePipe implements PipeTransform {

  transform(value: number | undefined, originalString: string): string {
    if (value && value > 1) {
      return `${originalString}s`;
    }
    return originalString;
  }
}
