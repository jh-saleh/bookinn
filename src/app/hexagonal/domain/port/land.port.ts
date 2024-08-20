import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LandPort {
    findClosestCityName(cityPart: string): Observable<string[]> {
        throw Error("findClosestCityName to implement.");
    }
}