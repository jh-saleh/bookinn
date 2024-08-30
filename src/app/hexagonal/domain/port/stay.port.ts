import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay, StayWithDistanceToOrigin } from '../model/stay/stay.model';

@Injectable({
    providedIn: 'root'
})
export class StayPort {

    constructor() { }

    getHomePageStays(): Observable<Stay[]> {
        throw Error("getHomePageStays to implement.");
    }

    searchStays(location: string | null, nbGuests: number | null, page: number): Observable<{ stays: StayWithDistanceToOrigin[], lastPage: number }> {
        throw Error("searchStays to implement.");
    }

    getStays(...ids: string[]): Observable<Stay[]> {
        throw Error("getStays to implement.");
    }

    getStay(id: string | undefined): Observable<Stay | undefined> {
        throw Error("getStay to implement.");
    }
}