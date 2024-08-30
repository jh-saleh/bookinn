import { Injectable } from "@angular/core";
import Dexie, { Table } from "dexie";
import { UserMockDatabase } from "../../domain/model/stay/user.model";
import { TripMockDatabase } from "../../domain/model/trip/trip.model";

@Injectable({
    providedIn: 'root'
})
export class MockDatabasePortfolioService extends Dexie {
    user!: Table<UserMockDatabase, string>;
    trip!: Table<TripMockDatabase, string>;

    constructor() {
        super('BookInnDB');
        this.version(1).stores({
            user: 'id, userId, email, firstname, lastname',
            trip: 'id, userId, stayId, startingDate, endingDate, nbAdults, nbChildren, nbInfants, nbPets',
        });

        this.user = this.table('user');
        this.trip = this.table('trip');

        this.user.add({
            id: "f61d9a50-6a91-4f58-9cf4-974357d93581",
            firstname: "guest",
            lastname: "demo",
            email: "guest-demo@demo.com",
            password: "123"
        });
    }
}