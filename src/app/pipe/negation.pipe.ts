import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negation',
  standalone: true
})
export class NegationPipe implements PipeTransform {

  transform(value: string, valid?: boolean, validationLabel?: string): string {
    if (valid || valid === undefined) {
      return validationLabel ? `${value} ${validationLabel}` : value;
    }
    return `No ${value}`;
  }

}