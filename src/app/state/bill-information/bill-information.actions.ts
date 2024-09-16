import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Guests } from '../../hexagonal/domain/model/stay/guest.model';
import { CalendarDate } from '../../service/calendar-dates.service';
import { BillInformation } from './bill-information.reducer';

export const BillInformationActions = createActionGroup({
    source: 'BillInformation',
    events: {
        'updateBillInformation': props<{ billInformation: BillInformation }>(),
        'updateStartingDate': props<{ startingDate: CalendarDate | undefined }>(),
        'updateEndingDate': props<{ endingDate: CalendarDate | undefined }>(),
        'updateGuests': props<{ guests: Guests | undefined }>(),
        'resetBillInformation': emptyProps(),
    }
});