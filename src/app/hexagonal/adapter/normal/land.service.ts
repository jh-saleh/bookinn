import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LandPort } from "../../domain/port/land.port";

@Injectable({
    providedIn: 'root'
})
export class LandService implements LandPort {
    findClosestCityName(cityPart: string): Observable<string[]> {
        throw Error("findClosestCityName to implement.");
    }
}