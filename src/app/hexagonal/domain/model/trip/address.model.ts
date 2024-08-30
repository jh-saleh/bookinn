import { CityName, KingdomName } from "../land/land.model";

export interface Address {
    street: string;
    city: CityName;
    kingdom: KingdomName;
}