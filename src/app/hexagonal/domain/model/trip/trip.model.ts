import { CalendarDate } from "../../../../service/calendar-dates.service";
import { Guests } from "../stay/guest.model";
import { Host } from "../stay/host.model";
import { Stay } from "../stay/stay.model";

export interface Trip {
    id: string;
    host: Host;
    stay: Stay;
    startingDate: CalendarDate;
    endingDate: CalendarDate;
    guests: Guests;
}

export interface TripMockDatabase {
    id: string;
    userId: string;
    stayId: string;
    startingDate: string;
    endingDate: string;
    nbAdults: number;
    nbChildren: number;
    nbInfants: number;
    nbPets: number;
}