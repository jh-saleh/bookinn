import { CityName, KingdomName } from "../hexagonal/domain/model/land/land.model";
import { CheckType, LeaveRule } from "../hexagonal/domain/model/stay/guidebook.model";
import { Stay } from "../hexagonal/domain/model/stay/stay.model";

export const stays: Stay[] = [
    {
        id: "4df2b632-44ab-49a5-8d08-fd8e85af8efb",
        hostId: "cf64d4d5-d122-49c7-8025-0c2a6c0edbd2",
        location: {
            city: CityName.Ironcliff,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 170,
                y: 800,
            }
        },
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
                fireExtinguisher: false,
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
        hostId: "cf64d4d5-d122-49c7-8025-0c2a6c0edbd2",
        location: {
            city: CityName.Frostgate,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 250,
                y: 900,
            }
        },
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
        hostId: "7da91f15-7500-4c75-bcaf-df7e4229fcaa",
        location: {
            city: CityName.Krynholm,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 470,
                y: 800,
            }
        },
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
    },
    {
        id: "f20873fc-1a4a-4625-857b-4c847fa7752c",
        hostId: "998171ce-a502-4bc2-89d8-7d700e4bf6c3",
        location: {
            city: CityName.Brightwater,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 255,
                y: 310,
            }
        },
        ratings: 2.8,
        name: "Seafarer's Inn",
        pricePerNight: 9,
        imgsUrls: ["inns/sea/1.jpeg", "inns/sea/2.jpeg", "inns/sea/3.jpeg", "inns/sea/4.jpeg", "inns/sea/5.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to The Seafarer's Inn, a charming retreat nestled in the bustling port city of Brightwater. Known for its vibrant markets, rich history, and stunning ocean views, Brightwater is a city where the sea meets the land in perfect harmony. Whether you’re here to explore the lively harbor, savor fresh seafood, or simply relax by the water, The Seafarer’s Inn offers an ideal base for your adventures.",
            theSpace: "Your room at The Seafarer’s Inn is a cozy and inviting space designed to reflect the maritime charm of Brightwater. The room features a comfortable queen-sized bed with crisp linens, a writing desk positioned by a large window overlooking the busy harbor, and an en-suite bathroom equipped with all the essentials, including complimentary toiletries. The décor combines nautical elements with warm, earthy tones, creating a serene ambiance that will make you feel right at home. The window offers a breathtaking view of the harbor, where you can watch ships sail in and out, seagulls glide across the sky, and the sun set over the water.Guests are also welcome to enjoy the inn’s common areas, including a cozy lounge with a small library filled with seafaring tales, and a peaceful garden courtyard where you can unwind after a day of explorin",
            note: "Please don't feed the bull frogs.",
        },
        amenities: {
            bathOutdoors: true,
            essentials: true,
            lockOnBedroomDoor: true,
            guards: false,
            hostGreetsYou: true,
            waiter: false,
            fireplace: false,
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
                    smoking: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                noRefund: 2
            }
        }
    },
    {
        id: "eab8c84e-1811-4c9b-95e8-606bf9d25eda",
        hostId: "998171ce-a502-4bc2-89d8-7d700e4bf6c3",
        location: {
            city: CityName.Brightwater,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 255,
                y: 310,
            }
        },
        ratings: 2.1,
        name: "Coastal Haven",
        pricePerNight: 13,
        imgsUrls: ["inns/sea/3.jpeg", "inns/sea/4.jpeg", "inns/sea/5.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 0,
        },
        about: {
            context: "Welcome to The Coastal Haven Inn, a delightful retreat nestled in the serene outskirts of Brightwater. Just a short stroll from the bustling harbor, our inn offers a tranquil escape surrounded by lush gardens and scenic views. Brightwater’s vibrant port city atmosphere is just a heartbeat away, but at The Coastal Haven, you’ll find a peaceful sanctuary where you can unwind and recharge.",
            theSpace: "Step into your private garden suite, designed to be your home away from home. This spacious suite features a luxurious king-sized bed with plush linens, a cozy sitting area for reading or relaxation, and a well-appointed kitchenette perfect for preparing light meals. The suite’s large windows offer panoramic views of the meticulously maintained gardens, where you can enjoy the beauty of nature right from your room. The en-suite bathroom includes a rain shower, fluffy towels, and premium toiletries to enhance your comfort.For those warm, sunny days, a private terrace allows you to savor your morning coffee or evening drink while overlooking the serene garden. Guests also have access to our lovely communal spaces, including a charming garden gazebo and a tranquil pond area.",
        },
        amenities: {
            bathOutdoors: false,
            essentials: true,
            lockOnBedroomDoor: true,
            guards: false,
            hostGreetsYou: false,
            waiter: false,
            fireplace: false,
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
                    pets: true,
                    smoking: true,
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
    },
    {
        id: "217140f7-afa7-4ee0-8876-e9f95921babe",
        hostId: "8ae3c716-18c6-448d-a237-0ccd101d869c",
        location: {
            city: CityName.Shadowfen,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 740,
                y: 535,
            }
        },
        ratings: 4.3,
        name: "Willow's Edge Inn",
        pricePerNight: 33,
        imgsUrls: ["inns/swamp/1.jpeg", "inns/swamp/2.jpeg", "inns/swamp/3.jpeg", "inns/swamp/4.jpeg", "inns/swamp/5.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Escape to the tranquil village of Shadowfen, a hidden gem nestled deep within a lush, mystical swamp. Known for its ethereal beauty and serene landscapes, Shadowfen offers a unique getaway where nature and tranquility reign supreme. The Willow’s Edge Inn is your perfect retreat for immersing yourself in the enchanting marshland, surrounded by whispering willows and reflective waters.",
            theSpace: "Welcome to your marshland haven at The Willow’s Edge Inn. Our inn features a beautifully appointed room that blends rustic charm with modern comfort. The space is adorned with rich wooden furnishings, soft, earthy tones, and charming details that echo the natural beauty of the swamp.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            fireplace: true,
            magicAirConditioning: true,
            waiter: false,
            tavern: true
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "3:00 PM",
                            upperBoundary: "11:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.LockUp,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: false,
                    parties: false
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 20,
                partialRefund: 10,
                noRefund: 5
            }
        }
    },
    {
        id: "f8ef70af-d80f-46f2-9253-27d58a7d9b4b",
        hostId: "8d78b3f7-cd06-430b-8c3e-f68a93d06bca",
        location: {
            city: CityName.Goldhaven,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 870,
                y: 480,
            }
        },
        ratings: 5.0,
        name: "Golden Fields Inn",
        pricePerNight: 610,
        imgsUrls: ["inns/wheat/1.jpeg", "inns/wheat/2.jpeg", "inns/wheat/3.jpeg", "inns/wheat/4.jpeg", "inns/wheat/5.jpeg"],
        maxNumberOfGuests: 4,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 4,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to The Golden Fields Inn, your idyllic escape nestled in the picturesque village of Goldhaven. Situated in the heart of a sprawling plain dotted with golden wheat fields and vibrant animal farms, Goldhaven offers a serene and bucolic retreat away from the hustle and bustle of city life. Immerse yourself in the natural beauty and agricultural charm of this enchanting village, where rolling fields and pastoral landscapes create a truly tranquil environment.",
            theSpace: "Your room at The Golden Fields Inn is a cozy haven designed to reflect the rustic elegance of Goldhaven’s countryside. The room features a comfortable king-sized bed adorned with soft linens, a charming wooden wardrobe, and a cozy armchair perfect for relaxing with a good book. The large windows offer stunning views of the expansive wheat fields and the gentle sweep of the plains, providing a serene backdrop to your stay.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            fireplace: false,
            waiter: true,
            tavern: true,
            hotWater: true,
            iron: true,
            silverware: true,
            bards: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "4:00 PM",
                            upperBoundary: "10:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                    parties: false
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: false,
            },
            cancellationPolicy: {
                fullRefund: 10,
                partialRefund: 5,
                noRefund: 1
            }
        }
    },
    {
        id: "10562195-0896-4966-843c-da049b723c01",
        hostId: "8d78b3f7-cd06-430b-8c3e-f68a93d06bca",
        location: {
            city: CityName.Goldhaven,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 870,
                y: 480,
            }
        },
        ratings: 4.7,
        name: "Harvest Homestead Inn",
        pricePerNight: 823,
        imgsUrls: ["inns/wheat/5.jpeg", "inns/wheat/6.jpeg", "inns/wheat/7.jpeg"],
        maxNumberOfGuests: 6,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 6,
            nbBaths: 3,
        },
        about: {
            context: "Welcome to The Harvest Homestead Inn, your perfect retreat in the idyllic village of Goldhaven. Located in the heart of a vast plain where golden wheat fields stretch as far as the eye can see, and vibrant animal farms create a picturesque rural landscape, Goldhaven offers a serene escape into the countryside. Enjoy the tranquility of open spaces and the charm of traditional farming life as you relax in our welcoming inn.",
            theSpace: "Your room at The Harvest Homestead Inn is designed to capture the rustic elegance of Goldhaven’s countryside. The room features a plush queen-sized bed adorned with soft, country-style linens, a handcrafted wooden dresser, and a cozy reading nook with a comfy armchair. Large windows offer breathtaking views of the expansive wheat fields and lush pastures, allowing you to soak in the natural beauty of the plains.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            fireplace: false,
            waiter: true,
            tavern: true,
            hotWater: true,
            iron: true,
            silverware: true,
            bards: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "4:00 PM",
                            upperBoundary: "10:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                    parties: false
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: false,
            },
            cancellationPolicy: {
                fullRefund: 10,
                partialRefund: 5,
                noRefund: 1
            }
        }
    },
    {
        id: "2fb49e55-5275-4531-9e41-c77c0c467aa9",
        hostId: "8d78b3f7-cd06-430b-8c3e-f68a93d06bca",
        location: {
            city: CityName.Goldhaven,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 870,
                y: 480,
            }
        },
        ratings: 4.5,
        name: "Wheatfield Inn",
        pricePerNight: 635,
        imgsUrls: ["inns/wheat/2.jpeg", "inns/wheat/4.jpeg", "inns/wheat/6.jpeg"],
        maxNumberOfGuests: 4,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 4,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to The Wheatfield Inn, your serene escape in the picturesque village of Goldhaven. Nestled in the heart of a sprawling plain dotted with golden wheat fields and vibrant animal farms, Goldhaven is the perfect destination for those seeking tranquility and a taste of rural life. Experience the charm of wide-open spaces, where rolling fields and pastoral landscapes provide a peaceful retreat from the everyday hustle.",
            theSpace: "At The Wheatfield Inn, we offer a cozy and inviting atmosphere that captures the essence of countryside living. Your room is designed with rustic elegance, featuring a comfortable king-sized bed with soft, farm-inspired linens, a vintage wooden armoire, and a small seating area perfect for relaxing after a day of exploration.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            fireplace: false,
            waiter: true,
            tavern: true,
            hotWater: true,
            iron: true,
            silverware: true,
            bards: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "4:00 PM",
                            upperBoundary: "10:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                    parties: false
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: false,
            },
            cancellationPolicy: {
                fullRefund: 10,
                partialRefund: 5,
                noRefund: 1
            }
        }
    },
    {
        id: "9a1414b8-13b4-45e7-a490-f982b9d46712",
        hostId: "889c580e-ead8-473e-bf35-54f51319cacd",
        location: {
            city: CityName.Redleaf,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 250,
                y: 400,
            }
        },
        ratings: 2.7,
        name: "The Crimson Maple Inn",
        pricePerNight: 42,
        imgsUrls: ["inns/forest/red/3.jpeg", "inns/forest/red/4.jpeg", "inns/forest/red/5.jpeg"],
        maxNumberOfGuests: 2,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to The Crimson Maple Inn, a serene haven in the heart of Redleaf, known for its stunning red-leaved trees and celebrated herbal exports. This inn provides a perfect blend of comfort, charm, and nature, making it an ideal retreat for those seeking relaxation and a connection with the natural beauty of the region.",
            theSpace: "Our elegantly appointed rooms offer a cozy sanctuary with a touch of rustic charm. Each room is furnished with a plush king-sized bed, a private bathroom, and large windows that flood the space with natural light and offer views of Redleaf’s famous crimson canopy.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: false,
            hostGreetsYou: true,
            hotWater: false,
            dishes: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "3:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 25,
                partialRefund: 15,
                noRefund: 10
            }
        }
    },
    {
        id: "660f3aba-0bc9-4b08-9aec-e4a3e0fa4b27",
        hostId: "889c580e-ead8-473e-bf35-54f51319cacd",
        location: {
            city: CityName.Redleaf,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 250,
                y: 400,
            }
        },
        ratings: 2.3,
        name: "Redleaf Retreat Inn",
        pricePerNight: 35,
        imgsUrls: ["inns/forest/red/1.jpeg", "inns/forest/red/2.jpeg", "inns/forest/red/3.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to our charming inn, nestled in the heart of Redleaf, a city famous for its vibrant red-leaved trees and world-renowned herbal exports. Our cozy room offers a tranquil retreat for travelers seeking both relaxation and a touch of nature’s healing powers.",
            theSpace: "This intimate room is perfect for solo travelers or couples, featuring a comfortable queen-sized bed, a private ensuite bathroom, and a window that opens up to breathtaking views of Redleaf’s iconic trees. The room is tastefully decorated with natural elements, evoking the serene ambiance of the surrounding landscape.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: false,
            hostGreetsYou: true,
            hotWater: false,
            dishes: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "3:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 17,
                partialRefund: 10,
                noRefund: 3
            }
        }
    },
    {
        id: "16081a1e-95fa-4d50-9316-c1ef0736b72c",
        hostId: "0de20ca7-a77f-492d-ae9d-b89745dc2865",
        location: {
            city: CityName.Moonshadow,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 500,
                y: 610,
            }
        },
        ratings: 3.4,
        name: "The Gloaming Rest",
        pricePerNight: 7,
        imgsUrls: ["inns/shadow/1.jpeg", "inns/shadow/2.jpeg", "inns/shadow/3.jpeg"],
        maxNumberOfGuests: 5,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 5,
            nbBaths: 0,
        },
        about: {
            context: "Welcome to a truly unique experience in the heart of Moonshadow, where the night never ends. Our cozy inn is nestled deep within the enchanted swamps, surrounded by the eerie beauty of moss-draped cypress trees and shimmering, ghostly lights. This is a retreat like no other—perfect for those seeking tranquility, mystery, and a touch of the otherworldly.",
            theSpace: "Your room is a cozy sanctuary, designed for comfort and charm. The queen-sized bed, draped in luxurious dark linens, promises a restful sleep amidst the whispers of the swamp. Antique furnishings add a touch of history, while soft candlelight creates an inviting glow.",
            note: "Due to the perpetual night, our inn provides lanterns and candles for your use. Futhermore, the swamp is alive with nocturnal creatures. Be sure to respect their home as you explore."
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            hotWater: true,
            dishes: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "5:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.ReturnKeys
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 4,
                partialRefund: 3,
                noRefund: 1
            }
        }
    },
    {
        id: "14c3d627-60f0-4da8-b196-8476bd82c006",
        hostId: "0de20ca7-a77f-492d-ae9d-b89745dc2865",
        location: {
            city: CityName.Moonshadow,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 500,
                y: 610,
            }
        },
        ratings: 3.4,
        name: "The Nocturne Haven",
        pricePerNight: 7,
        imgsUrls: ["inns/shadow/2.jpeg", "inns/shadow/3.jpeg"],
        maxNumberOfGuests: 5,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 5,
            nbBaths: 0,
        },
        about: {
            context: "Welcome to a truly unique experience in the heart of Moonshadow, where the night never ends. Our cozy inn is nestled deep within the enchanted swamps, surrounded by the eerie beauty of moss-draped cypress trees and shimmering, ghostly lights. This is a retreat like no other—perfect for those seeking tranquility, mystery, and a touch of the otherworldly.",
            theSpace: "Your room is a cozy sanctuary, designed for comfort and charm. The queen-sized bed, draped in luxurious dark linens, promises a restful sleep amidst the whispers of the swamp. Antique furnishings add a touch of history, while soft candlelight creates an inviting glow.",
            note: "Due to the perpetual night, our inn provides lanterns and candles for your use. Futhermore, the swamp is alive with nocturnal creatures. Be sure to respect their home as you explore."
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            hotWater: true,
            dishes: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "5:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ThrowTrashAway,
                    LeaveRule.ReturnKeys
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: false,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 4,
                partialRefund: 3,
                noRefund: 1
            }
        }
    },
    {
        id: "e100411d-0371-48af-847a-7b106379ef16",
        hostId: "9f4b8cc3-db20-486c-a708-73bfb5b0e8c1",
        location: {
            city: CityName.Stormwatch,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 870,
                y: 710,
            }
        },
        ratings: 1.4,
        name: "Tempest’s Edge Inn",
        pricePerNight: 23,
        imgsUrls: ["inns/sea/5.jpeg", "inns/sea/4.jpeg", "inns/sea/3.jpeg"],
        maxNumberOfGuests: 4,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 4,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Tempest’s Edge Inn, a charming seaside retreat perched on the cliffs of Stormwatch, where the ocean meets the sky in a constant display of nature’s power. This room offers the perfect blend of comfort and adventure, with breathtaking views of the stormy harbor and the endless, restless sea. Whether you’re here to relax or to experience the thrill of the elements, Tempest’s Edge Inn is your perfect port of call.",
            theSpace: "Your room is a cozy, serene escape from the wild outside. The king-sized bed, draped in luxurious linens, is positioned to offer a front-row view of the harbor, where the waves crash against the rocks and the lighthouse beams through the tempest. The decor blends nautical charm with modern comfort, creating a warm and inviting atmosphere.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: true,
            hotWater: true,
            dishes: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "2:00 PM",
                            upperBoundary: "11:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys
                ],
                stay: {
                    pets: true,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 15,
                partialRefund: 10,
                noRefund: 5
            }
        }
    },
    {
        id: "34105491-58ae-4f26-8716-cf0d34660780",
        hostId: "2d8289ce-efdd-4808-b3cb-1dec58b8c21e",
        location: {
            city: CityName.Willowgrove,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 450,
                y: 420,
            }
        },
        ratings: 3.2,
        name: "Whispering Pines Inn",
        pricePerNight: 23,
        imgsUrls: ["inns/normal/1.jpeg", "inns/normal/2.jpeg", "inns/normal/3.jpeg"],
        maxNumberOfGuests: 2,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        about: {
            context: "Escape to Whispering Pines Inn, nestled deep within the tranquil woods of Willowgrove. This charming village, enveloped by the serenity of the ancient forest, offers a peaceful retreat from the hustle and bustle of daily life. Our inn is a haven of comfort and calm, perfect for nature lovers and those seeking solace in the heart of the forest.",
            theSpace: "Your room at Whispering Pines Inn is a cozy sanctuary designed to blend seamlessly with the natural surroundings. The queen-sized bed, adorned with soft linens and a handwoven quilt, promises a restful night’s sleep to the gentle lullaby of the forest. Large windows allow you to gaze out at the lush greenery and listen to the whispering leaves.",
            note: "The lake is within 30 mins of walking."
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: false,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "3:00 PM",
                            upperBoundary: "10:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "10:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 15,
                partialRefund: 10,
                noRefund: 5
            }
        }
    },
    {
        id: "90105f53-f88f-47e3-bcaf-c14de552ef51",
        hostId: "2d8289ce-efdd-4808-b3cb-1dec58b8c21e",
        location: {
            city: CityName.Willowgrove,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 450,
                y: 420,
            }
        },
        ratings: 3.5,
        name: "Enchanted Glade Inn",
        pricePerNight: 28,
        imgsUrls: ["inns/normal/3.jpeg", "inns/normal/1.jpeg", "inns/normal/4.jpeg"],
        maxNumberOfGuests: 2,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        about: {
            context: "Discover the magic of The Enchanted Glade Inn, a picturesque retreat tucked away in the heart of Willowgrove’s ancient forest. This charming inn offers an escape into a realm of tranquility and natural beauty, where every corner of the inn reflects the serene splendor of the surrounding woods. Perfect for those seeking peace and a touch of enchantment, our inn is your gateway to a restful and rejuvenating getaway.",
            theSpace: "Your room at The Enchanted Glade Inn is designed to be a haven of comfort and elegance. The king-sized bed, adorned with plush linens and a soft throw blanket, ensures a restful sleep under the gentle glow of moonlight filtering through the large, forest-facing windows. The room's decor combines rustic charm with modern amenities, creating a soothing environment for relaxation.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: false,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "2:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: true,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 15,
                partialRefund: 10,
                noRefund: 5
            }
        }
    },
    {
        id: "ecb441ef-f998-4c5a-9423-a49e632e054a",
        hostId: "b91151a5-f788-4108-8019-b404620d3b57",
        location: {
            city: CityName.Sunspire,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 920,
                y: 300,
            }
        },
        ratings: 2.3,
        name: "Golden Mirage Inn",
        pricePerNight: 28,
        imgsUrls: ["inns/desert/1.jpeg", "inns/desert/2.jpeg", "inns/desert/3.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Golden Mirage Inn, a luxurious retreat located in the heart of Sunspire, a mesmerizing city on a desertic island surrounded by golden dunes and mystical stones. This enchanting inn offers a unique blend of comfort and adventure, perfect for those seeking a serene escape or an unforgettable experience in a land where the sun never truly sets.",
            theSpace: "Your suite at Golden Mirage Inn is a tranquil sanctuary that echoes the beauty of the surrounding desert. The king-sized bed is draped in sumptuous linens and positioned to offer breathtaking views of the golden dunes that stretch out as far as the eye can see. The decor combines traditional desert motifs with modern elegance, creating a space that is both soothing and inspiring.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "8:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "2:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 17,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "2ea1b2f0-a1e6-476a-b3a9-c13786439146",
        hostId: "b91151a5-f788-4108-8019-b404620d3b57",
        location: {
            city: CityName.Sunspire,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 920,
                y: 300,
            }
        },
        ratings: 2.3,
        name: "Sands of Solace Inn",
        pricePerNight: 28,
        imgsUrls: ["inns/desert/3.jpeg", "inns/desert/4.jpeg", "inns/desert/5.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Sands of Solace Inn, an enchanting desert retreat in the mystical city of Sunspire. Nestled amidst the golden dunes of this remote island, our inn offers a perfect blend of comfort, luxury, and the natural wonder of the desert. Whether you seek adventure among the towering dunes or simply wish to bask in the serene beauty of the endless sands, Sands of Solace Inn provides a tranquil oasis for all travelers.",
            theSpace: "The Duneview Suite at Sands of Solace Inn offers a luxurious escape with breathtaking views of the golden desert. The queen-sized bed, draped in crisp, cool linens, faces a large window that perfectly frames the ever-shifting dunes. The room is elegantly decorated with natural materials and desert-inspired tones, creating a harmonious blend of modern comfort and timeless beauty.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "8:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "2:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 17,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "87342843-1f7e-4940-b046-f942c5e2ede0",
        hostId: "b91151a5-f788-4108-8019-b404620d3b57",
        location: {
            city: CityName.Sunspire,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 920,
                y: 300,
            }
        },
        ratings: 2.3,
        name: "Eclipse Oasis Inn",
        pricePerNight: 28,
        imgsUrls: ["inns/desert/5.jpeg", "inns/desert/2.jpeg", "inns/desert/1.jpeg", "inns/desert/3.jpeg", "inns/desert/4.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Eclipse Oasis Inn, a luxurious desert sanctuary located in the mystical city of Sunspire. Perched on the edge of the island's golden dunes, this inn offers a peaceful retreat where the golden sands meet the endless sky. Ideal for those seeking both relaxation and adventure, Eclipse Oasis Inn provides a unique blend of comfort and the natural wonder of Sunspire’s enchanted desert.",
            theSpace: "The Sunlit Serenity Suite is a haven of tranquility, designed to capture the essence of the desert’s beauty. The king-sized bed, draped in luxurious linens, is perfectly positioned to offer uninterrupted views of the golden dunes through floor-to-ceiling windows. The suite is elegantly decorated with natural textures and warm tones, reflecting the desert landscape.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "8:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "2:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 17,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "d400ff13-ac46-4cc6-9910-3bee4b96b112",
        hostId: "01c1e341-bb7d-4124-8b5f-3b8edf494794",
        location: {
            city: CityName.Ebonport,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 850,
                y: 160,
            }
        },
        ratings: 2.3,
        name: "The Mariner’s Rest Inn",
        pricePerNight: 16,
        imgsUrls: ["inns/sea/5.jpeg", "inns/sea/2.jpeg", "inns/sea/1.jpeg", "inns/sea/3.jpeg", "inns/sea/4.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to The Mariner’s Rest Inn, a charming retreat located in the bustling port city of Ebonport. Situated just steps from the harbor, this inn offers guests a cozy sanctuary amidst the vibrant energy of a city defined by its seafaring heritage. Whether you’re visiting for business, exploration, or relaxation, The Mariner’s Rest provides a comfortable and welcoming base in the heart of Ebonport.",
            theSpace: "The Harborview Suite offers a tranquil escape with stunning views of Ebonport’s bustling harbor. The queen-sized bed, dressed in soft, nautical-themed linens, ensures a restful night’s sleep, while the large windows allow you to enjoy the sights and sounds of the port from the comfort of your room. The suite is decorated with maritime touches, creating a cozy, sea-inspired ambiance.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "11:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "7:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 15,
                partialRefund: 5,
                noRefund: 3
            }
        }
    },
    {
        id: "8874057f-fea2-419d-bbbd-0d5b4581cf4c",
        hostId: "01c1e341-bb7d-4124-8b5f-3b8edf494794",
        location: {
            city: CityName.Ebonport,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 850,
                y: 160,
            }
        },
        ratings: 2.5,
        name: "Anchor’s Edge Inn",
        pricePerNight: 19,
        imgsUrls: ["inns/sea/5.jpeg", "inns/sea/2.jpeg", "inns/sea/1.jpeg", "inns/sea/3.jpeg", "inns/sea/4.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Anchor’s Edge Inn, a cozy and elegant retreat located in the heart of Ebonport, where the city meets the sea. Nestled along the bustling harbor, this inn offers an inviting escape for travelers seeking to experience the maritime charm and vibrant energy of Ebonport. Whether you’re here for business, pleasure, or a bit of both, Anchor’s Edge Inn provides a warm and welcoming home base in this historic port city.",
            theSpace: "The Seafarer’s Haven suite is designed with comfort and relaxation in mind. The spacious king-sized bed, draped in soft linens, promises a restful night’s sleep, while the room’s nautical-themed decor brings the spirit of the sea indoors. Large windows offer picturesque views of the harbor, allowing you to watch the ships as they come and go throughout the day.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "11:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "7:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 15,
                partialRefund: 5,
                noRefund: 3
            }
        }
    },
    {
        id: "38838126-ca0c-4463-ac0c-c871bd677b39",
        hostId: "b77f15cc-5e80-4615-8f00-394d2230ffd3",
        location: {
            city: CityName.Glimmerfall,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 510,
                y: 300,
            }
        },
        ratings: 3.6,
        name: "Riverstone Inn",
        pricePerNight: 84,
        imgsUrls: ["inns/normal/2.jpeg", "inns/normal/1.jpeg", "inns/normal/3.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Riverstone Inn, a tranquil escape nestled in the enchanting village of Glimmerfall. Located along the shimmering waters of the Glimmer River, this cozy inn offers a peaceful retreat for those seeking to unwind in nature’s embrace. Whether you're here to explore the natural beauty of the riverbanks, enjoy a quiet getaway, or discover the village’s charm, Riverstone Inn provides the perfect base for your stay.",
            theSpace: "The Glimmerfall Retreat suite is designed to offer comfort and serenity, with a queen-sized bed draped in soft linens and a window that overlooks the sparkling river. The room’s decor combines rustic charm with modern comforts, creating a warm and inviting atmosphere. A seating area by the window offers a perfect spot to relax with a book or simply take in the view of the flowing water.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "11:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "7:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 20,
                partialRefund: 7,
                noRefund: 5
            }
        }
    },
    {
        id: "9e05c5a2-5e95-4cfe-9203-9bf7f1050851",
        hostId: "b77f15cc-5e80-4615-8f00-394d2230ffd3",
        location: {
            city: CityName.Glimmerfall,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 510,
                y: 300,
            }
        },
        ratings: 3.8,
        name: "Willowbrook Lodge",
        pricePerNight: 80,
        imgsUrls: ["inns/normal/4.jpeg", "inns/normal/2.jpeg", "inns/normal/3.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Willowbrook Lodge, a serene riverside retreat in the heart of Glimmerfall. Tucked away among the whispering willows and overlooking the crystal-clear Glimmer River, this charming lodge offers a perfect getaway for those seeking peace, nature, and a touch of rustic luxury. Whether you're exploring the village or simply unwinding by the water, Willowbrook Lodge provides a tranquil base for your adventures.",
            theSpace: "The Riverside Escape cottage is designed with both comfort and charm in mind. The cozy queen-sized bed is dressed in soft linens, ensuring a restful night’s sleep. The living area features a comfortable sofa bed, making it ideal for a small family or group of friends. Large windows let in plenty of natural light and offer stunning views of the river, while the cottage’s rustic decor adds to its cozy, inviting atmosphere.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "11:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "7:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 20,
                partialRefund: 7,
                noRefund: 5
            }
        }
    },
    {
        id: "9be3ab5a-0c67-4698-9a56-aa4dcbfcecf3",
        hostId: "45d2621d-cc2a-4914-afaa-860893d90683",
        location: {
            city: CityName.Briarholm,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 120,
                y: 230,
            }
        },
        ratings: 4.8,
        name: "Coral Cove Inn",
        pricePerNight: 80,
        imgsUrls: ["inns/island/1.jpeg", "inns/island/2.jpeg", "inns/island/3.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Coral Cove Inn, a serene beachfront escape located in the picturesque village of Briarholm. Known for its stunning beaches, vibrant culture, and incredible cuisine, Briarholm offers the perfect island getaway, and Coral Cove Inn is your gateway to experiencing it all. Whether you're here to soak up the sun, savor the local flavors, or simply relax by the sea, our inn provides a tranquil and luxurious home base for your stay.",
            theSpace: "The Beachside Retreat suite is designed with relaxation and comfort in mind. The spacious king-sized bed, draped in soft, island-inspired linens, promises a peaceful night’s sleep, while the suite’s tropical decor captures the vibrant spirit of Briarholm. Large windows open onto a private balcony, offering breathtaking views of the ocean and allowing the gentle sea breeze to flow through the room.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "11:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "7:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 20,
                partialRefund: 7,
                noRefund: 5
            }
        }
    },
    {
        id: "ceb3b579-d5ac-4344-a2c8-4ad1fbe5f342",
        hostId: "45d2621d-cc2a-4914-afaa-860893d90683",
        location: {
            city: CityName.Briarholm,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 120,
                y: 230,
            }
        },
        ratings: 4.8,
        name: "Seabreeze Haven",
        pricePerNight: 75,
        imgsUrls: ["inns/island/3.jpeg", "inns/island/4.jpeg", "inns/island/5.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Seabreeze Haven, a charming coastal retreat located in the heart of Briarholm, where the turquoise waters meet golden sands. Known for its idyllic beaches, perfect climate, and mouthwatering cuisine, Briarholm is the ideal destination for those seeking a slice of paradise. Seabreeze Haven offers an intimate and relaxing stay just steps away from the beach, where you can unwind and immerse yourself in the island’s vibrant culture.",
            theSpace: "The Island Oasis bungalow is designed to blend the indoors with the outdoors, featuring large windows and sliding doors that open onto a private terrace surrounded by lush tropical gardens. The airy queen-sized bed, adorned with crisp linens and soft pillows, ensures a restful night’s sleep. The bungalow’s decor reflects the natural beauty of Briarholm, with bamboo accents, colorful island artwork, and a touch of coastal elegance.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "11:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "7:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.GatherUsedTowels
                ],
                stay: {
                    pets: false,
                    smoking: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 20,
                partialRefund: 7,
                noRefund: 5
            }
        }
    },
    {
        id: "63d6680d-a888-4ce4-8f4d-f519f696f598",
        hostId: "bbb7e157-ba94-4398-a75d-d36516694bd2",
        location: {
            city: CityName.Highreach,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 700,
                y: 850,
            }
        },
        ratings: 3.5,
        name: "Summit Rest Inn",
        pricePerNight: 133,
        imgsUrls: ["inns/normal/4.jpeg", "inns/normal/3.jpeg", "inns/normal/1.jpeg"],
        maxNumberOfGuests: 1,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 1,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Summit Rest Inn, a cozy mountain retreat nestled in the heart of Highreach, a village famed for its world-class goat cheese and exceptional wool. Perched high in the mountains, Highreach offers breathtaking views, fresh alpine air, and a peaceful escape from the bustle of everyday life. Summit Rest Inn is the perfect spot for travelers looking to experience the unique charm and traditions of this picturesque village.",
            theSpace: "The Alpine Serenity room is designed to offer comfort and tranquility, with a luxurious king-sized bed dressed in the finest local wool blankets and soft linens. The room’s decor reflects the rustic beauty of the mountains, with handcrafted wooden furniture and touches of local artistry. Large windows provide stunning views of the surrounding peaks, while the cozy interior invites you to unwind after a day of exploring.",
        },
        amenities: {
            essentials: true,
            lockOnBedroomDoor: true,
            hostGreetsYou: false,
            hotWater: true,
            bathOutdoors: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            upperBoundary: "10:00 AM"
                        },
                        checkOut: {
                            lowerBoundary: "8:00 PM",
                        }
                    }
                },
                leave: [
                    LeaveRule.ReturnKeys,
                    LeaveRule.TurnThingsOff,
                    LeaveRule.ThrowTrashAway
                ],
                stay: {
                    pets: true,
                    smoking: true,
                    parties: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 4,
                partialRefund: 2,
                noRefund: 0
            }
        }
    },
    {
        id: "3c5f4d79-9a9d-4a7f-8b1d-f27a8e2c7a13",
        hostId: "b672d4d2-4d7f-4c92-b46b-3f8a1d7c4f56",
        location: {
            city: CityName.Drakenshore,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 240,
                y: 120,
            }
        },
        ratings: 4.9,
        name: "Dragon's Rest Inn",
        pricePerNight: 50,
        imgsUrls: ["inns/island/5.jpeg", "inns/island/2.jpeg", "inns/island/4.jpeg"],
        maxNumberOfGuests: 6,
        lodging: {
            nbBedrooms: 3,
            nbBeds: 4,
            nbBaths: 2,
        },
        about: {
            context: "Nestled at the edge of the world, Dragon's Rest Inn in the village of Drakenshore offers a unique stay surrounded by mystery and intrigue. Known for its exotic products and enigmatic history, Drakenshore is a haven for adventurers and those seeking a truly out-of-the-ordinary experience.",
            theSpace: "The inn features three rustic yet comfortable bedrooms, each decorated with artifacts from distant lands. The master suite includes a king-sized bed with luxurious furs and a private balcony overlooking the misty shores. The common area is centered around a grand hearth, perfect for sharing tales of adventure. The kitchen is fully equipped with rare spices and ingredients native to Drakenshore, allowing guests to prepare their own exotic meals. The inn also boasts a private bath with a stone-carved soaking tub and views of the mysterious Drakenshore Forest.",
            note: "The innkeeper may offer you rare and potent draughts; consume them at your own risk."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: true,
            bards: true,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: false,
            hangers: true,
            iron: false,
            kitchen: true,
            librairies: false,
            silverware: true,
            tavern: true,
            waiter: false,
            potionsStand: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "4:00 PM",
                            upperBoundary: "9:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                    pets: true,
                    smoking: false,
                    parties: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 2
            }
        }
    },
    {
        id: "7d9b8e3d-8c73-4bcd-96e2-f3b6c8dfc9f4",
        hostId: "b672d4d2-4d7f-4c92-b46b-3f8a1d7c4f56",
        location: {
            city: CityName.Drakenshore,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 240,
                y: 120,
            }
        },
        ratings: 4.8,
        name: "The Enchanted Glade Lodge",
        pricePerNight: 65,
        imgsUrls: ["inns/island/1.jpeg", "inns/island/2.jpeg", "inns/island/3.jpeg"],
        maxNumberOfGuests: 4,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 1,
        },
        about: {
            context: "Hidden deep within the mystical forests of Drakenshore lies the Enchanted Glade Lodge, a secluded retreat for those seeking tranquility and a touch of magic. Surrounded by ancient trees and whispering winds, this lodge offers an escape from the mundane and a chance to reconnect with nature and the mystical energies that permeate the land.",
            theSpace: "The Enchanted Glade Lodge is a two-bedroom cabin, crafted from the finest woods and stones sourced locally from the Drakenshore forest. Each bedroom is adorned with enchanted wood carvings and soft, plush bedding to ensure a restful night. The living area features a grand fireplace, perfect for cozy evenings, and the kitchen is fully equipped for preparing meals with local ingredients. A private bath with a rain shower and a view of the surrounding glade completes the serene experience.",
            note: "Keep an ear out for the whispers of the forest spirits; they may have tales to tell."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: true,
            bards: false,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: false,
            hangers: true,
            iron: false,
            kitchen: true,
            librairies: false,
            silverware: true,
            tavern: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.FlexibleCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "2:00 PM",
                            upperBoundary: "10:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                    pets: true,
                    smoking: false,
                    parties: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "a2f9d3e7-51f6-45e3-b8da-99874eac37b7",
        hostId: "b672d4d2-4d7f-4c92-b46b-3f8a1d7c4f56",
        location: {
            city: CityName.Drakenshore,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 240,
                y: 120,
            }
        },
        ratings: 4.9,
        name: "Dragon's Breath Tavern",
        pricePerNight: 40,
        imgsUrls: ["inns/island/1.jpeg", "inns/island/2.jpeg", "inns/island/3.jpeg"],
        maxNumberOfGuests: 6,
        lodging: {
            nbBedrooms: 3,
            nbBeds: 4,
            nbBaths: 2,
        },
        about: {
            context: "Dragon's Breath Tavern is a vibrant and lively inn located at the heart of Drakenshore. Known for its warm atmosphere and rich history, this tavern has long been a favorite of travelers seeking both comfort and adventure. Whether you're here to sample the local brews or to rest after a day of exploring, Dragon's Breath offers an experience like no other.",
            theSpace: "The tavern features three cozy bedrooms, each with its own unique charm, ranging from rustic wooden beams to intricately woven tapestries. The common area boasts a large hearth where guests can gather, share stories, and enjoy hearty meals prepared in the fully equipped kitchen. The private baths include modern amenities, with one offering a stone-hewn tub for a truly luxurious soak.",
            note: "Don’t miss the tavern’s signature drink, 'Dragon’s Breath Ale,' a fiery brew said to warm even the coldest of nights."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: false,
            bards: true,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: true,
            hangers: true,
            iron: true,
            kitchen: true,
            librairies: false,
            silverware: true,
            tavern: true,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "4:00 PM",
                            upperBoundary: "11:00 PM"
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
                    smoking: true,
                    parties: true,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 10,
                partialRefund: 5,
                noRefund: 2
            }
        }
    },
    {
        id: "c8a3e5b1-45f4-42f2-8d21-fc6b6c0db62d",
        hostId: "b672d4d2-4d7f-4c92-b46b-3f8a1d7c4f56",
        location: {
            city: CityName.Drakenshore,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 240,
                y: 120,
            }
        },
        ratings: 4.7,
        name: "Mystic Moon Haven",
        pricePerNight: 55,
        imgsUrls: ["inns/island/5.jpeg", "inns/island/1.jpeg", "inns/island/2.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        about: {
            context: "Welcome to Mystic Moon Haven, an enchanting retreat located at the edge of the Drakenshore village. This haven offers a serene escape with a touch of magic, perfect for those seeking solitude and a connection with the mystical energies of the surrounding landscape. The inn's unique charm and tranquil setting promise a memorable stay.",
            theSpace: "The Mystic Moon Haven features a beautifully appointed bedroom with celestial-themed decor and a cozy queen-sized bed. The space is designed to provide ultimate relaxation, with soft lighting and soothing colors. The bath includes a luxurious soaking tub with a view of the night sky, allowing you to unwind under the stars. The common area includes a small library with rare and magical tomes.",
            note: "A crystal ball in the common area may offer glimpses of the future—use it wisely!"
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: false,
            bards: false,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: false,
            hangers: true,
            iron: false,
            kitchen: false,
            librairies: true,
            silverware: true,
            tavern: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "5:00 PM",
                            upperBoundary: "9:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                    parties: false,
                }
            },
            safety: {
                fireExtinguisher: true,
                smokeAlarm: true,
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "d4f1c2e6-9c7d-4b53-a1d4-0b6e4e1a6e7a",
        hostId: "b672d4d2-4d7f-4c92-b46b-3f8a1d7c4f56",
        location: {
            city: CityName.Drakenshore,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 240,
                y: 120,
            }
        },
        ratings: 4.6,
        name: "The Silverstream Inn",
        pricePerNight: 75,
        imgsUrls: ["inns/island/4.jpeg", "inns/island/3.jpeg", "inns/island/5.jpeg"],
        maxNumberOfGuests: 4,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 2,
        },
        about: {
            context: "Nestled alongside the glistening Silverstream River, The Silverstream Inn offers a peaceful retreat with breathtaking views of the water and surrounding landscape. Known for its elegant design and exceptional service, this inn is the perfect choice for those seeking a blend of luxury and nature in the remote village of Drakenshore.",
            theSpace: "The inn features two beautifully decorated bedrooms, each with its own unique charm and views of the river. The spacious living area includes a cozy fireplace and a large window seat perfect for relaxing and enjoying the view. Both private baths offer modern amenities and luxurious fixtures. The inn also includes a private outdoor deck where guests can unwind and listen to the soothing sounds of the river.",
            note: "Be sure to enjoy the complimentary afternoon tea served on the deck, with a selection of local pastries and herbal infusions."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: false,
            bards: false,
            dishes: true,
            essentials: true,
            fireplace: true,
            guards: false,
            hangers: true,
            iron: true,
            kitchen: true,
            librairies: false,
            silverware: true,
            tavern: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "3:00 PM",
                            upperBoundary: "9:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                    parties: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 2
            }
        }
    },
    {
        id: "f5c1e9d7-1a2b-4f67-8d33-fde83d8912b4",
        hostId: "c6f0e9d3-5c6b-4d1b-a8e9-b77c1d9eec8d",
        location: {
            city: CityName.Mirros,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 210,
                y: 580,
            }
        },
        ratings: 4.8,
        name: "Ancient Sands Inn",
        pricePerNight: 65,
        imgsUrls: ["inns/desert/3.jpeg", "inns/desert/1.jpeg", "inns/desert/3.jpeg"],
        maxNumberOfGuests: 5,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 2,
        },
        about: {
            context: "Ancient Sands Inn offers a unique blend of history and comfort in the heart of Mirros, the city of magic and ancient mysteries. Situated amidst the remnants of a once-great civilization, this inn provides a tranquil oasis for travelers exploring the desertic plains and the renowned magic academy. Immerse yourself in the ambiance of an ancient city while enjoying modern luxuries.",
            theSpace: "The inn features two spacious bedrooms decorated with motifs inspired by the ancient civilization of Mirros. Each room provides breathtaking views of the surrounding desert and the majestic ruins. The common area includes a cozy lounge with traditional desert furnishings and a small library of ancient texts. The private baths come with modern fixtures and soothing desert-themed decor.",
            note: "Explore the nearby ruins and magical academy during your stay. The inn’s staff can provide guided tours and magical insights upon request."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: true,
            bards: false,
            dishes: true,
            essentials: true,
            fireplace: false,
            guards: true,
            hangers: true,
            iron: true,
            kitchen: true,
            librairies: true,
            silverware: true,
            tavern: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "2:00 PM",
                            upperBoundary: "8:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                    parties: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "e7a1d6c8-8d9b-4c77-9c2b-1a5e9f5d6e2a",
        hostId: "c6f0e9d3-5c6b-4d1b-a8e9-b77c1d9eec8d",
        location: {
            city: CityName.Mirros,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 210,
                y: 580,
            }
        },
        ratings: 4.9,
        name: "The Celestial Oasis",
        pricePerNight: 85,
        imgsUrls: ["inns/desert/1.jpeg", "inns/desert/2.jpeg", "inns/desert/3.jpeg"],
        maxNumberOfGuests: 4,
        lodging: {
            nbBedrooms: 2,
            nbBeds: 3,
            nbBaths: 2,
        },
        about: {
            context: "Experience the magic of Mirros at The Celestial Oasis, a serene retreat in the heart of the ancient city. Surrounded by the remnants of a bygone era, this inn offers a unique blend of historical ambiance and modern comfort. Perfect for those looking to explore the mysteries of Mirros and enjoy its renowned magical heritage.",
            theSpace: "The Celestial Oasis features two elegantly appointed bedrooms with enchanting views of the desert and ancient ruins. The common area includes a cozy lounge with magical decor and a small library filled with ancient texts. Both private baths are equipped with contemporary amenities and designed to provide a luxurious experience.",
            note: "Enjoy exclusive access to the inn's private rooftop terrace, where you can gaze at the stars and marvel at the magical auroras that illuminate the night sky."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: true,
            bards: true,
            dishes: true,
            essentials: true,
            fireplace: false,
            guards: true,
            hangers: true,
            iron: true,
            kitchen: true,
            librairies: true,
            silverware: true,
            tavern: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "3:00 PM",
                            upperBoundary: "9:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 3
            }
        }
    },
    {
        id: "d6c4e2b1-0a1b-4f67-9f3a-7c8e7a3b0d2a",
        hostId: "c6f0e9d3-5c6b-4d1b-a8e9-b77c1d9eec8d",
        location: {
            city: CityName.Mirros,
            kingdom: KingdomName.Orlond,
            coordinates: {
                x: 210,
                y: 580,
            }
        },
        ratings: 4.7,
        name: "Mystic Mirage Suite",
        pricePerNight: 90,
        imgsUrls: ["inns/desert/3.jpeg", "inns/desert/4.jpeg"],
        maxNumberOfGuests: 3,
        lodging: {
            nbBedrooms: 1,
            nbBeds: 2,
            nbBaths: 1,
        },
        about: {
            context: "Step into the enchanting Mystic Mirage Suite, located in the heart of Mirros. This elegant retreat offers a blend of historical charm and magical ambiance, perfect for travelers seeking a unique experience in the ancient city known for its magic academy and mysterious ruins.",
            theSpace: "The suite features a spacious bedroom with mystical decor and a large window overlooking the desert plains. The cozy living area is designed with magical artifacts and comfortable furnishings. The private bath includes modern amenities and a touch of desert-themed luxury.",
            note: "Enjoy access to the inn's exclusive garden, which features magical flora and provides a peaceful retreat from the bustling city."
        },
        amenities: {
            bathOutdoors: false,
            hotWater: true,
            hostGreetsYou: true,
            lockOnBedroomDoor: true,
            magicAirConditioning: true,
            bards: false,
            dishes: true,
            essentials: true,
            fireplace: false,
            guards: true,
            hangers: true,
            iron: true,
            kitchen: false,
            librairies: true,
            silverware: true,
            tavern: false,
        },
        guidebook: {
            houserules: {
                time: {
                    type: CheckType.StandardCheck,
                    interval: {
                        checkIn: {
                            lowerBoundary: "3:00 PM",
                            upperBoundary: "9:00 PM"
                        },
                        checkOut: {
                            lowerBoundary: "11:00 AM"
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
                    smoking: true,
                    parties: false,
                }
            },
            safety: {
                carbonMonoxideAlarm: true,
                smokeAlarm: true,
                fireExtinguisher: true
            },
            cancellationPolicy: {
                fullRefund: 14,
                partialRefund: 7,
                noRefund: 3
            }
        }
    }
];