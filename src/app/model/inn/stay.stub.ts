import { CityName, KingdomName } from "../land/land.model";
import { CheckType, LeaveRule } from "./guidebook.model";
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
        maxNumberOfGuests: 2,
        lodging: {
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
            bathOutdoors: true,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: true,
            bards: true,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: true,
            hangers: true,
            iron: true,
            kitchen: true,
            librairies: true,
            silverware: true,
            tavern: true,
            waiter: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "6:00 PM",
                            upperBoundary: "9:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM"
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels,
                    LeaveRule.LockUp,
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.TurnThingsOff
                ],
                stay: {
                    pets: false,
                    smoking: false,
                    parties: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 10,
                partialRefund: 5,
                noRefund: 3
            }
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
        maxNumberOfGuests: 5,
        lodging: {
            nbBedrooms: 3,
            nbBeds: 3,
            nbBaths: 2,
        },
        about: {
            context: "Welcome to our cozy winter retreat in the heart of Frostgate! Nestled in the snowy wonderland of this charming mountain city, our heartwarming inn offers the perfect escape for those seeking comfort and warmth amidst the winter chill. Experience the welcoming ambiance of a traditional inn with modern amenities and a touch of local charm.",
            theSpace: "This inviting bedroom is designed to be a warm and cozy haven against the snowy backdrop of Frostgate. The room features a queen-sized bed with soft, fluffy linens and a selection of warm blankets to ensure a snug night’s sleep. Large windows provide beautiful views of the snow-covered landscape, adding to the room’s serene atmosphere. The private bath includes modern fixtures, a shower-tub combo, and plush towels for your comfort.",
        },
        amenities: {
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: false,
            bards: false,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: true,
            hangers: false,
            silverware: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.FlexibleCheck,
                },
                leave: [
                    LeaveRule.ReturnKeys,
                ],
                stay: {
                    pets: false,
                    smoking: true,
                    parties: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 30,
                partialRefund: 15,
                noRefund: 5
            }
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
        maxNumberOfGuests: 10,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        },
        about: {
            context: "Discover an extraordinary underground retreat in Krynholm historic mine, where modern comfort meets the rugged charm of deep subterranean life. Our unique bedroom, carved from the depths of a working iron mine, offers a one-of-a-kind experience for adventurers and history enthusiasts alike.",
            theSpace: "This distinctive bedroom is set within the depths of Ironcliff’s ancient mine, featuring exposed rock walls and an authentic underground ambiance. The queen-sized bed is outfitted with plush linens and warm blankets, ensuring a cozy stay despite the mine’s cool environment. The private bath is equipped with contemporary amenities, including a rain shower and a deep soaking tub, perfect for relaxing after a day exploring the underground passages.",
            note: "Mind the gap."
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "3:00 PM",
                            upperBoundary: "12:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "12:00 PM"
                        }
                    }
                },
                stay: {
                    pets: true,
                    smoking: false,
                    parties: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: false,
            },
            cancellationPolicy: {
                noRefund: 15
            }
        }
    }
];