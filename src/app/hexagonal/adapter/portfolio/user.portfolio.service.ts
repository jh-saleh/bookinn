import { Injectable } from '@angular/core';
import Dexie, { Table } from "dexie";
import { Observable, from, of, switchMap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { User, UserApi } from '../../domain/model/stay/user.model';
import { AuthPort } from '../../domain/port/auth.port';
import { UserPort } from '../../domain/port/user.port';

@Injectable({
    providedIn: 'root',
})
export class UserPortfolioService extends Dexie implements UserPort {
    user!: Table<UserApi, string>;

    constructor(private authService: AuthPort) {
        super('BookInnDB');
        this.version(1).stores({
            user: 'id, userId, email, firstname, lastname',
        });

        this.user = this.table('user');
    }

    createUser(user: { email: string, password: string, firstname: string, lastname: string }): Observable<User | undefined> {
        return from(this.user.add({ id: uuidv4(), ...user })).pipe(switchMap(() => this.getUser()));
    }

    signin(email: string | null, password: string | null): Observable<User | undefined> {
        if (email && password) {
            return from(this.user.where("email").equals(email).and(user => user.password === password).first());
        }
        return of(undefined);
    }

    getUser(): Observable<User | undefined> {
        const email = this.authService.loadUserFromStorage();
        if (email) {
            return from(this.user.where("email").equals(email).first());
        }
        return of(undefined);
    }

    updateUser(id: string, updatedUser: Partial<User>): Observable<number> {
        return from(this.user.update(id, updatedUser));
    }

    deleteUser(id: string): Observable<void> {
        return from(this.user.delete(id));
    }
}