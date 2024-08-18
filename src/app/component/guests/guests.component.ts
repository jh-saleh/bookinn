import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../model/const';
import { GuestType, Guests } from '../../model/stay/guest.model';
import { CounterComponent } from "../counter/counter.component";

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
      maximum: MAX_NB_ADULTS,
      minimum: 0,
    },
    child: {
      nb: 0,
      maximum: MAX_NB_CHILDREN,
    },
    infant: {
      nb: 0,
      maximum: MAX_NB_INFANTS
    },
    pet: {
      nb: 0,
      maximum: MAX_NB_PETS
    }
  }
  @Input({ required: false }) set initGuests(value: Guests | undefined) {
    if (value) {
      this.guests = value;
    }
  }
  @Output() getGuests = new EventEmitter<Guests>();
  @Input() maximumNbOfGuests: number | undefined = undefined;
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
