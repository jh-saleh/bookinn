import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Host } from "../model/stay/host.model";

@Injectable({
    providedIn: 'root'
})
export class HostPort {
    getHost(id: string): Observable<Host> {
        throw Error("getHost to implement.");
    }

    getHosts(): Observable<Host[]> {
        throw Error("getHosts to implement.");
    }
}