import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthPort {
    login(email: string, password: string): Observable<boolean> {
        throw Error("login to implement.");
    }

    logout(): void {
        throw Error("logout to implement.");
    }

    signup(email: string, password: string, firstname: string, lastname: string): Observable<boolean> {
        throw Error("signup to implement.");
    }

    loadUserFromStorage(): string | undefined {
        throw Error("loadUserFromStorage to implement.");
    }

    isLoggedIn(): boolean {
        throw Error("isLoggedIn to implement.");
    }
}