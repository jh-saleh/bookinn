import { Pipe, PipeTransform } from '@angular/core';
import { HostInformationTable, HostInformationType } from '../../../model/stay/host.model';

@Pipe({
  name: 'hostInformationIcon',
  standalone: true
})
export class HostInformationIconPipe implements PipeTransform {

  transform(value: HostInformationType): string {
    return HostInformationTable[value].icon;
  }
}
