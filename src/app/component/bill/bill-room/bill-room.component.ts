import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { css } from '@emotion/css';
import { CalendarDate } from '../../../IoC/service/calendar-dates.service';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../../model/const';
import { Position } from '../../../model/position/position.model';
import { Guests, getTotalNbOfGuests } from '../../../model/stay/guest.model';
import { CalendarDateFormatPipe } from '../../../pipe/calendar-date-format.pipe';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';
import { CalendarComponent } from "../../calendar/calendar.component";
import { DateInputComponent } from "../../date-input/date-input.component";
import { GuestsComponent } from "../../guests/guests.component";
import { ModalComponent } from "../../windows/modal/modal.component";

@Component({
  selector: 'bill-room',
  standalone: true,
  imports: [CommonModule, ModalComponent, GuestsComponent, PluralizePipe, CalendarComponent, CalendarDateFormatPipe, DateInputComponent],
  templateUrl: './bill-room.component.html',
  styleUrl: './bill-room.component.css'
})
export class BillRoomComponent implements OnChanges {
  @Input({ required: true }) startingDate: CalendarDate | undefined;
  @Input({ required: true }) endingDate: CalendarDate | undefined;
  @Output() sendStartingDate = new EventEmitter<CalendarDate | undefined>();
  @Output() sendEndingDate = new EventEmitter<CalendarDate | undefined>();
  @Input({ required: true }) basePricePerNight: number | undefined;
  pricePerNight: number | undefined;
  @Input({ required: true }) maximumNbOfGuests: number = 1;
  private _initGuests: Guests = {
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
  @Input({ required: false }) set initGuests(value: Guests) {
    this._initGuests = value;
    this.nbOfGuests = getTotalNbOfGuests(this._initGuests);
  }
  get initGuests() {
    return this._initGuests;
  }
  nbOfGuests: number = 0;
  @Input({ required: true }) nbOfNights: number | undefined;
  completeBillWithoutCharges: number | undefined;
  @Input() cleaningFee: number | undefined;
  bookInnRate: number = 0.05;
  bookInnFee: number = 0;
  VATRate = 0.2;
  VAT: number = 0;
  completeBill: number = 0;
  @ViewChild("billGuestsSelection") billGuestsSelectionRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("calendarSelectionRef") calendarSelectionRef: ElementRef<HTMLDivElement> | undefined;
  isGuestsModalOpen: boolean = false;
  guestsPosition: Position = { top: 0, left: 0 };
  guestsModalWrapper: string = "";
  isCalendarOpen: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    const { nbOfNights } = changes;
    if (nbOfNights) {
      this.updateBillPrices(nbOfNights.currentValue, this.nbOfGuests);
    }
  }

  updateBillPrices(nbOfNights: number | undefined, nbOfGuests: number) {
    if (this.basePricePerNight && nbOfNights) {
      if (this.maximumNbOfGuests > 1) {
        this.pricePerNight = Math.ceil(this.basePricePerNight * (1 + ((nbOfGuests - 1) / (this.maximumNbOfGuests - 1))));
      } else {
        this.pricePerNight = this.basePricePerNight;
      }

      this.completeBillWithoutCharges = Math.ceil(this.pricePerNight * nbOfNights + (this.cleaningFee ?? 0));
      this.bookInnFee = Math.ceil(this.completeBillWithoutCharges * this.bookInnRate);
      this.VAT = Math.ceil(this.VATRate * (this.completeBillWithoutCharges + this.bookInnFee));
      this.completeBill = this.completeBillWithoutCharges + this.bookInnFee + this.VAT;
    }
  }

  openGuestsModal() {
    if (this.billGuestsSelectionRef) {
      const { height, width } = this.billGuestsSelectionRef.nativeElement.getBoundingClientRect();
      const padding = 20;
      this.guestsModalWrapper = css`
        z-index: 1;
        position: absolute;
        top: ${height + 5}px;
        left: 0px;
        width: ${width - padding * 2}px;
        box-shadow: var(--box-shadow);
        padding: ${padding}px;
        background-color: white;
        border-radius: var(--box-border-radius);
      `;
      this.isGuestsModalOpen = true;
    }
  }

  getNbOfGuests(guests: Guests) {
    this.nbOfGuests = getTotalNbOfGuests(guests);
    this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
  }

  @HostListener('document:click', ['$event.target']) onClick(target: Node | null) {
    if (this.billGuestsSelectionRef && !this.billGuestsSelectionRef.nativeElement.contains(target) && this.isGuestsModalOpen) {
      this.isGuestsModalOpen = false;
    }
    if (this.calendarSelectionRef && !this.calendarSelectionRef.nativeElement.contains(target) && this.isCalendarOpen) {
      this.isCalendarOpen = false;
    }
  }

  openCalendar() {
    this.isCalendarOpen = true;
  }

  getStartingDate(calendarDate: CalendarDate | undefined) {
    this.startingDate = calendarDate;
    this.sendStartingDate.emit(this.startingDate);
  }

  getEndingDate(calendarDate: CalendarDate | undefined) {
    this.endingDate = calendarDate;
    this.sendEndingDate.emit(this.endingDate);
  }
}
