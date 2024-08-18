import { Injectable } from '@angular/core';
import { citiesName } from '../../model/land/land.model';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() { }

  findClosestCityName(cityPart: string) {
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

    return sortedCities.slice(0, 5);
  }
}
