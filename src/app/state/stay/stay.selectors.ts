import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StayState } from './stay.reducer';

export const StayFeatureKey = 'Stay';
const selectStayState = createFeatureSelector<Readonly<StayState>>(StayFeatureKey);

export const selectStay = createSelector(
    selectStayState,
    (stayState: StayState) => { return stayState; }
);