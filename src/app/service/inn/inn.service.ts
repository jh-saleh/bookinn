import { Injectable } from '@angular/core';
import { Inn } from '../../model/inn.model';

@Injectable({
  providedIn: 'root'
})
export class InnService {

  constructor() { }

  getHomePageInns(): Inn[] {
    return [
      {
        city: "Kynesgrove",
        state: "Skyrim",
        ratings: 1.2,
        name: "Braidwood Inn",
        pricePerNight: 21
      },
      {
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4,
        name: "Candlehearth Hall",
        pricePerNight: 25
      },
      {
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4.6,
        name: "New Gnisis Cornerclub",
        pricePerNight: 36
      },
      {
        city: "Falkreath",
        state: "Skyrim",
        ratings: 3.4,
        name: "Dead Man's Drink",
        pricePerNight: 30
      },
      {
        city: "Dragon Bridge",
        state: "Skyrim",
        ratings: 2.7,
        name: "Four Shields Tavern",
        pricePerNight: 27
      },
      {
        city: "Solitude",
        state: "Skyrim",
        ratings: 3.6,
        name: "The Winking Skeever",
        pricePerNight: 11
      },
      {
        city: "Morthal",
        state: "Skyrim",
        ratings: 4.2,
        name: "Moorside Inn",
        pricePerNight: 11
      },
      {
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4,
        name: "Nightgate Inn",
        pricePerNight: 43
      },
      {
        city: "Dawnstar",
        state: "Skyrim",
        ratings: 4.6,
        name: "Windpeak Inn",
        pricePerNight: 17
      },
      {
        city: "Markarth",
        state: "Skyrim",
        ratings: 3.7,
        name: "Silver-Blood Inn",
        pricePerNight: 56
      },
      {
        city: "Markarth",
        state: "Skyrim",
        ratings: 0.9,
        name: "Old Hroldan Inn",
        pricePerNight: 15
      },
      {
        city: "Riften",
        state: "Skyrim",
        ratings: 4.3,
        name: "The Bee and Barb",
        pricePerNight: 12
      },
      {
        city: "Ivarstead",
        state: "Skyrim",
        ratings: 3.2,
        name: "Vilemyr Inn",
        pricePerNight: 26
      },
      {
        city: "Raven Rock",
        state: "Morrowind",
        ratings: 2.1,
        name: "The Retching Netch",
        pricePerNight: 10
      },
      {
        city: "Rorikstead",
        state: "Skyrim",
        ratings: 2.5,
        name: "Frostfruit Inn",
        pricePerNight: 23
      },
      {
        city: "Riverwood",
        state: "Skyrim",
        ratings: 2,
        name: "Sleeping Giant Inn",
        pricePerNight: 48
      },
      {
        city: "Whiterun",
        state: "Skyrim",
        ratings: 3,
        name: "The Bannered Mare",
        pricePerNight: 34
      },
      {
        city: "Winterhold",
        state: "Skyrim",
        ratings: 4,
        name: "The Frozen Hearth",
        pricePerNight: 27
      },
    ];
  }
}
