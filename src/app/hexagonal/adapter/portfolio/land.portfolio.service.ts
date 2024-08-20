import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { citiesName } from "../../domain/model/land/land.model";
import { LandPort } from "../../domain/port/land.port";

@Injectable({
    providedIn: 'root'
})
export class LandPortfolioService implements LandPort {
    findClosestCityName(cityPart: string): Observable<string[]> {
        // Convert the search string to lowercase for case-insensitive matching
        const lowerCityPart = cityPart.toLowerCase();

        // Filter cities that contain the search string in any part of their name
        const filteredCities = citiesName.filter(city =>
            city.toLowerCase().includes(lowerCityPart)
        );

        // Sort filtered cities by similarity to the search string
        const sortedCities = filteredCities.sort((a, b) => {
            const aIndex = a.toLowerCase().indexOf(lowerCityPart);
            const bIndex = b.toLowerCase().indexOf(lowerCityPart);
            return aIndex - bIndex;
        });

        return of(sortedCities.slice(0, 5));
    }
}