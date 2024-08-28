import { StayFees } from "../billing/fee.model";
import { Amenity } from "./amenity.model";
import { GuideBook } from "./guidebook.model";
import { Location } from "./location.model";
import { Lodging } from "./lodging.model";

export class Stay {
    id!: string;
    hostId!: string;
    name!: string;
    location!: Location;
    billing!: {
        basePricePerNight: number;
        fees: StayFees;
    };
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

export interface StayWithDistanceToOrigin extends Stay {
    distanceToOrigin: number;
}