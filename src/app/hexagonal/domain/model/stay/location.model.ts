import { CityName, KingdomName } from "../land/land.model";

export interface Coordinates {
    y: number;
    x: number;
}

export interface Location {
    kingdom: KingdomName;
    city: CityName;
    street: string;
    coordinates: Coordinates;
};