import { Coordinates } from "../stay/location.model";

enum Economy {
    Timber,
    Herbalism,
    Mining,
    Blacksmithing,
    Agriculture,
    Livestock,
    SpiceTrade,
    Textiles,
    Fishing,
    Shipbuilding,
    Alchemy,
    HerbalRemedies,
    Wool,
    CheeseMaking,
    Hunting,
    FurTrade,
    Trade,
    Craftsmanship,
    IronMining,
    SilkProduction,
    IceFishing,
    Woodworking, Beekeeping,
    SaltProduction,
    ExoticPlants,
    Fishery,
    Pottery,
}

enum Biome {
    Forest,
    Mountain,
    Plains,
    Desert,
    Coastal,
    Swamp,
    Highland,
    River,
    Tundra,
    Marsh,
    DesertOasis,
    Island
}

export enum CityName {
    Thandor = "Thandor",
    Krynholm = "Krynholm",
    Lurendale = "Lurendale",
    Vorandal = "Vorandal",
    Mirros = "Mirros",
    Drakenshore = "Drakenshore",
    Highreach = "Highreach",
    Briarholm = "Briarholm",
    Glimmerfall = "Glimmerfall",
    Ebonport = "Ebonport",
    Ironcliff = "Ironcliff",
    Sunspire = "Sunspire",
    Frostgate = "Frostgate",
    Willowgrove = "Willowgrove",
    Stormwatch = "Stormwatch",
    Moonshadow = "Moonshadow",
    Redleaf = "Redleaf",
    Goldhaven = "Goldhaven",
    Shadowfen = "Shadowfen",
    Brightwater = "Brightwater",
}

export const citiesName: string[] = [
    CityName.Thandor,
    CityName.Krynholm,
    CityName.Lurendale,
    CityName.Vorandal,
    CityName.Mirros,
    CityName.Drakenshore,
    CityName.Highreach,
    CityName.Briarholm,
    CityName.Glimmerfall,
    CityName.Ebonport,
    CityName.Ironcliff,
    CityName.Sunspire,
    CityName.Frostgate,
    CityName.Willowgrove,
    CityName.Stormwatch,
    CityName.Moonshadow,
    CityName.Redleaf,
    CityName.Goldhaven,
    CityName.Shadowfen,
    CityName.Brightwater,
]

interface CityData {
    biome: Biome;
    economy: Economy[];
    position: Coordinates;
}

export enum KingdomName {
    Orlond = "Orlond",
}

export type World = Record<CityName, CityData>;

export const world: World = {
    Thandor: {
        biome: Biome.Forest,
        economy: [Economy.Timber, Economy.Herbalism],
        position: {
            x: 450,
            y: 220,
        }
    },
    Krynholm: {
        biome: Biome.Mountain,
        economy: [Economy.Mining, Economy.Blacksmithing],
        position: {
            x: 470,
            y: 800,
        }
    },
    Lurendale: {
        biome: Biome.Plains,
        economy: [Economy.Agriculture, Economy.Livestock],
        position: {
            x: 760,
            y: 470,
        }
    },
    Vorandal: {
        biome: Biome.Desert,
        economy: [Economy.SpiceTrade, Economy.Textiles],
        position: {
            x: 370,
            y: 540,
        }
    },
    Mirros: {
        biome: Biome.Desert,
        economy: [Economy.Fishing, Economy.Shipbuilding],
        position: {
            x: 210,
            y: 580,
        }
    },
    Drakenshore: {
        biome: Biome.Island,
        economy: [Economy.Alchemy, Economy.HerbalRemedies],
        position: {
            x: 240,
            y: 120,
        }
    },
    Highreach: {
        biome: Biome.Highland,
        economy: [Economy.Wool, Economy.CheeseMaking],
        position: {
            x: 700,
            y: 850,
        }
    },
    Briarholm: {
        biome: Biome.Island,
        economy: [Economy.Hunting, Economy.FurTrade],
        position: {
            x: 120,
            y: 230,
        }
    },
    Glimmerfall: {
        biome: Biome.River,
        economy: [Economy.Trade, Economy.Craftsmanship],
        position: {
            x: 510,
            y: 300,
        }
    },
    Ebonport: {
        biome: Biome.Coastal,
        economy: [Economy.Trade, Economy.Fishing],
        position: {
            x: 850,
            y: 160,
        }
    },
    Ironcliff: {
        biome: Biome.Mountain,
        economy: [Economy.IronMining, Economy.Blacksmithing],
        position: {
            x: 170,
            y: 800,
        }
    },
    Sunspire: {
        biome: Biome.DesertOasis,
        economy: [Economy.SilkProduction, Economy.Alchemy],
        position: {
            x: 920,
            y: 300,
        }
    },
    Frostgate: {
        biome: Biome.Tundra,
        economy: [Economy.FurTrade, Economy.IceFishing],
        position: {
            x: 250,
            y: 900,
        }
    },
    Willowgrove: {
        biome: Biome.Forest,
        economy: [Economy.Woodworking, Economy.Beekeeping],
        position: {
            x: 450,
            y: 420,
        }
    },
    Stormwatch: {
        biome: Biome.Coastal,
        economy: [Economy.SaltProduction, Economy.Shipbuilding],
        position: {
            x: 870,
            y: 710,
        }
    },
    Moonshadow: {
        biome: Biome.Swamp,
        economy: [Economy.Alchemy, Economy.ExoticPlants],
        position: {
            x: 500,
            y: 610,
        }
    },
    Redleaf: {
        biome: Biome.Forest,
        economy: [Economy.Herbalism, Economy.Hunting],
        position: {
            x: 250,
            y: 400,
        }
    },
    Goldhaven: {
        biome: Biome.Plains,
        economy: [Economy.Agriculture, Economy.Livestock],
        position: {
            x: 870,
            y: 480,
        }
    },
    Shadowfen: {
        biome: Biome.Marsh,
        economy: [Economy.HerbalRemedies, Economy.Fishery],
        position: {
            x: 740,
            y: 535,
        }
    },
    Brightwater: {
        biome: Biome.River,
        economy: [Economy.Trade, Economy.Pottery],
        position: {
            x: 255,
            y: 310,
        }
    }
};