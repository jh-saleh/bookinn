import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../hexagonal/domain/model/stay/user.model';

export const UserActions = createActionGroup({
    source: 'User',
    events: {
        'login': props<{ user: User }>(),
        'logout': emptyProps(),
        'setUser': props<{ user: User | undefined }>(),
    }
});