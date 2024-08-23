import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LOCAL_STORAGE_USER_KEY } from "../../domain/model/const";
import { AuthPort } from "../../domain/port/auth.port";

@Injectable({
    providedIn: 'root'
})
export class AuthService implements AuthPort {
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
        try {
            const user = JSON.parse(atob(localStorage.getItem(LOCAL_STORAGE_USER_KEY) ?? ""));
            // API locale pour avoir l'objet complet 
            return user.email;
        } catch {
            return undefined;
        }
    }
}