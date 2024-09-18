import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  standalone: true
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: string | string[], separator: string = ', '): string {
    if (Array.isArray(value)) {
      return value.join(separator);
    }
    return value;
  }

}
