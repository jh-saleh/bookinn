import { Host } from "../model/inn/host.model";

export const hosts: Host[] = [
    {
        id: "cf64d4d5-d122-49c7-8025-0c2a6c0edbd2",
        firstname: "Dawn",
        lastname: "Duskwell",
        firstYearOfHosting: 2022,
        imgSrc: "./hosts/wizard/1.jpeg",
        informations: [

        ],
        listings: [
            "7191838b-f93b-4dad-a66f-2b8892fab112", "4df2b632-44ab-49a5-8d08-fd8e85af8efb"
        ],
        shortDescription: "Greetings, curious souls!  I am Dawn Duskwell, a witch of Frostgate, where the mists are thick, and the air hums with ancient magic.",
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

        ],
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

        ],
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

        ],
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

        ],
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

        ],
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
            rate: 80,
        }
    },
    {
        id: "0de20ca7-a77f-492d-ae9d-b89745dc2865",
        firstname: "Seraphine",
        lastname: "Moonveil",
        firstYearOfHosting: 2002,
        imgSrc: "./hosts/wizard/3.jpeg",
        informations: [

        ],
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
    }
];