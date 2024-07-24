import { Injectable } from '@angular/core';
import { Inn } from '../../model/inn/inn.model';

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
        pricePerNight: 21,
        imgsUrls: ["inns/black_castle/1.jpeg", "inns/black_castle/2.jpeg", "inns/black_castle/3.jpeg", "inns/black_castle/4.jpeg"]
      },
      {
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4,
        name: "Candlehearth Hall",
        pricePerNight: 25,
        imgsUrls: ["inns/black_castle/5.jpeg", "inns/black_castle/6.jpeg", "inns/black_castle/7.jpeg"]
      },
      {
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4.6,
        name: "New Gnisis Cornerclub",
        pricePerNight: 36,
        imgsUrls: ["inns/black_castle/8.jpeg"]
      },
      {
        city: "Falkreath",
        state: "Skyrim",
        ratings: 3.4,
        name: "Dead Man's Drink",
        pricePerNight: 30,
        imgsUrls: ["inns/crimson_castle/1.jpeg", "inns/crimson_castle/2.jpeg", "inns/crimson_castle/3.jpeg", "inns/crimson_castle/4.jpeg"]
      },
      {
        city: "Dragon Bridge",
        state: "Skyrim",
        ratings: 2.7,
        name: "Four Shields Tavern",
        pricePerNight: 27,
        imgsUrls: ["inns/crimson_castle/5.jpeg", "inns/crimson_castle/6.jpeg"]
      },
      {
        city: "Solitude",
        state: "Skyrim",
        ratings: 3.6,
        name: "The Winking Skeever",
        pricePerNight: 11,
        imgsUrls: ["inns/crimson_castle/7.jpeg", "inns/crimson_castle/8.jpeg"]
      },
      {
        city: "Morthal",
        state: "Skyrim",
        ratings: 4.2,
        name: "Moorside Inn",
        pricePerNight: 11,
        imgsUrls: ["inns/marble_castle/1.jpeg", "inns/marble_castle/2.jpeg"]
      },
      {
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4,
        name: "Nightgate Inn",
        pricePerNight: 43,
        imgsUrls: ["inns/marble_castle/3.jpeg", "inns/marble_castle/4.jpeg"]
      },
      {
        city: "Dawnstar",
        state: "Skyrim",
        ratings: 4.6,
        name: "Windpeak Inn",
        pricePerNight: 17,
        imgsUrls: ["inns/marble_castle/5.jpeg", "inns/marble_castle/6.jpeg"]
      },
      {
        city: "Markarth",
        state: "Skyrim",
        ratings: 3.7,
        name: "Silver-Blood Inn",
        pricePerNight: 56,
        imgsUrls: ["inns/marble_castle/7.jpeg", "inns/marble_castle/8.jpeg"]
      },
      {
        city: "Markarth",
        state: "Skyrim",
        ratings: 0.9,
        name: "Old Hroldan Inn",
        pricePerNight: 15,
        imgsUrls: ["inns/snow/1.jpeg", "inns/snow/2.jpeg", "inns/snow/3.jpeg", "inns/snow/4.jpeg"]
      },
      {
        city: "Riften",
        state: "Skyrim",
        ratings: 4.3,
        name: "The Bee and Barb",
        pricePerNight: 12,
        imgsUrls: ["inns/snow/5.jpeg", "inns/snow/6.jpeg", "inns/snow/7.jpeg", "inns/snow/8.jpeg"]
      },
      {
        city: "Ivarstead",
        state: "Skyrim",
        ratings: 3.2,
        name: "Vilemyr Inn",
        pricePerNight: 26,
        imgsUrls: ["inns/stone/1.jpeg", "inns/stone/2.jpeg"]
      },
      {
        city: "Raven Rock",
        state: "Morrowind",
        ratings: 2.1,
        name: "The Retching Netch",
        pricePerNight: 10,
        imgsUrls: ["inns/stone/3.jpeg", "inns/stone/4.jpeg"]
      },
      {
        city: "Rorikstead",
        state: "Skyrim",
        ratings: 2.5,
        name: "Frostfruit Inn",
        pricePerNight: 23,
        imgsUrls: ["inns/stone/5.jpeg"]
      },
      {
        city: "Riverwood",
        state: "Skyrim",
        ratings: 2,
        name: "Sleeping Giant Inn",
        pricePerNight: 48,
        imgsUrls: ["inns/stone/6.jpeg"]
      },
      {
        city: "Whiterun",
        state: "Skyrim",
        ratings: 3,
        name: "The Bannered Mare",
        pricePerNight: 34,
        imgsUrls: ["inns/stone/7.jpeg"]
      },
      {
        city: "Winterhold",
        state: "Skyrim",
        ratings: 4,
        name: "The Frozen Hearth",
        pricePerNight: 27,
        imgsUrls: ["inns/stone/8.jpeg"]
      }
    ];
  }
}