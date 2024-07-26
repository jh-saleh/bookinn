import { CityName, KingdomName } from "../land/land.model";
import { Stay } from "./stay.model";

export const stays: Stay[] = [
    {
        id: "4df2b632-44ab-49a5-8d08-fd8e85af8efb",
        city: CityName.Ironcliff,
        kingdom: KingdomName.Orlond,
        ratings: 1.2,
        name: "Majestic Castle Bedroom",
        pricePerNight: 21,
        imgsUrls: ["inns/black_castle/1.jpeg", "inns/black_castle/2.jpeg", "inns/black_castle/3.jpeg", "inns/black_castle/4.jpeg", "inns/black_castle/5.jpeg"],
        lodging: {
            maxNumberOfGuests: 2,
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        about: "Step back in time and experience the grandeur of medieval living in our majestic castle bedroom, nestled within the formidable black stone walls of Ironcliff's historic castle. This unique accommodation offers a perfect blend of ancient charm and modern comfort, ideal for history enthusiasts and adventurers alike.",
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
        city: CityName.Frostgate,
        kingdom: KingdomName.Orlond,
        ratings: 4,
        name: "Cozy Castle Retreat",
        pricePerNight: 25,
        imgsUrls: ["inns/snow/1.jpeg", "inns/snow/2.jpeg", "inns/snow/3.jpeg", "inns/snow/4.jpeg", "inns/snow/5.jpeg"],
        lodging: {
            maxNumberOfGuests: 5,
            nbBedrooms: 3,
            nbBeds: 3,
            nbBaths: 2,
        },
        about: "Escape to a winter wonderland and experience the cozy comfort of our castle retreat, nestled within the frosty embrace of Frostgate’s historic black stone castle. This unique accommodation blends the timeless elegance of medieval architecture with modern amenities, providing a perfect haven for winter enthusiasts and history buffs alike.",
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
        city: CityName.Krynholm,
        kingdom: KingdomName.Orlond,
        ratings: 4.6,
        name: "Subterranean Haven",
        pricePerNight: 36,
        imgsUrls: ["inns/stone/1.jpeg", "inns/stone/2.jpeg", "inns/stone/3.jpeg"],
        lodging: {
            maxNumberOfGuests: 10,
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        },
        about: "Discover an extraordinary underground retreat in Krynholm historic mine, where modern comfort meets the rugged charm of deep subterranean life. Our unique bedroom, carved from the depths of a working iron mine, offers a one-of-a-kind experience for adventurers and history enthusiasts alike."
    }
];