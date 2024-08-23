import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/stay/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserPort {

    constructor() { }

    createUser(user: Partial<User>): Observable<User | undefined> {
        throw Error("createUser to implement.");
    }

    updateUser(id: string, updatedUser: Partial<User>): Observable<number> {
        throw Error("updateUser to implement.");
    }

    signin(email: string | null, password: string | null): Observable<User | undefined> {
        throw Error("getUser to implement.");
    }

    getUser(): Observable<User | undefined> {
        throw Error("getUser to implement.");
    }

    deleteUser(id: string): Observable<void> {
        throw Error("deleteUser to implement.");
    }
}