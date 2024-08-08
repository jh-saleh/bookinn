import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelToSentence',
  standalone: true
})
export class CamelToSentencePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    let spacedString = value.replace(/([A-Z])/g, ' $1').toLowerCase().trim();
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
  }

}
