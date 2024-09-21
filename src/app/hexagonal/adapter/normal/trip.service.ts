import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CalendarDate } from "../../../service/calendar-dates.service";
import { Guests } from "../../domain/model/stay/guest.model";
import { Trip } from "../../domain/model/trip/trip.model";
import { TripPort } from "../../domain/port/trip.port";

@Injectable({
    providedIn: 'root'
})
export class TripService implements TripPort {
    getTrip(tripId: string): Observable<Trip | undefined> {
        throw Error("getTrip to implement.");
    }

    getTrips(): Observable<Trip[]> {
        throw Error("getTrips to implement.");
    }

    createTrip(stayId: string, startingDate: CalendarDate, endingDate: CalendarDate, guest: Guests): Observable<Trip | undefined> {
        throw Error("createTrip to implement.");
    }

    deleteTrip(tripId: string): Observable<void> {
        throw Error("deleteTrip to implement.");
    }
}