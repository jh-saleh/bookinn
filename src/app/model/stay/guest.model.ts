export type GuestType = "adult" | "child" | "infant" | "pet"
interface GuestData {
    nb: number;
    maximum: number;
    minimum?: number;
}
export type Guests = Record<GuestType, GuestData>;

export const getTotalNbOfGuests = (guests: Guests | undefined) => {
    let totalNbOfGuests = 0;
    if (guests) {
        for (let guest in guests) {
            totalNbOfGuests += guests[guest as GuestType].nb
        }
    }
    return totalNbOfGuests;
}