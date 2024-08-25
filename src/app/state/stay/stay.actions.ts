import { createActionGroup, props } from '@ngrx/store';
import { Stay } from '../../hexagonal/domain/model/stay/stay.model';

export const StayActions = createActionGroup({
    source: 'Stay',
    events: {
        'setStay': props<{ stay: Stay | undefined }>(),
    }
});