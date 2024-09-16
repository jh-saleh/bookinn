import { createReducer, on } from "@ngrx/store";
import { Guests } from "../../hexagonal/domain/model/stay/guest.model";
import { CalendarDate } from "../../service/calendar-dates.service";
import { BillInformationActions } from "./bill-information.actions";

export interface BillInformation {
    guests: Guests | undefined;
    startingDate: CalendarDate | undefined;
    endingDate: CalendarDate | undefined;
    nbDays: number | undefined;
}

export interface BillInformationState {
    billInformation?: BillInformation;
}

const initialState: Readonly<BillInformationState> = {
    billInformation: undefined,
}

export const BillInformationReducer = createReducer(
    initialState,
    on(BillInformationActions.updateBillInformation, (_state, { billInformation }) => ({ billInformation })),
    on(BillInformationActions.updateStartingDate, ({ billInformation }, { startingDate }) => ({
        billInformation: {
            startingDate,
            endingDate: billInformation?.endingDate,
            nbDays: billInformation?.nbDays,
            guests: billInformation?.guests,
        }
    })),
    on(BillInformationActions.updateEndingDate, ({ billInformation }, { endingDate }) => ({
        billInformation: {
            startingDate: billInformation?.startingDate,
            endingDate: endingDate,
            nbDays: billInformation?.nbDays,
            guests: billInformation?.guests
        }
    })),
    on(BillInformationActions.updateGuests, ({ billInformation }, { guests }) => {
        return {
            billInformation: {
                startingDate: billInformation?.startingDate,
                endingDate: billInformation?.endingDate,
                nbDays: billInformation?.nbDays,
                guests: guests,
            }
        };
    }),
    on(BillInformationActions.resetBillInformation, (_state) => ({ billInformation: undefined })),
);