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
        about: {
            context: "Step back in time and experience the grandeur of medieval living in our majestic castle bedroom, nestled within the formidable black stone walls of Ironcliff's historic castle. This unique accommodation offers a perfect blend of ancient charm and modern comfort, ideal for history enthusiasts and adventurers alike.",
            theSpace: "This bedroom is part of a beautifully repurposed castle, featuring soaring ceilings, stone walls, and grand arched windows that offer breathtaking views of the surrounding mountains. The king-sized bed, draped in luxurious linens, ensures a regal night's sleep. The private bath is equipped with modern fixtures, including a rain shower and a deep soaking tub carved from stone, perfect for unwinding after a day of exploring.",
            note: "Mind the dragon guarding the entrance. He is a bit cranky."
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
        city: CityName.Frostgate,
        kingdom: KingdomName.Orlond,
        ratings: 4,
        name: "Cozy Winter Retreat",
        pricePerNight: 25,
        imgsUrls: ["inns/snow/1.jpeg", "inns/snow/2.jpeg", "inns/snow/3.jpeg", "inns/snow/4.jpeg", "inns/snow/5.jpeg"],
        lodging: {
            maxNumberOfGuests: 5,
            nbBedrooms: 3,
            nbBeds: 3,
            nbBaths: 2,
        },
        about: {
            context: "Welcome to our cozy winter retreat in the heart of Frostgate! Nestled in the snowy wonderland of this charming mountain city, our heartwarming inn offers the perfect escape for those seeking comfort and warmth amidst the winter chill. Experience the welcoming ambiance of a traditional inn with modern amenities and a touch of local charm.",
            theSpace: "This inviting bedroom is designed to be a warm and cozy haven against the snowy backdrop of Frostgate. The room features a queen-sized bed with soft, fluffy linens and a selection of warm blankets to ensure a snug night’s sleep. Large windows provide beautiful views of the snow-covered landscape, adding to the room’s serene atmosphere. The private bath includes modern fixtures, a shower-tub combo, and plush towels for your comfort.",
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
        about: {
            context: "Discover an extraordinary underground retreat in Krynholm historic mine, where modern comfort meets the rugged charm of deep subterranean life. Our unique bedroom, carved from the depths of a working iron mine, offers a one-of-a-kind experience for adventurers and history enthusiasts alike.",
            theSpace: "This distinctive bedroom is set within the depths of Ironcliff’s ancient mine, featuring exposed rock walls and an authentic underground ambiance. The queen-sized bed is outfitted with plush linens and warm blankets, ensuring a cozy stay despite the mine’s cool environment. The private bath is equipped with contemporary amenities, including a rain shower and a deep soaking tub, perfect for relaxing after a day exploring the underground passages.",
            note: "Mind the gap."
        }
    }
];