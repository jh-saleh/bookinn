export enum HostInformationType {
    Work = "myWork",
    School = "whereIWentToSchool",
    Languages = "speaks",
    FunFact = "funFact",
    BiographyTitle = "myBiographyTitle",
    ObsessedWith = "iAmObsessedWith"
}

export interface HostInformation {
    data: string | string[];
    enum: HostInformationType;
}

export interface HostInformationRow {
    icon: string
}

export const HostInformationTable: Record<HostInformationType, HostInformationRow> = {
    whereIWentToSchool: {
        icon: "school",
    },
    myWork: {
        icon: "work",
    },
    speaks: {
        icon: "language"
    },
    funFact: {
        icon: "lightbulb"
    },
    myBiographyTitle: {
        icon: "menu_book"
    },
    iAmObsessedWith: {
        icon: "favorite"
    }
}

export interface Host {
    id: string;
    firstname: string;
    lastname: string;
    imgSrc: string;
    firstYearOfHosting: number;
    informations: HostInformation[];
    shortDescription: string;
    confirmation: {
        identity: boolean;
        email: boolean;
        phone: boolean;
    }
    listings: string[];
    efficiency: {
        rate: number;
        time: {
            type: "hours" | "days",
            amount: number
        }
    }
}