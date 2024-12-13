import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../../hexagonal/domain/model/const';
import { Guests, getTotalNbOfGuests } from '../../../hexagonal/domain/model/stay/guest.model';
import { CalendarDateFormatPipe } from '../../../pipe/calendar-date-format.pipe';
import { CamelToSentencePipe } from '../../../pipe/cameltosentence.pipe';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';
import { CalendarDate } from '../../../service/calendar-dates.service';
import { AppState } from '../../../state/app.state';
import { HTMLBodyActions } from '../../../state/htmlBody/htmlBody.actions';
import { AutocompletionComponent } from "../../autocompletion/autocompletion.component";
import { CalendarComponent } from "../../calendar/calendar.component";
import { GuestsComponent } from "../../guests/guests.component";

export interface SearchbarStartingStates {
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  locationInput: string;
  guests: Guests | undefined;
}

@Component({
  selector: 'phone-searchbar',
  standalone: true,
  imports: [CalendarComponent, CommonModule, GuestsComponent, PluralizePipe, CalendarDateFormatPipe, FormsModule, CamelToSentencePipe, AutocompletionComponent],
  providers: [CalendarDateFormatPipe],
  templateUrl: './phone-searchbar.component.html',
  styleUrls: ['./phone-searchbar.component.css', '../searchbar.css']
})
export class PhoneSearchbarComponent implements OnInit {
  readonly searchLabel = "Search";
  services: string[] = ["stays", "carriages", "monuments"];
  servicesId: string[] = this.services.map((service) => `${service.toLocaleLowerCase()}-service`);
  selectedService: number = 0;
  isSearchbarOpen: boolean = false;
  isCalendarOpen: boolean = false;
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  isGuestsOpen: boolean = false;
  guests: Guests | undefined = {
    adult: {
      nb: 0,
      maximum: MAX_NB_ADULTS,
    },
    child: {
      nb: 0,
      maximum: MAX_NB_CHILDREN
    },
    infant: {
      nb: 0,
      maximum: MAX_NB_INFANTS
    },
    pet: {
      nb: 0,
      maximum: MAX_NB_PETS
    }
  };
  @Input({ required: false }) set initGuests(value: Guests | undefined) {
    this.getGuests(value);
  }
  totalNbOfGuests: number = 0;
  @ViewChild("locationInputRef") locationInputRef: ElementRef<HTMLInputElement> | undefined;
  locationInput!: string;
  isLocationOpen: boolean = false;
  @Input({ required: false }) startingState: SearchbarStartingStates | undefined;

  constructor(private router: Router, private calendarDateFormatPipe: CalendarDateFormatPipe, private store: Store<AppState>) {

  }

  ngOnInit(): void {
    if (this.startingState) {
      const { startingDate, endingDate, locationInput, guests } = this.startingState;
      this.startingDate = startingDate;
      this.endingDate = endingDate;
      this.locationInput = locationInput;
      this.guests = guests;
    }
  }

  selectService(index: number) {
    this.selectedService = index;
  }

  focusLocationInput(locationInputRef: HTMLInputElement) {
    const locationSearch: string = locationInputRef.value;
    locationInputRef.focus();
    locationInputRef.setSelectionRange(locationSearch.length, locationSearch.length);
  }

  autocompletionOpenStatusHandler() {
    if (this.locationInput.length > 0) {
      this.isLocationOpen = true;
    }
  }

  openLocation() {
    this.isLocationOpen = true;
    this.isCalendarOpen = false;
    this.isGuestsOpen = false;
  }

  closeLocation() {
    this.isLocationOpen = false;
  }


  getLocationSuggestion(location: string) {
    this.locationInput = location;
    this.isLocationOpen = false;
  }

  closeCalendar() {
    this.isCalendarOpen = false;
  }

  openCalendar() {
    this.isLocationOpen = false;
    this.isCalendarOpen = true;
    this.isGuestsOpen = false;
  }

  setStartingDate(date: CalendarDate | undefined) {
    this.startingDate = date;
  }

  setEndingDate(date: CalendarDate | undefined) {
    this.endingDate = date;
  }

  closeGuests() {
    this.isGuestsOpen = false;
  }

  openGuests() {
    this.isLocationOpen = false;
    this.isCalendarOpen = false;
    this.isGuestsOpen = true;
  }

  getGuests(guests: Guests | undefined) {
    if (guests) {
      this.guests = { ...guests };
    } else {
      this.guests = undefined;
    }
    this.totalNbOfGuests = getTotalNbOfGuests(this.guests);
  }

  openSearchbar() {
    this.isSearchbarOpen = true;
    this.store.dispatch(HTMLBodyActions.lockHTMLBody());
  }

  closeSearchBar() {
    this.isSearchbarOpen = false;
    this.store.dispatch(HTMLBodyActions.unlockHTMLBody());
  }

  searchHandler() {
    this.router.navigate(["/s/", this.locationInput, this.services[this.selectedService]], {
      queryParams: {
        startDate: this.calendarDateFormatPipe.transform(this.startingDate, "MM-dd-yyy"),
        endDate: this.calendarDateFormatPipe.transform(this.endingDate, "MM-dd-yyy"),
        nbAdults: this.guests && this.guests.adult.nb > 0 ? this.guests.adult.nb : 1,
        nbChildren: this.guests?.child.nb === 0 ? undefined : this.guests?.child.nb,
        nbInfants: this.guests?.infant.nb === 0 ? undefined : this.guests?.infant.nb,
        nbPets: this.guests?.pet.nb === 0 ? undefined : this.guests?.pet.nb,
      }
    });
    this.closeSearchBar();
  }

  stopProgationHandler(event: MouseEvent) {
    event.stopPropagation();
  }

  clearAll() {
    this.locationInput = "";
    this.getGuests(undefined);
    this.setStartingDate(undefined);
    this.setEndingDate(undefined);
  }
}
