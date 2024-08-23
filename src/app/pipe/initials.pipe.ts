import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true
})
export class InitialsPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value) {
      return value.toLocaleUpperCase()[0];
    }
    return "";
  }

}
