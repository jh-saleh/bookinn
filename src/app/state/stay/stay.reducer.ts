import { createReducer, on } from "@ngrx/store";
import { Stay } from "../../hexagonal/domain/model/stay/stay.model";
import { StayActions } from "./stay.actions";

export interface StayState {
    stay?: Stay;
}

const initialState: Readonly<StayState> = {
    stay: undefined,
}

export const StayReducer = createReducer(
    initialState,
    on(StayActions.setStay, (_state, { stay }) => ({ stay }))
);