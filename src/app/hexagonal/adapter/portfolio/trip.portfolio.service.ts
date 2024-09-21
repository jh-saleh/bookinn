import { Injectable } from "@angular/core";
import { Observable, filter, from, map, switchMap, toArray } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { CalendarDateFormatPipe } from "../../../pipe/calendar-date-format.pipe";
import { CalendarDate, CalendarDatesService } from "../../../service/calendar-dates.service";
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from "../../domain/model/const";
import { Guests } from "../../domain/model/stay/guest.model";
import { Host } from "../../domain/model/stay/host.model";
import { Stay } from "../../domain/model/stay/stay.model";
import { User } from "../../domain/model/stay/user.model";
import { Trip, TripMockDatabase } from "../../domain/model/trip/trip.model";
import { HostPort } from "../../domain/port/host.port";
import { StayPort } from "../../domain/port/stay.port";
import { TripPort } from "../../domain/port/trip.port";
import { UserPort } from "../../domain/port/user.port";
import { MockDatabasePortfolioService } from "./mock-database.portfolio.service";

@Injectable({
    providedIn: 'root'
})
export class TripPortfolioService implements TripPort {

    constructor(private userService: UserPort, private mockDatabase: MockDatabasePortfolioService, private hostService: HostPort,
        private stayService: StayPort, private calendarDateService: CalendarDatesService, private calendarDateFormatPipe: CalendarDateFormatPipe) {

    }

    getTrip(tripId: string): Observable<Trip | undefined> {
        return this.userService.getUser()
            .pipe(
                filter((user): user is User => !!user),
                switchMap((user) => from(this.mockDatabase.trip.where('userId').equals(user.id).and((trip) => trip.id === tripId).first()).pipe(
                    filter((tripDB): tripDB is TripMockDatabase => !!tripDB),
                    switchMap((tripDB) => this.stayService.getStay(tripDB.stayId).pipe(
                        filter((stay): stay is Stay => !!stay),
                        switchMap((stay) => this.hostService.getHost(stay.hostId).pipe(
                            filter((host): host is Host => !!host),
                            map((host) => ({
                                id: tripDB.id,
                                host,
                                stay,
                                startingDate: this.calendarDateService.convertStringToCalendarDate(tripDB.startingDate, "-"),
                                endingDate: this.calendarDateService.convertStringToCalendarDate(tripDB.endingDate, "-"),
                                guests: {
                                    adult: {
                                        nb: tripDB.nbAdults,
                                        maximum: MAX_NB_ADULTS,
                                    },
                                    child: {
                                        nb: tripDB.nbChildren,
                                        maximum: MAX_NB_CHILDREN,
                                    },
                                    infant: {
                                        nb: tripDB.nbInfants,
                                        maximum: MAX_NB_INFANTS,
                                    },
                                    pet: {
                                        nb: tripDB.nbPets,
                                        maximum: MAX_NB_PETS
                                    },
                                }
                            })),
                        )))),
                ))
            );
    }

    getTrips(): Observable<Trip[]> {
        return this.userService.getUser()
            .pipe(
                filter((user): user is User => !!user),
                switchMap((user) => from(this.mockDatabase.trip.where('userId').equals(user.id).toArray()).pipe(
                    switchMap((tripsDB) => from(tripsDB).pipe(
                        switchMap((tripDB) => this.stayService.getStay(tripDB.stayId).pipe(
                            filter((stay): stay is Stay => !!stay),
                            switchMap((stay) => this.hostService.getHost(stay.hostId).pipe(
                                filter((host): host is Host => !!host),
                                map((host) => ({
                                    id: tripDB.id,
                                    host,
                                    stay,
                                    startingDate: this.calendarDateService.convertStringToCalendarDate(tripDB.startingDate, "-"),
                                    endingDate: this.calendarDateService.convertStringToCalendarDate(tripDB.endingDate, "-"),
                                    guests: {
                                        adult: {
                                            nb: tripDB.nbAdults,
                                            maximum: MAX_NB_ADULTS,
                                        },
                                        child: {
                                            nb: tripDB.nbChildren,
                                            maximum: MAX_NB_CHILDREN,
                                        },
                                        infant: {
                                            nb: tripDB.nbInfants,
                                            maximum: MAX_NB_INFANTS,
                                        },
                                        pet: {
                                            nb: tripDB.nbPets,
                                            maximum: MAX_NB_PETS
                                        },
                                    }
                                })),
                            )))),
                        toArray())))
                ));
    }

    createTrip(stayId: string, startingDate: CalendarDate, endingDate: CalendarDate, guests: Guests): Observable<Trip | undefined> {
        return this.userService.getUser()
            .pipe(
                filter((user) => !!user),
                map((user) => {
                    const tripDB: TripMockDatabase = {
                        id: uuidv4(),
                        stayId,
                        userId: user?.id ?? "",
                        startingDate: this.calendarDateFormatPipe.transform(startingDate, "MM-dd-yyyy") ?? "",
                        endingDate: this.calendarDateFormatPipe.transform(endingDate, "MM-dd-yyyy") ?? "",
                        nbAdults: guests.adult.nb,
                        nbChildren: guests.child.nb,
                        nbInfants: guests.infant.nb,
                        nbPets: guests.pet.nb
                    };
                    this.mockDatabase.trip.add(tripDB);
                    return tripDB;
                }),
                switchMap((tripDB) => this.stayService.getStay(tripDB.stayId).pipe(
                    filter((stay): stay is Stay => !!stay),
                    switchMap((stay) => this.hostService.getHost(stay.hostId).pipe(
                        filter((host): host is Host => !!host),
                        map((host) => {
                            return {
                                id: tripDB.id,
                                host,
                                stay,
                                startingDate,
                                endingDate,
                                guests
                            } as Trip
                        }),
                    )),
                )),
            )
    }

    deleteTrip(tripId: string): Observable<void> {
        return this.userService.getUser()
            .pipe(
                filter((user): user is User => !!user),
                switchMap((user) => from(this.mockDatabase.trip.where('userId').equals(user.id).and((trip) => trip.id === tripId).first()).pipe(
                    filter((tripDB): tripDB is TripMockDatabase => !!tripDB),
                    switchMap((tripDB) => this.mockDatabase.trip.delete(tripDB.id)),
                ))
            );
    }
}