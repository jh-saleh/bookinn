import { createReducer, on } from "@ngrx/store";
import { HTMLBodyActions } from "./htmlBody.actions";

export interface HTMLBodyState {
    locked: boolean;
}

const initialState: Readonly<HTMLBodyState> = {
    locked: false
}

export const HTMLBodyReducer = createReducer(
    initialState,
    on(HTMLBodyActions.lockHTMLBody, (_state) => ({ locked: true })),
    on(HTMLBodyActions.unlockHTMLBody, (_state) => ({ locked: false })),
);