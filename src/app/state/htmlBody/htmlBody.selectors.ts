import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HTMLBodyState } from './htmlBody.reducer';

export const HTMLBodyFeatureKey = 'HTMLBody';
const selectHTMLBodyState = createFeatureSelector<Readonly<HTMLBodyState>>(HTMLBodyFeatureKey);

export const selectIsHTMLBodyLocked = createSelector(
    selectHTMLBodyState,
    (htmlBodyState: HTMLBodyState) => { return htmlBodyState.locked; }
);