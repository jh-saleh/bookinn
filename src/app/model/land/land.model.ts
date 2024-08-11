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

interface City {
    name: CityName;
    biome: Biome;
    economy: Economy[];
}

export enum KingdomName {
    Orlond = "Orlond",
}

interface Kingdom {
    name: KingdomName;
    cities: City[];
}

export type World = Kingdom[];

export const world: World = [
    {
        name: KingdomName.Orlond,
        cities: [
            {
                name: CityName.Thandor,
                biome: Biome.Forest,
                economy: [Economy.Timber, Economy.Herbalism]
            },
            {
                name: CityName.Krynholm,
                biome: Biome.Mountain,
                economy: [Economy.Mining, Economy.Blacksmithing]
            },
            {
                name: CityName.Lurendale,
                biome: Biome.Plains,
                economy: [Economy.Agriculture, Economy.Livestock]
            },
            {
                name: CityName.Vorandal,
                biome: Biome.Desert,
                economy: [Economy.SpiceTrade, Economy.Textiles]
            },
            {
                name: CityName.Mirros,
                biome: Biome.Desert,
                economy: [Economy.Fishing, Economy.Shipbuilding]
            },
            {
                name: CityName.Drakenshore,
                biome: Biome.Island,
                economy: [Economy.Alchemy, Economy.HerbalRemedies]
            },
            {
                name: CityName.Highreach,
                biome: Biome.Highland,
                economy: [Economy.Wool, Economy.CheeseMaking]
            },
            {
                name: CityName.Briarholm,
                biome: Biome.Island,
                economy: [Economy.Hunting, Economy.FurTrade]
            },
            {
                name: CityName.Glimmerfall,
                biome: Biome.River,
                economy: [Economy.Trade, Economy.Craftsmanship]
            },
            {
                name: CityName.Ebonport,
                biome: Biome.Coastal,
                economy: [Economy.Trade, Economy.Fishing]
            },
            {
                name: CityName.Ironcliff,
                biome: Biome.Mountain,
                economy: [Economy.IronMining, Economy.Blacksmithing]
            },
            {
                name: CityName.Sunspire,
                biome: Biome.DesertOasis,
                economy: [Economy.SilkProduction, Economy.Alchemy]
            },
            {
                name: CityName.Frostgate,
                biome: Biome.Tundra,
                economy: [Economy.FurTrade, Economy.IceFishing]
            },
            {
                name: CityName.Willowgrove,
                biome: Biome.Forest,
                economy: [Economy.Woodworking, Economy.Beekeeping]
            },
            {
                name: CityName.Stormwatch,
                biome: Biome.Coastal,
                economy: [Economy.SaltProduction, Economy.Shipbuilding]
            },
            {
                name: CityName.Moonshadow,
                biome: Biome.Swamp,
                economy: [Economy.Alchemy, Economy.ExoticPlants]
            },
            {
                name: CityName.Redleaf,
                biome: Biome.Forest,
                economy: [Economy.Herbalism, Economy.Hunting]
            },
            {
                name: CityName.Goldhaven,
                biome: Biome.Plains,
                economy: [Economy.Agriculture, Economy.Livestock]
            },
            {
                name: CityName.Shadowfen,
                biome: Biome.Marsh,
                economy: [Economy.HerbalRemedies, Economy.Fishery]
            },
            {
                name: CityName.Brightwater,
                biome: Biome.River,
                economy: [Economy.Trade, Economy.Pottery]
            }
        ]
    }
];