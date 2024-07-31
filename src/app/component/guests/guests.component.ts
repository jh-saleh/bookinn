import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";

export type GuestType = "adult" | "child" | "infant" | "pet"
interface GuestData {
  nb: number;
  maximum: number;
  minimum?: number;
}
export type Guests = Record<GuestType, GuestData>;

@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.css'
})
export class GuestsComponent {
  guests: Guests = {
    adult: {
      nb: 0,
      maximum: 4,
      minimum: 0,
    },
    child: {
      nb: 0,
      maximum: 4,
    },
    infant: {
      nb: 0,
      maximum: 2
    },
    pet: {
      nb: 0,
      maximum: 2
    }
  }
  @Output() getGuests = new EventEmitter<Guests>();
  @Input() maximumNbOfGuests: number | undefined;
  blockIncreaseGuestsAction: boolean = false;

  getTotalNbOfGuests(): number {
    return Object.values(this.guests).map((value) => value.nb).reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  sendGuests(guest: GuestType, counter: number) {
    this.guests[guest].nb = counter;
    if (this.maximumNbOfGuests && this.maximumNbOfGuests === this.getTotalNbOfGuests()) {
      this.blockIncreaseGuestsAction = true;
    } else {
      this.blockIncreaseGuestsAction = false;
    }
    this.getGuests.emit(this.guests);
  }
}
