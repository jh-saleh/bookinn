import { Pipe, PipeTransform } from '@angular/core';
import { HourBoundary } from '../hexagonal/domain/model/stay/guidebook.model';

@Pipe({
  name: 'hourBoundaryToString',
  standalone: true
})
export class HourBoundaryToStringPipe implements PipeTransform {

  transform(hourBoundary: HourBoundary | undefined, position: 'beginning' | 'end' = 'end'): string | null {
    if (!hourBoundary) {
      return null;
    }

    const { lowerBoundary, upperBoundary } = hourBoundary;
    if (lowerBoundary && upperBoundary) {
      return `${position === 'beginning' ? '' : ': '}${lowerBoundary} - ${upperBoundary}`;
    } else if (lowerBoundary) {
      return `${position === 'beginning' ? 'B' : 'b'}efore ${lowerBoundary}`;
    } else {
      return `${position === 'beginning' ? 'A' : 'a'}fter ${upperBoundary}`;
    }
  }

}
