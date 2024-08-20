import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from '../../domain/model/stay/host.model';
import { HostPort } from '../../domain/port/host.port';

@Injectable({
  providedIn: 'root'
})
export class HostService implements HostPort {

  constructor() { }

  getHost(id: string): Observable<Host> {
    throw Error("getHost to implement.");
  }

  getHosts(): Observable<Host[]> {
    throw Error("getHosts to implement.");
  }
}
