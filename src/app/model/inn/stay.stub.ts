import { Stay } from "./stay.model";

export const stays: Stay[] = [
    {
        id: "4df2b632-44ab-49a5-8d08-fd8e85af8efb",
        city: "Kynesgrove",
        state: "Skyrim",
        ratings: 1.2,
        name: "Braidwood Inn",
        pricePerNight: 21,
        imgsUrls: ["inns/black_castle/1.jpeg", "inns/black_castle/2.jpeg", "inns/black_castle/3.jpeg", "inns/black_castle/4.jpeg", "inns/black_castle/5.jpeg"],
        lodging: {
            maxNumberOfGuests: 2,
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        amenities: {
            "Bath outdoors": true,
            "Hot water": true,
            "Host greets you": true,
            "Lock on bedroom door": true,
            "Magic air conditioning": true,
            Bards: true,
            Dishes: true,
            Essentials: true,
            Fireplace: true,
            Guards: true,
            Hangers: true,
            Iron: true,
            Kitchen: true,
            Librairies: true,
            Silverware: true,
            Tavern: true,
            Waiter: true,
        }
    },
    {
        id: "7191838b-f93b-4dad-a66f-2b8892fab112",
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4,
        name: "Candlehearth Hall",
        pricePerNight: 25,
        imgsUrls: ["inns/black_castle/5.jpeg", "inns/black_castle/6.jpeg", "inns/black_castle/7.jpeg"],
        lodging: {
            maxNumberOfGuests: 5,
            nbBedrooms: 3,
            nbBeds: 3,
            nbBaths: 2,
        },
        amenities: {
            "Hot water": true,
            "Host greets you": true,
            "Lock on bedroom door": false,
            Bards: false,
            Dishes: true,
            Essentials: true,
            Fireplace: true,
            Guards: true,
            Hangers: false,
            Silverware: true,
        }
    },
    {
        id: "c3743e0a-4687-4415-85c3-b613fa052daa",
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4.6,
        name: "New Gnisis Cornerclub",
        pricePerNight: 36,
        imgsUrls: ["inns/black_castle/8.jpeg"],
        lodging: {
            maxNumberOfGuests: 10,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        }
    },
    {
        id: "ee0d5290-be9c-4ab6-ab2b-fdfb6d5a2b4d",
        city: "Falkreath",
        state: "Skyrim",
        ratings: 3.4,
        name: "Dead Man's Drink",
        pricePerNight: 30,
        imgsUrls: ["inns/crimson_castle/1.jpeg", "inns/crimson_castle/2.jpeg", "inns/crimson_castle/3.jpeg", "inns/crimson_castle/4.jpeg"],
        lodging: {
            maxNumberOfGuests: 12,
            nbBedrooms: 5,
            nbBeds: 11,
            nbBaths: 2,
        }
    },
    {
        id: "2802ab78-84fc-4873-9bea-0d25db1f5d83",
        city: "Dragon Bridge",
        state: "Skyrim",
        ratings: 2.7,
        name: "Four Shields Tavern",
        pricePerNight: 27,
        imgsUrls: ["inns/crimson_castle/5.jpeg", "inns/crimson_castle/6.jpeg"],
        lodging: {
            maxNumberOfGuests: 7,
            nbBedrooms: 2,
            nbBeds: 2,
            nbBaths: 0,
        }
    },
    {
        id: "2a416ea5-351a-41d1-af2b-5cddf2c3504f",
        city: "Solitude",
        state: "Skyrim",
        ratings: 3.6,
        name: "The Winking Skeever",
        pricePerNight: 11,
        imgsUrls: ["inns/crimson_castle/7.jpeg", "inns/crimson_castle/8.jpeg"],
        lodging: {
            maxNumberOfGuests: 6,
            nbBedrooms: 1,
            nbBeds: 6,
            nbBaths: 3,
        }
    },
    {
        id: "37dba0a3-caab-43a0-bc04-4b9c49577943",
        city: "Morthal",
        state: "Skyrim",
        ratings: 4.2,
        name: "Moorside Inn",
        pricePerNight: 11,
        imgsUrls: ["inns/marble_castle/1.jpeg", "inns/marble_castle/2.jpeg"],
        lodging: {
            maxNumberOfGuests: 2,
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 0,
        }
    },
    {
        id: "aa3d778e-921a-462b-a3bb-e8623e8833ac",
        city: "Windhelm",
        state: "Skyrim",
        ratings: 4,
        name: "Nightgate Inn",
        pricePerNight: 43,
        imgsUrls: ["inns/marble_castle/3.jpeg", "inns/marble_castle/4.jpeg"],
        lodging: {
            maxNumberOfGuests: 4,
            nbBedrooms: 2,
            nbBeds: 4,
            nbBaths: 2,
        }
    },
    {
        id: "2259ae56-5de6-4ecd-9f84-e72449803e22",
        city: "Dawnstar",
        state: "Skyrim",
        ratings: 4.6,
        name: "Windpeak Inn",
        pricePerNight: 17,
        imgsUrls: ["inns/marble_castle/5.jpeg", "inns/marble_castle/6.jpeg"],
        lodging: {
            maxNumberOfGuests: 1,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        }
    },
    {
        id: "f08decab-f340-463f-be72-2e29df3b52af",
        city: "Markarth",
        state: "Skyrim",
        ratings: 3.7,
        name: "Silver-Blood Inn",
        pricePerNight: 56,
        imgsUrls: ["inns/marble_castle/7.jpeg", "inns/marble_castle/8.jpeg"],
        lodging: {
            maxNumberOfGuests: 12,
            nbBedrooms: 4,
            nbBeds: 12,
            nbBaths: 2,
        }
    },
    {
        id: "8a589060-9c91-4413-a5a1-dcb732bf828b",
        city: "Markarth",
        state: "Skyrim",
        ratings: 0.9,
        name: "Old Hroldan Inn",
        pricePerNight: 15,
        imgsUrls: ["inns/snow/1.jpeg", "inns/snow/2.jpeg", "inns/snow/3.jpeg", "inns/snow/4.jpeg"],
        lodging: {
            maxNumberOfGuests: 1,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        }
    },
    {
        id: "3fca6690-752d-4b1e-86cd-20c1dec8f153",
        city: "Riften",
        state: "Skyrim",
        ratings: 4.3,
        name: "The Bee and Barb",
        pricePerNight: 28,
        imgsUrls: ["inns/snow/5.jpeg", "inns/snow/6.jpeg", "inns/snow/7.jpeg", "inns/snow/8.jpeg"],
        lodging: {
            maxNumberOfGuests: 2,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        }
    },
    {
        id: "fd5c5c0e-3916-45f3-8c15-df56e9034e32",
        city: "Ivarstead",
        state: "Skyrim",
        ratings: 3.2,
        name: "Vilemyr Inn",
        pricePerNight: 26,
        imgsUrls: ["inns/stone/1.jpeg", "inns/stone/2.jpeg"],
        lodging: {
            maxNumberOfGuests: 1,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        }
    },
    {
        id: "c6ab14ab-7529-4293-9739-7420a4db5443",
        city: "Raven Rock",
        state: "Morrowind",
        ratings: 2.1,
        name: "The Retching Netch",
        pricePerNight: 10,
        imgsUrls: ["inns/stone/3.jpeg", "inns/stone/4.jpeg"],
        lodging: {
            maxNumberOfGuests: 1,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        }
    },
    {
        id: "b6f653d1-7e42-44fd-a0c9-455fb1d30613",
        city: "Rorikstead",
        state: "Skyrim",
        ratings: 2.5,
        name: "Frostfruit Inn",
        pricePerNight: 23,
        imgsUrls: ["inns/stone/5.jpeg"],
        lodging: {
            maxNumberOfGuests: 2,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        }
    },
    {
        id: "a01146d7-b2d1-48bc-8bdd-9aa196d5f5ba",
        city: "Riverwood",
        state: "Skyrim",
        ratings: 2,
        name: "Sleeping Giant Inn",
        pricePerNight: 48,
        imgsUrls: ["inns/stone/6.jpeg"],
        lodging: {
            maxNumberOfGuests: 4,
            nbBedrooms: 1,
            nbBeds: 4,
            nbBaths: 1,
        }
    },
    {
        id: "d779b287-4086-43fe-a9ff-3fb207c10675",
        city: "Whiterun",
        state: "Skyrim",
        ratings: 3,
        name: "The Bannered Mare",
        pricePerNight: 34,
        imgsUrls: ["inns/stone/7.jpeg"],
        lodging: {
            maxNumberOfGuests: 3,
            nbBedrooms: 1,
            nbBeds: 3,
            nbBaths: 0,
        }
    },
    {
        id: "8ffb027f-bbe5-41db-bf81-90b87c7df70c",
        city: "Winterhold",
        state: "Skyrim",
        ratings: 4,
        name: "The Frozen Hearth",
        pricePerNight: 27,
        imgsUrls: ["inns/stone/8.jpeg"],
        lodging: {
            maxNumberOfGuests: 2,
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        }
    }
];