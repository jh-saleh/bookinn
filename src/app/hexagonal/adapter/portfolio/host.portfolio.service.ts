import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { hosts } from '../../../stub/host.stub';
import { Host } from '../../domain/model/stay/host.model';
import { HostPort } from '../../domain/port/host.port';

@Injectable({
  providedIn: 'root'
})
export class HostPortfolioService implements HostPort {

  getHost(id: string): Observable<Host> {
    const hostIndex: number = hosts.findIndex((host) => host.id === id);
    if (hostIndex > -1) {
      return of(hosts[hostIndex]);
    }
    throw Error("Host not found.");
  }

  getHosts(): Observable<Host[]> {
    return of(hosts);
  }
}