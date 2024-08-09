enum HostInformationType {
    Hobby = "sports_soccer",
    Work = "work",
    School = "school",
    Languages = "language",

}

export interface HostInformation {
    data: string | string[];
    enum: HostInformationType;
}

export interface Host {
    id: string;
    firstname: string;
    lastname: string;
    imgSrc: string;
    firstYearOfHosting: number;
    informations: HostInformation[];
    shortDescription: string;
    listings: string[];
    efficiency: {
        rate: number;
        time: {
            type: "hours" | "days",
            amount: number
        }
    }
}