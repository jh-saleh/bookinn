import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const UserFeatureKey = 'User';
const selectUserState = createFeatureSelector<Readonly<UserState>>(UserFeatureKey);

export const selectUser = createSelector(
    selectUserState,
    (userState: UserState) => { return userState; }
);