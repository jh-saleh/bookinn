import { Injectable } from '@angular/core';
import { Host } from '../../model/inn/host.model';
import { hosts } from '../../stub/host.stub';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor() { }

  getHosts(): Host[] {
    return hosts;
  }

  getHost(id: string): Host {
    const hostIndex: number = hosts.findIndex((host) => host.id === id);
    if (hostIndex > -1) {
      return hosts[hostIndex];
    }
    throw Error("Host not found.");
  }
}
