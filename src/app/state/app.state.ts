import { HTMLBodyState } from "./htmlBody/htmlBody.reducer";
import { StayState } from "./stay/stay.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
    htmlBody: HTMLBodyState;
    user: UserState;
    stay: StayState;
}