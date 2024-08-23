import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LOCAL_STORAGE_USER_KEY } from "../../domain/model/const";
import { AuthPort } from "../../domain/port/auth.port";

@Injectable({
    providedIn: 'root'
})
export class AuthPortfolioService implements AuthPort {

    private generateFakeToken(email: string): string {
        const fakePayload = {
            email: email,
            exp: Date.now() + (10 * 60 * 1000), // Expire dans 1 minute
        };
        return btoa(JSON.stringify(fakePayload));
    }

    private verifyFakeToken(token: string): boolean {
        const payload = JSON.parse(atob(token));
        return payload.exp > Date.now();
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        return token !== null && this.verifyFakeToken(token);
    }

    login(email: string, password: string): Observable<boolean> {
        if (email && password) {
            const token = this.generateFakeToken(email);
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, token);
            return of(true);
        }
        return of(false);
    }

    logout(): void {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    }

    signup(email: string, password: string, firstname: string, lastname: string): Observable<boolean> {
        throw Error("signup to implement.");
    }

    loadUserFromStorage(): string | undefined {
        try {
            const user = JSON.parse(atob(localStorage.getItem(LOCAL_STORAGE_USER_KEY) ?? ""));
            // API locale pour avoir l'objet complet 
            return user.email;
        } catch {
            return undefined;
        }
    }
}