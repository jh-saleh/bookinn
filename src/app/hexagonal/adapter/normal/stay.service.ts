import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay } from '../../domain/model/stay/stay.model';

@Injectable({
    providedIn: 'root'
})
export class StayService {

    constructor() { }

    getHomePageStays(): Observable<Stay[]> {
        throw Error("getHomePageStays to implement.");
    }

    searchStays(location: string | null, nbGuests: number | null): Observable<Stay[]> {
        throw Error("searchStays to implement.");
    }

    getStays(...ids: string[]): Observable<Stay[]> {
        throw Error("getStays to implement.");
    }

    getStay(id: string): Observable<Stay> {
        throw Error("getStay to implement.");
    }
}