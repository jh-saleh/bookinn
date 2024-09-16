import { Guests } from "./stay/guest.model";

export const LOCAL_STORAGE_USER_KEY = 'auth_token';
export const MAX_NB_ADULTS = 4;
export const MAX_NB_CHILDREN = 4;
export const MAX_NB_INFANTS = 2;
export const MAX_NB_PETS = 2;
export const INIT_GUESTS: Guests = {
    adult: {
        nb: 1,
        maximum: MAX_NB_ADULTS,
        minimum: 1,
    },
    child: {
        nb: 0,
        maximum: MAX_NB_CHILDREN,
    },
    infant: {
        nb: 0,
        maximum: MAX_NB_INFANTS
    },
    pet: {
        nb: 0,
        maximum: MAX_NB_PETS
    }
};