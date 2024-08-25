import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Billing } from "../model/billing/billing.model";

@Injectable({
    providedIn: 'root'
})
export class BillingPort {
    getBillingForStay(stayId: string, nbOfNights: number, nbOfGuests: number): Observable<Billing> {
        throw Error("getBillingForStay to implement.");
    }
}