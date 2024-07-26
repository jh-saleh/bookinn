import { Injectable } from '@angular/core';
import { Stay } from '../../model/inn/stay.model';
import { stays } from '../../model/inn/stay.stub';

@Injectable({
  providedIn: 'root'
})
export class StaysService {

  constructor() { }

  getStays(): Stay[] {
    return stays;
  }

  getStay(id: string): Stay {
    const innIndex: number = stays.findIndex((inn) => inn.id === id);
    if (innIndex > -1) {
      return stays[innIndex];
    }
    throw Error("Inn not found.");
  }
}