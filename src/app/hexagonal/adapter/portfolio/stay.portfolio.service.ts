import { Injectable } from '@angular/core';
import { Observable, from, mergeMap, of, toArray } from 'rxjs';
import { stays } from '../../../stub/stay.stub';
import { Stay } from '../../domain/model/stay/stay.model';
import { StayPort } from '../../domain/port/stay.port';

@Injectable({
  providedIn: 'root'
})
export class StayPortfolioService implements StayPort {

  constructor() { }

  getHomePageStays(): Observable<Stay[]> {
    return of(stays);
  }

  searchStays(location: string | null, nbGuests: number | null): Observable<Stay[]> {
    if (location && nbGuests) {
      return of(stays.filter(stay => (stay.location.city === location && stay.maxNumberOfGuests >= nbGuests)));
    } else if (location) {
      return of(stays.filter(stay => (stay.location.city === location)));
    } else if (nbGuests) {
      return of(stays.filter(stay => (stay.maxNumberOfGuests >= nbGuests)));
    } else {
      return of([]);
    }
  }

  getStays(...ids: string[]): Observable<Stay[]> {
    return from(ids)
      .pipe(mergeMap((id) => this.getStay(id)), toArray());
  }

  getStay(id: string): Observable<Stay> {
    const innIndex: number = stays.findIndex((inn) => inn.id === id);
    if (innIndex > -1) {
      return of(stays[innIndex]);
    }
    throw Error("Stay not found.");
  }
}