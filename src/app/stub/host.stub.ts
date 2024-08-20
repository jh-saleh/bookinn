import { Host, HostInformationType } from "../hexagonal/domain/model/stay/host.model";

export const hosts: Host[] = [
    {
        id: "cf64d4d5-d122-49c7-8025-0c2a6c0edbd2",
        firstname: "Dawn",
        lastname: "Duskwell",
        firstYearOfHosting: 2022,
        imgSrc: "./hosts/wizard/1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "Wizarding school of Frostgate"
            },
            {
                enum: HostInformationType.Languages,
                data: ["english", "french", "elvish"]
            },
            {
                enum: HostInformationType.ObsessedWith,
                data: "The depth of space"
            },
            {
                enum: HostInformationType.Work,
                data: "Magic thingies"
            }
        ],
        confirmation: {
            identity: true,
            email: false,
            phone: true,
        },
        listings: [
            "7191838b-f93b-4dad-a66f-2b8892fab112", "4df2b632-44ab-49a5-8d08-fd8e85af8efb"
        ],
        shortDescription: "Greetings, curious souls! I am Dawn Duskwell, a witch of Frostgate, where the mists are thick, and the air hums with ancient magic.",
        efficiency: {
            time: {
                type: "hours",
                amount: 2,
            },
            rate: 63,
        }
    },
    {
        id: "7da91f15-7500-4c75-bcaf-df7e4229fcaa",
        firstname: "Garrick",
        lastname: "Stormforge",
        firstYearOfHosting: 2005,
        imgSrc: "./hosts/dwarf/4.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "The mines of moria"
            },
            {
                enum: HostInformationType.Languages,
                data: ["english"]
            },
            {
                enum: HostInformationType.ObsessedWith,
                data: "Ore"
            },
            {
                enum: HostInformationType.Work,
                data: "Blacksmithing"
            }
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: false,
        },
        listings: [
            "c3743e0a-4687-4415-85c3-b613fa052daa"
        ],
        shortDescription: `Hail, adventurers! I am Garrick Stormforge, a master blacksmith known throughout Krynholm for 
        crafting weapons and armor as strong as the mountains themselves. My forge, the Emberstone, lies deep in the mines, where 
        the air is thick with the scent of burning coals and the ringing of hammer on steel.`,
        efficiency: {
            time: {
                type: "days",
                amount: 3,
            },
            rate: 10,
        }
    },
    {
        id: "998171ce-a502-4bc2-89d8-7d700e4bf6c3",
        firstname: "Liyrax",
        lastname: "Marinthal",
        firstYearOfHosting: 1986,
        imgSrc: "./hosts/aquareth/1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "Ocean school"
            },
            {
                enum: HostInformationType.Languages,
                data: ["english", "aquareth"]
            },
            {
                enum: HostInformationType.ObsessedWith,
                data: "The ocean and the environment"
            },
            {
                enum: HostInformationType.Work,
                data: "Fishing"
            }
        ],
        confirmation: {
            identity: true,
            email: false,
            phone: false,
        },
        listings: [
            "f20873fc-1a4a-4625-857b-4c847fa7752c",
            "eab8c84e-1811-4c9b-95e8-606bf9d25eda"
        ],
        shortDescription: `Greetings! I am Liyrax, your host at The Seafarer's Inn, located in the heart of Brightwater.
        I have lived in Brightwater all my life, and I am passionate about sharing the hidden treasures of this vibrant port city 
        with my guests. Whether it is directing you to the best seafood restaurants, guiding you to secret spots along the coastline, 
        or sharing tales of the sea, I am here to ensure your stay is memorable.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 15,
            },
            rate: 52,
        }
    },
    {
        id: "8ae3c716-18c6-448d-a237-0ccd101d869c",
        firstname: "Thorne",
        lastname: "Willowbend",
        firstYearOfHosting: 1600,
        imgSrc: "./hosts/wizard/3.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "The void"
            },
            {
                enum: HostInformationType.Languages,
                data: ["english"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "I like to fly"
            },
            {
                enum: HostInformationType.Work,
                data: "Enchanting"
            },
            {
                enum: HostInformationType.BiographyTitle,
                data: "A life of magic"
            }
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: false,
        },
        listings: [
            "217140f7-afa7-4ee0-8876-e9f95921babe",
        ],
        shortDescription: `Welcome, dear guest! I’m Morgana Blackthorn, your enchanting host at The Willow’s Edge Inn, 
        tucked away in the mystical village of Shadowfen. As a seasoned witch with a deep affinity for the arcane arts, 
        I am delighted to offer you a stay infused with the magic and serenity of our unique swamp environment.`,
        efficiency: {
            time: {
                type: "days",
                amount: 25,
            },
            rate: 5,
        }
    },
    {
        id: "8d78b3f7-cd06-430b-8c3e-f68a93d06bca",
        firstname: "Eliza",
        lastname: "Meadowbrook",
        firstYearOfHosting: 2001,
        imgSrc: "./hosts/generic/forest1.jpeg",
        informations: [
            {
                enum: HostInformationType.ObsessedWith,
                data: "Fishing"
            },
            {
                enum: HostInformationType.Languages,
                data: ["english"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Water boils at 100 °C"
            },
            {
                enum: HostInformationType.Work,
                data: "Farmer"
            },
            {
                enum: HostInformationType.BiographyTitle,
                data: "The Town Mouse and the Country Mouse"
            }
        ],
        confirmation: {
            identity: true,
            email: false,
            phone: true,
        },
        listings: [
            "f8ef70af-d80f-46f2-9253-27d58a7d9b4b",
            "10562195-0896-4966-843c-da049b723c01",
            "2fb49e55-5275-4531-9e41-c77c0c467aa9"
        ],
        shortDescription: `Greetings, traveler! I’m Eliza Meadowbrook, your host at The Golden Fields Inn in the charming village of Goldhaven. As a lifelong resident of this picturesque countryside, I’m thrilled to welcome you to our serene haven amidst the rolling wheat fields and vibrant animal farms.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 1,
            },
            rate: 95,
        }
    },
    {
        id: "889c580e-ead8-473e-bf35-54f51319cacd",
        firstname: "Elena",
        lastname: "Hartley",
        firstYearOfHosting: 2001,
        imgSrc: "./hosts/generic/mountains.jpeg",
        informations: [
            {
                enum: HostInformationType.ObsessedWith,
                data: "Swimming"
            },
            {
                enum: HostInformationType.School,
                data: "School of the lorem ipsum"
            },
            {
                enum: HostInformationType.FunFact,
                data: "Water has a pH of 7."
            },
            {
                enum: HostInformationType.Work,
                data: "Herbalist"
            },
            {
                enum: HostInformationType.BiographyTitle,
                data: "Humankind cannot gain anything without first giving something in return. To obtain, something of equal value must be lost. That is alchemy's first law of Equivalent Exchange."
            }
        ],
        confirmation: {
            identity: false,
            email: false,
            phone: true,
        },
        listings: [
            "9a1414b8-13b4-45e7-a490-f982b9d46712",
            "660f3aba-0bc9-4b08-9aec-e4a3e0fa4b27",
        ],
        shortDescription: `Elena Hartley is the proud owner of Redleaf Retreat Inn and a lifelong resident of the picturesque city of Redleaf. With a background in herbal medicine, Elena has spent years cultivating her passion for natural health and wellness. Her expertise in the local flora, particularly the healing herbs that Redleaf is famous for, has made her a respected figure in the community.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 14,
            },
            rate: 63,
        }
    },
    {
        id: "0de20ca7-a77f-492d-ae9d-b89745dc2865",
        firstname: "Seraphine",
        lastname: "Moonveil",
        firstYearOfHosting: 2002,
        imgSrc: "./hosts/wizard/3.jpeg",
        informations: [
            {
                enum: HostInformationType.ObsessedWith,
                data: "Magic"
            },
            {
                enum: HostInformationType.Languages,
                data: ["runes", "elvish"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Magic is fun."
            },
            {
                enum: HostInformationType.Work,
                data: "Magic"
            },
        ],
        confirmation: {
            identity: false,
            email: true,
            phone: false,
        },
        listings: [
            "16081a1e-95fa-4d50-9316-c1ef0736b72c",
            "14c3d627-60f0-4da8-b196-8476bd82c006"
        ],
        shortDescription: `Seraphine Moonveil, is a lifelong resident of this enchanted city and a true connoisseur of its ancient magic. Seraphine has a deep connection to the swamp and its timeless secrets, and she takes great joy in sharing the wonders of Moonshadow with her guests.`,
        efficiency: {
            time: {
                type: "days",
                amount: 82,
            },
            rate: 80,
        }
    },
    {
        id: "9f4b8cc3-db20-486c-a708-73bfb5b0e8c1",
        firstname: "Rowan",
        lastname: "Marlowe",
        firstYearOfHosting: 2010,
        imgSrc: "./hosts/generic/mountains3.jpeg",
        informations: [
            {
                enum: HostInformationType.ObsessedWith,
                data: "Pirates of the Caribbean"
            },
            {
                enum: HostInformationType.Languages,
                data: ["pirate speak", "english"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Pirates often wore eye patches, not because they were missing an eye, but to keep one eye adjusted to darkness for quick transitions between the bright deck and dim belowdecks."
            },
            {
                enum: HostInformationType.Work,
                data: "Ex-pirate"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "e100411d-0371-48af-847a-7b106379ef16",
        ],
        shortDescription: `Rowan’s life was once a thrilling voyage across stormy seas, commanding ships through the tempestuous waters of Stormwatch. His adventures came to an end when an arrow to the knee during a daring skirmish forced him to leave his beloved nautical life behind. Embracing a new chapter, Rowan transformed his cliffside family home into The Stormhaven Inn, a cozy retreat where maritime charm meets warm hospitality. With his deep knowledge of the sea and its legends, Rowan is excited to share his stories and insights with you.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 1,
            },
            rate: 42,
        }
    },
    {
        id: "2d8289ce-efdd-4808-b3cb-1dec58b8c21e",
        firstname: "Gideon",
        lastname: "Oakwood",
        firstYearOfHosting: 2000,
        imgSrc: "./hosts/generic/forest1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "The school of the forest"
            },
            {
                enum: HostInformationType.Languages,
                data: ["elvish"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "It's dangerous to go alone."
            },
            {
                enum: HostInformationType.Work,
                data: "Forester"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: false,
        },
        listings: [
            "34105491-58ae-4f26-8716-cf0d34660780",
            "90105f53-f88f-47e3-bcaf-c14de552ef51"
        ],
        shortDescription: `Meet Gideon Oakwood, the welcoming host of Whispering Pines Inn. Gideon is a lifelong resident of Willowgrove with a deep-rooted connection to the forest. Once a dedicated forester, Gideon’s passion for the natural world led him to transition from working in the woods to hosting guests seeking a serene escape in this enchanting village.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 2,
            },
            rate: 55,
        }
    },
    {
        id: "b91151a5-f788-4108-8019-b404620d3b57",
        firstname: "Cyrus",
        lastname: "Ashen",
        firstYearOfHosting: 2002,
        imgSrc: "./hosts/generic/desert1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "School"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Languages"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Wow what a fun fact that was !"
            },
            {
                enum: HostInformationType.Work,
                data: "Lorem Ipsum"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "ecb441ef-f998-4c5a-9423-a49e632e054a",
            "2ea1b2f0-a1e6-476a-b3a9-c13786439146",
            "87342843-1f7e-4940-b046-f942c5e2ede0",
        ],
        shortDescription: `Meet Cyrus Ashen, the charismatic host of Golden Mirage Inn. A native of Sunspire, Cyrus has spent his life exploring the desert and its many secrets. With a deep passion for the mystical and a love for the rich culture of his homeland, Cyrus opened Golden Mirage Inn to share the beauty and magic of Sunspire with travelers from around the world.`,
        efficiency: {
            time: {
                type: "days",
                amount: 20,
            },
            rate: 70,
        }
    },
    {
        id: "01c1e341-bb7d-4124-8b5f-3b8edf494794",
        firstname: "Finn",
        lastname: "Hartley",
        firstYearOfHosting: 2002,
        imgSrc: "./hosts/generic/snow2.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "School"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Languages"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Wow what a fun fact that was !"
            },
            {
                enum: HostInformationType.Work,
                data: "Lorem Ipsum"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "d400ff13-ac46-4cc6-9910-3bee4b96b112",
            "8874057f-fea2-419d-bbbd-0d5b4581cf4c"
        ],
        shortDescription: `Meet Finn Hartley, the friendly and knowledgeable host of Anchor’s Edge Inn. Born and raised in Ebonport, Finn has a deep love for his hometown and its rich maritime history. With years of experience in the hospitality industry and a passion for the sea, Finn opened Anchor’s Edge Inn to share the beauty and stories of Ebonport with visitors from around the world.`,
        efficiency: {
            time: {
                type: "days",
                amount: 20,
            },
            rate: 70,
        }
    },
    {
        id: "b77f15cc-5e80-4615-8f00-394d2230ffd3",
        firstname: "Aiden",
        lastname: "Rivers",
        firstYearOfHosting: -1180,
        imgSrc: "./hosts/generic/swamp2.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "School"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Languages"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Wow what a fun fact that was !"
            },
            {
                enum: HostInformationType.Work,
                data: "Lorem Ipsum"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: false,
        },
        listings: [
            "38838126-ca0c-4463-ac0c-c871bd677b39",
            "9e05c5a2-5e95-4cfe-9203-9bf7f1050851"
        ],
        shortDescription: `Meet Aiden Rivers, the friendly and down-to-earth host of Riverstone Inn. Aiden grew up exploring the woods and rivers of Glimmerfall, developing a deep connection to nature from a young age. After traveling the world as an adventure guide, he returned to his beloved village to create a peaceful haven for guests seeking to experience the tranquility and charm of Glimmerfall.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 6,
            },
            rate: 75,
        }
    },
    {
        id: "45d2621d-cc2a-4914-afaa-860893d90683",
        firstname: "Kai",
        lastname: "Moore",
        firstYearOfHosting: 2006,
        imgSrc: "./hosts/generic/forest1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "School"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Languages"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Wow what a fun fact that was !"
            },
            {
                enum: HostInformationType.Work,
                data: "Lorem Ipsum"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: false,
        },
        listings: [
            "9be3ab5a-0c67-4698-9a56-aa4dcbfcecf3",
            "ceb3b579-d5ac-4344-a2c8-4ad1fbe5f342",
        ],
        shortDescription: `Meet Kai Moore, the friendly and laid-back host of Coral Cove Inn. Born and raised on the island, Kai has a deep love for Briarholm and a passion for sharing its beauty and culture with guests. With a background in hospitality and a deep connection to the local community, Kai opened Coral Cove Inn to create a welcoming space where travelers can experience the best of island life.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 2,
            },
            rate: 95,
        }
    },
    {
        id: "bbb7e157-ba94-4398-a75d-d36516694bd2",
        firstname: "Elias",
        lastname: "Stone",
        firstYearOfHosting: 1994,
        imgSrc: "./hosts/generic/swamp2.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "School"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Languages"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Wow what a fun fact that was !"
            },
            {
                enum: HostInformationType.Work,
                data: "Lorem Ipsum"
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "63d6680d-a888-4ce4-8f4d-f519f696f598",
        ],
        shortDescription: `Meet Elias Stone, the dedicated and welcoming host of Summit Rest Inn. A lifelong resident of Highreach, Elias has a deep connection to the village and its traditions. With a background in agriculture and a love for the mountains, he opened Summit Rest Inn to share the beauty and culture of Highreach with visitors from around the world.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 2,
            },
            rate: 90,
        }
    },
    {
        id: "b672d4d2-4d7f-4c92-b46b-3f8a1d7c4f56",
        firstname: "Rhiannon",
        lastname: "Drakewood",
        firstYearOfHosting: 2002,
        imgSrc: "./hosts/generic/forest1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "Academy of Ancient Lore"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Common Tongue", "Elvish", "Draconic"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Rhiannon is a skilled potion brewer and often creates unique concoctions for her guests."
            },
            {
                enum: HostInformationType.Work,
                data: "Innkeeper and Herbalist"
            }
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "3c5f4d79-9a9d-4a7f-8b1d-f27a8e2c7a13",
            "7d9b8e3d-8c73-4bcd-96e2-f3b6c8dfc9f4",
            "a2f9d3e7-51f6-45e3-b8da-99874eac37b7",
            "c8a3e5b1-45f4-42f2-8d21-fc6b6c0db62d",
            "d4f1c2e6-9c7d-4b53-a1d4-0b6e4e1a6e7a"
        ],
        shortDescription: `Meet Rhiannon Drakewood, the enigmatic and knowledgeable host of Dragon's Rest Inn. A resident of Drakenshore for over two decades, Rhiannon has dedicated her life to mastering the arts of herbalism and potion brewing. Her inn is a reflection of her passion for the mystical and exotic, offering guests a unique and immersive experience at the edge of the world.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 3,
            },
            rate: 95,
        }
    },
    {
        id: "c6f0e9d3-5c6b-4d1b-a8e9-b77c1d9eec8d",
        firstname: "Liora",
        lastname: "Starcrest",
        firstYearOfHosting: 2002,
        imgSrc: "./hosts/generic/desert1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "Graduated from the Mirros Magic Academy"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Common", "Draconic", "Celestial"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Liora can perform an ancient spell to reveal hidden messages in ruins."
            },
            {
                enum: HostInformationType.Work,
                data: "Innkeeper with a background in magical artifact restoration."
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "f5c1e9d7-1a2b-4f67-8d33-fde83d8912b4",
            "e7a1d6c8-8d9b-4c77-9c2b-1a5e9f5d6e2a",
            "d6c4e2b1-0a1b-4f67-9f3a-7c8e7a3b0d2a"
        ],
        shortDescription: `Meet Liora Starcrest, the enchanting host of Ancient Sands Inn. With a distinguished education from the Mirros Magic Academy and expertise in magical artifact restoration, Liora brings a touch of magic and historical insight to her role. Her deep connection to the ancient city of Mirros and its magical heritage ensures a memorable stay for all visitors.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 1,
            },
            rate: 85,
        }
    },
    {
        id: "b4e9d7a3-8c5d-4f6b-a1f9-c7e2a4d8eec9",
        firstname: "Aric",
        lastname: "Spiceveil",
        firstYearOfHosting: 2005,
        imgSrc: "./hosts/generic/desert1.jpeg",
        informations: [
            {
                enum: HostInformationType.School,
                data: "Studied Textile Arts at the Vorandal Trade Academy"
            },
            {
                enum: HostInformationType.Languages,
                data: ["Common", "Elvish", "Dwarvish"]
            },
            {
                enum: HostInformationType.FunFact,
                data: "Aric is an expert in ancient weaving techniques and can identify the origin of any textile just by touch."
            },
            {
                enum: HostInformationType.Work,
                data: "Innkeeper with extensive experience in the spice trade and textile curation."
            },
        ],
        confirmation: {
            identity: true,
            email: true,
            phone: true,
        },
        listings: [
            "a8f1c3e7-2b4c-4d9a-8b5f-9e1b8b6a0d4e",
            "d3e7f9c4-1b3d-4f8b-8a9c-5e2b7f4d8c3b",
            "f2b9e3a1-7d3c-4c8e-9a2f-5d7b1c9a2d3e"
        ],
        shortDescription: `Meet Aric Spiceveil, the welcoming host of Saffron Sands Suite. With a background in Textile Arts from the Vorandal Trade Academy and deep expertise in the spice trade, Aric offers guests a unique cultural experience. His passion for the rich traditions of Vorandal, combined with his knowledge of ancient weaving techniques, ensures a stay that is both comfortable and enlightening.`,
        efficiency: {
            time: {
                type: "hours",
                amount: 2,
            },
            rate: 90,
        }
    }
];