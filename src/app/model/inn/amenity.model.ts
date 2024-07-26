export enum Amenity {
    Hotwater = "Hot water",
    BathOutdoors = "Bath outdoors",
    Hangers = "Hangers",
    Essentials = "Essentials",
    Iron = "Iron",
    Bards = "Bards",
    Librairies = "Librairies",
    Fireplace = "Fireplace",
    MagicAirConditioning = "Magic air conditioning",
    Kitchen = "Kitchen",
    Dishes = "Dishes",
    Silverware = "Silverware",
    HostGreetsYou = "Host greets you",
    Tavern = "Tavern",
    Waiter = "Waiter",
    LockOnBedroomDoor = "Lock on bedroom door",
    Guards = "Guards"
}

export enum AmenityType {
    Bathroom = "Bathroom",
    Bedroom = "Bedroom",
    Entertainment = "Entertainment",
    HeatingAndCooling = "HeatingAndCooling",
    Dining = "Dining",
    Services = "Services",
    PrivacyAndSafety = "PrivacyAndSafety",
    NotIncluded = "NotIncluded"
}

export const amenitiesLink: Record<Amenity, { type: AmenityType, icon: string }> = {
    [Amenity.Hotwater]: { type: AmenityType.Bathroom, icon: "heat" },
    [Amenity.BathOutdoors]: { type: AmenityType.Bathroom, icon: "bath_outdoor" },
    [Amenity.Hangers]: { type: AmenityType.Bedroom, icon: "checkroom" },
    [Amenity.Essentials]: { type: AmenityType.Bedroom, icon: "self_care" },
    [Amenity.Iron]: { type: AmenityType.Bedroom, icon: "iron" },
    [Amenity.Bards]: { type: AmenityType.Entertainment, icon: "artist" },
    [Amenity.Librairies]: { type: AmenityType.Entertainment, icon: "book_4" },
    [Amenity.Fireplace]: { type: AmenityType.HeatingAndCooling, icon: "local_fire_department" },
    [Amenity.MagicAirConditioning]: { type: AmenityType.HeatingAndCooling, icon: "ac_unit" },
    [Amenity.Kitchen]: { type: AmenityType.Dining, icon: "soup_kitchen" },
    [Amenity.Dishes]: { type: AmenityType.Dining, icon: "stockpot" },
    [Amenity.Silverware]: { type: AmenityType.Dining, icon: "restaurant" },
    [Amenity.HostGreetsYou]: { type: AmenityType.Services, icon: "emoji_people" },
    [Amenity.Tavern]: { type: AmenityType.Services, icon: "sports_bar" },
    [Amenity.Waiter]: { type: AmenityType.Services, icon: "menu_book" },
    [Amenity.LockOnBedroomDoor]: { type: AmenityType.PrivacyAndSafety, icon: "lock" },
    [Amenity.Guards]: { type: AmenityType.PrivacyAndSafety, icon: "shield" }
}

export interface AminityLink {
    amenity: Amenity;
    icon: string;
}

export const extractAmenities = (amenities: Partial<Record<Amenity, boolean>>): Partial<Record<AmenityType, AminityLink[]>> => {
    let output: Partial<Record<AmenityType, AminityLink[]>> = {};
    for (const amenity in amenities) {
        const castAmenity: Amenity = amenity as Amenity;
        if ((amenities[castAmenity]) !== undefined) {
            if (!amenities[castAmenity]) {
                const amenityType = AmenityType.NotIncluded;
                if (output.hasOwnProperty(amenityType)) {
                    output[amenityType]?.push({ amenity: castAmenity, icon: amenitiesLink[castAmenity].icon });
                } else {
                    output[amenityType] = [{ amenity: castAmenity, icon: amenitiesLink[castAmenity].icon }]
                }
            } else {
                const amenityType = amenitiesLink[castAmenity].type;
                if (output.hasOwnProperty(amenityType)) {
                    output[amenityType]?.push({ amenity: castAmenity, icon: amenitiesLink[castAmenity].icon });
                } else {
                    output[amenityType] = [{ amenity: castAmenity, icon: amenitiesLink[castAmenity].icon }]
                }
            }
        }
    }
    return output;
}