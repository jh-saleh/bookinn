import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BillInformationState } from './bill-information.reducer';

export const BillInformationFeatureKey = 'BillInformation';
const selectBillInformationState = createFeatureSelector<Readonly<BillInformationState>>(BillInformationFeatureKey);

export const selectBillInformation = createSelector(
    selectBillInformationState,
    (billInformationState: BillInformationState) => { return billInformationState; }
);