import { CityName, KingdomName } from "../land/land.model";
import { Amenity } from "./amenity.model";
import { GuideBook } from "./guidebook.model";
import { Lodging } from "./lodging.model";

export class Stay {
    id!: string;
    name!: string;
    kingdom!: KingdomName;
    city!: CityName;
    pricePerNight!: number;
    ratings!: number;
    imgsUrls!: string[];
    maxNumberOfGuests!: number;
    lodging!: Lodging;
    about!: {
        context: string;
        theSpace: string;
        note?: string;
    };
    amenities?: Partial<Record<Amenity, boolean>>;
    guidebook!: GuideBook;
}