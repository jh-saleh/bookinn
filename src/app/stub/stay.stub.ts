import { CheckType, LeaveRule } from "../model/inn/guidebook.model";
import { Stay } from "../model/inn/stay.model";
import { CityName, KingdomName } from "../model/land/land.model";

export const stays: Stay[] = [
    {
        id: "4df2b632-44ab-49a5-8d08-fd8e85af8efb",
        hostId: "cf64d4d5-d122-49c7-8025-0c2a6c0edbd2",
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
        hostId: "cf64d4d5-d122-49c7-8025-0c2a6c0edbd2",
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
        hostId: "7da91f15-7500-4c75-bcaf-df7e4229fcaa",
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
    },
    {
        id: "f20873fc-1a4a-4625-857b-4c847fa7752c",
        hostId: "998171ce-a502-4bc2-89d8-7d700e4bf6c3",
        city: CityName.Brightwater,
        kingdom: KingdomName.Orlond,
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
        city: CityName.Brightwater,
        kingdom: KingdomName.Orlond,
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
        city: CityName.Shadowfen,
        kingdom: KingdomName.Orlond,
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
        city: CityName.Goldhaven,
        kingdom: KingdomName.Orlond,
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
        city: CityName.Goldhaven,
        kingdom: KingdomName.Orlond,
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
        city: CityName.Goldhaven,
        kingdom: KingdomName.Orlond,
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
    }
];