import { Injectable } from '@angular/core';
import { Observable, from, of, switchMap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../domain/model/stay/user.model';
import { AuthPort } from '../../domain/port/auth.port';
import { UserPort } from '../../domain/port/user.port';
import { MockDatabasePortfolioService } from './mock-database.portfolio.service';

@Injectable({
    providedIn: 'root',
})
export class UserPortfolioService implements UserPort {

    constructor(private authService: AuthPort, private mockDatabase: MockDatabasePortfolioService) {

    }

    createUser(user: { email: string, password: string, firstname: string, lastname: string }): Observable<User | undefined> {
        return from(this.mockDatabase.user.add({ id: uuidv4(), ...user })).pipe(switchMap(() => this.getUser()));
    }

    signin(email: string | null, password: string | null): Observable<User | undefined> {
        if (email && password) {
            return from(this.mockDatabase.user.where("email").equals(email).and(user => user.password === password).first());
        }
        return of(undefined);
    }

    getUser(): Observable<User | undefined> {
        const email = this.authService.loadUserFromStorage();
        if (email) {
            return from(this.mockDatabase.user.where("email").equals(email).first());
        }
        return of(undefined);
    }

    updateUser(id: string, updatedUser: Partial<User>): Observable<number> {
        return from(this.mockDatabase.user.update(id, updatedUser));
    }

    deleteUser(id: string): Observable<void> {
        return from(this.mockDatabase.user.delete(id));
    }
}