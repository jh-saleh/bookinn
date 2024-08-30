import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../hexagonal/domain/model/const';
import { GuestType, Guests } from '../../hexagonal/domain/model/stay/guest.model';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'guests',
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
      this.shouldBlockIncreaseGuestsAction();
    }
  }
  @Output() getGuests = new EventEmitter<Guests>();
  @Input() maximumNbOfGuests: number | undefined = undefined;
  blockIncreaseGuestsAction: boolean = false;

  getTotalNbOfGuests(): number {
    return Object.values(this.guests).map((value) => value.nb).reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  shouldBlockIncreaseGuestsAction() {
    if (this.maximumNbOfGuests && this.maximumNbOfGuests === this.getTotalNbOfGuests()) {
      this.blockIncreaseGuestsAction = true;
    } else {
      this.blockIncreaseGuestsAction = false;
    }
  }

  sendGuests(guest: GuestType, counter: number) {
    this.guests[guest].nb = counter;
    if (this.guests["adult"].nb === 0 && (this.guests["child"].nb > 0 || this.guests["infant"].nb > 0 || this.guests["pet"].nb > 0)) {
      this.guests['adult'].nb = 1;
      this.guests['adult'].minimum = 1;
    }
    this.shouldBlockIncreaseGuestsAction();
    this.getGuests.emit(this.guests);
  }
}
