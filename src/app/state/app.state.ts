import { HTMLBodyState } from "./htmlBody/htmlBody.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
    htmlBody: HTMLBodyState;
    user: UserState;
}