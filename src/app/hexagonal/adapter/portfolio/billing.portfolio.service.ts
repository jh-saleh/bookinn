import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Billing } from "../../domain/model/billing/billing.model";
import { BillingPort } from "../../domain/port/billing.port";
import { StayPort } from "../../domain/port/stay.port";

@Injectable({
    providedIn: 'root'
})
export class BillingPortfolioService implements BillingPort {
    bookInnRate: number = 0.05;
    VATRate = 0.2;

    constructor(private stayService: StayPort) {

    }

    getBillingForStay(stayId: string, nbOfNights: number, nbOfGuests: number): Observable<Billing | undefined> {
        let pricePerNight: number = 0;
        let completeBillWithoutCharges: number = 0;
        let bookInnFee: number = 0;
        let VAT: number = 0;
        let completeBill: number = 0;
        return this.stayService.getStay(stayId).pipe(map((stay) => {
            if (stay) {
                const { maxNumberOfGuests, billing: { basePricePerNight, fees: { cleaningFee } } } = stay;
                if (maxNumberOfGuests > 1) {
                    pricePerNight = Math.ceil(basePricePerNight * (1 + ((nbOfGuests - 1) / (maxNumberOfGuests - 1))));
                } else {
                    pricePerNight = basePricePerNight;
                }
                completeBillWithoutCharges = Math.ceil(pricePerNight * nbOfNights + (cleaningFee ?? 0));
                bookInnFee = Math.ceil(completeBillWithoutCharges * this.bookInnRate);
                VAT = Math.ceil(this.VATRate * (completeBillWithoutCharges + bookInnFee));
                completeBill = completeBillWithoutCharges + bookInnFee + VAT;

                return {
                    pricePerNight,
                    completeBillWithoutCharges,
                    bookInnFee,
                    VAT,
                    completeBill,
                }
            } else {
                return undefined;
            }
        }));
    }
}