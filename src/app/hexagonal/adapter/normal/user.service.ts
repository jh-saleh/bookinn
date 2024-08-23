import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/model/stay/user.model';
import { UserPort } from '../../domain/port/user.port';

@Injectable({
    providedIn: 'root'
})
export class UserService implements UserPort {

    constructor() { }

    createUser(user: User): Observable<User | undefined> {
        throw Error("createUser to implement.");
    }

    updateUser(id: string, updatedUser: Partial<User>): Observable<number> {
        throw Error("updateUser to implement.");
    }

    signin(email: string | null, password: string | null): Observable<User | undefined> {
        throw Error("signin to implement.");
    }

    getUser(): Observable<User | undefined> {
        throw Error("getUser to implement.");
    }

    deleteUser(id: string): Observable<void> {
        throw Error("deleteUser to implement.");
    }
}