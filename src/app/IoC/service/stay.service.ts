import { Injectable } from '@angular/core';
import { Stay } from '../../model/stay/stay.model';
import { stays } from '../../stub/stay.stub';

@Injectable({
  providedIn: 'root'
})
export class StaysService {

  constructor() { }

  getHomePageStays(): Stay[] {
    return stays;
  }

  searchStays(location: string | null, nbGuests: number | null): Stay[] {
    if (location && nbGuests) {
      return stays.filter(stay => (stay.location.city === location && stay.maxNumberOfGuests >= nbGuests));
    } else if (location) {
      return stays.filter(stay => (stay.location.city === location));
    } else if (nbGuests) {
      return stays.filter(stay => (stay.maxNumberOfGuests >= nbGuests));
    } else {
      return [];
    }
  }

  getStays(...ids: string[]): Stay[] {
    const staysOutput: Stay[] = [];
    ids.forEach((id) => {
      staysOutput.push(this.getStay(id));
    });
    return staysOutput;
  }

  getStay(id: string): Stay {
    const innIndex: number = stays.findIndex((inn) => inn.id === id);
    if (innIndex > -1) {
      return stays[innIndex];
    }
    throw Error("Stay not found.");
  }
}