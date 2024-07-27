import { createActionGroup, emptyProps } from '@ngrx/store';

export const HTMLBodyActions = createActionGroup({
    source: 'HTMLBody Locker',
    events: {
        'Lock HTML Body': emptyProps(),
        'Unlock HTML Body': emptyProps()
    }
});