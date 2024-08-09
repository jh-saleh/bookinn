import { Host } from "./host.model";

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
];