import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CalendarDate } from "../../../service/calendar-dates.service";
import { Guests } from "../model/stay/guest.model";
import { Trip } from "../model/trip/trip.model";

@Injectable({
    providedIn: 'root'
})
export class TripPort {
    getTrips(): Observable<Trip[]> {
        throw Error("getTrips to implement.");
    }

    createTrip(stayId: string, startingDate: CalendarDate, endingDate: CalendarDate, guest: Guests): Observable<Trip | undefined> {
        throw Error("createTrip to implement.");
    }
}