import { Injectable } from '@angular/core';
import { Observable, from, mergeMap, of, toArray } from 'rxjs';
import { stays } from '../../../stub/stay.stub';
import { CityName, world } from '../../domain/model/land/land.model';
import { Coordinates } from '../../domain/model/stay/location.model';
import { Stay, StayWithDistanceToOrigin } from '../../domain/model/stay/stay.model';
import { StayPort } from '../../domain/port/stay.port';

@Injectable({
  providedIn: 'root'
})
export class StayPortfolioService implements StayPort {

  getHomePageStays(): Observable<Stay[]> {
    return of(stays.slice(0, 40));
  }

  getCoordinates(city: CityName): Coordinates {
    return world[city].position;
  }

  getDistanceBetweenCities(originCity: CityName, targetCity: CityName): number {
    const { x: xOrigin, y: yOrigin } = this.getCoordinates(originCity);
    const { x: xTarget, y: yTarget } = this.getCoordinates(targetCity);

    return Math.floor(Math.sqrt(Math.pow(xOrigin - xTarget, 2) + Math.pow(yOrigin - yTarget, 2)) * 0.1);
  }

  searchStays(location: string | null, nbGuests: number | null, page: number): Observable<{ stays: StayWithDistanceToOrigin[], lastPage: number }> {
    const maxNbOfStaysPerPage: number = 6;
    const radius = 35;
    // 5 page = 3; 35
    // 4 page = 3; 30
    // 3 page = 6; 35
    // 2 page = 6; 25
    if (location && nbGuests) {
      const staysResult = stays.map((stay) => ({ ...stay, distanceToOrigin: this.getDistanceBetweenCities(location as CityName, stay.location.city) }))
        .filter((stayWithDistanceToOrigin) => (stayWithDistanceToOrigin.distanceToOrigin < radius))
        .filter((stayWithDistanceToOrigin) => (stayWithDistanceToOrigin.maxNumberOfGuests >= nbGuests))
        .sort((a, b) => a.distanceToOrigin - b.distanceToOrigin);
      const lastPage: number = Math.ceil(staysResult.length / maxNbOfStaysPerPage);
      return of({ stays: staysResult.slice(maxNbOfStaysPerPage * (page - 1), maxNbOfStaysPerPage * page), lastPage });
    } else if (location) {
      const staysResult = stays.map((stay) => ({ ...stay, distanceToOrigin: this.getDistanceBetweenCities(location as CityName, stay.location.city) }))
        .filter((stayWithDistanceToOrigin) => (stayWithDistanceToOrigin.distanceToOrigin < radius))
        .sort((a, b) => a.distanceToOrigin - b.distanceToOrigin);
      const lastPage: number = Math.ceil(staysResult.length / maxNbOfStaysPerPage);
      return of({ stays: staysResult.slice(maxNbOfStaysPerPage * (page - 1), maxNbOfStaysPerPage * page), lastPage });
    }
    return of({ stays: [], lastPage: 1 });
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