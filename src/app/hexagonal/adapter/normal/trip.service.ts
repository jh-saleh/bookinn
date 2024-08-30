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
    getTrips(): Observable<Trip[]> {
        throw Error("getTrips to implement.");
    }

    createTrip(stayId: string, startingDate: CalendarDate, endingDate: CalendarDate, guest: Guests): Observable<Trip | undefined> {
        throw Error("createTrip to implement.");
    }
}