import { createReducer, on } from "@ngrx/store";
import { User } from "../../hexagonal/domain/model/stay/user.model";
import { UserActions } from "./user.actions";

export interface UserState {
    user?: User;
}

const initialState: Readonly<UserState> = {
    user: undefined,
}

export const UserReducer = createReducer(
    initialState,
    on(UserActions.login, (_state, { user }) => ({ user })),
    on(UserActions.logout, (_state) => ({ user: undefined })),
    on(UserActions.setUser, (_state, { user }) => ({ user }))
);