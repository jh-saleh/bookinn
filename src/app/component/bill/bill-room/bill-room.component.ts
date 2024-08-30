import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { css } from '@emotion/css';
import { Store } from '@ngrx/store';
import { billingServiceFactory } from '../../../hexagonal/di-factories';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../../hexagonal/domain/model/const';
import { Position } from '../../../hexagonal/domain/model/position/position.model';
import { Guests, getTotalNbOfGuests } from '../../../hexagonal/domain/model/stay/guest.model';
import { BillingPort } from '../../../hexagonal/domain/port/billing.port';
import { CalendarDateFormatPipe } from '../../../pipe/calendar-date-format.pipe';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';
import { CalendarDate } from '../../../service/calendar-dates.service';
import { selectStay } from '../../../state/stay/stay.selectors';
import { CalendarComponent } from "../../calendar/calendar.component";
import { DateInputComponent } from "../../date-input/date-input.component";
import { GuestsComponent } from "../../guests/guests.component";
import { ModalComponent } from "../../windows/modal/modal.component";

@Component({
  selector: 'bill-room',
  standalone: true,
  imports: [CommonModule, ModalComponent, GuestsComponent, PluralizePipe, CalendarComponent, CalendarDateFormatPipe, DateInputComponent],
  providers: [CalendarDateFormatPipe, { provide: BillingPort, useFactory: billingServiceFactory }],
  templateUrl: './bill-room.component.html',
  styleUrls: ['./bill-room.component.css', '../bill.css']
})
export class BillRoomComponent implements OnInit, OnChanges {
  stayId!: string;
  @Input({ required: true }) startingDate: CalendarDate | undefined;
  @Input({ required: true }) endingDate: CalendarDate | undefined;
  @Output() sendStartingDate = new EventEmitter<CalendarDate | undefined>();
  @Output() sendEndingDate = new EventEmitter<CalendarDate | undefined>();
  maximumNbOfGuests: number = 1;
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
    this.guests = value;
    this.nbOfGuests = getTotalNbOfGuests(this._initGuests);
  }
  get initGuests() {
    return this._initGuests;
  }
  guests!: Guests;
  nbOfGuests: number = 0;
  @Input({ required: true }) nbOfNights: number | undefined;
  pricePerNight: number | undefined;
  completeBillWithoutCharges: number | undefined;
  cleaningFee: number = 0;
  bookInnFee: number = 0;
  VAT: number = 0;
  completeBill: number = 0;
  @ViewChild("billGuestsSelection") billGuestsSelectionRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("calendarSelectionRef") calendarSelectionRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("reservationButtonRef") reservationButtonRef: ElementRef<HTMLButtonElement> | undefined;
  isGuestsModalOpen: boolean = false;
  guestsPosition: Position = { top: 0, left: 0 };
  guestsModalWrapper: string = "";
  isCalendarOpen: boolean = false;
  constructor(private router: Router, private calendarDateFormatPipe: CalendarDateFormatPipe, private billingService: BillingPort, private store: Store) {

  }

  ngOnInit(): void {
    this.store.select(selectStay).subscribe(({ stay }) => {
      this.stayId = stay?.id ?? "";
      this.maximumNbOfGuests = stay?.maxNumberOfGuests ?? 1;
      this.cleaningFee = stay?.billing.fees.cleaningFee ?? 0;
      this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { nbOfNights } = changes;
    if (nbOfNights) {
      this.updateBillPrices(nbOfNights.currentValue, this.nbOfGuests);
    }
  }

  updateBillPrices(nbOfNights: number | undefined, nbOfGuests: number) {
    if (nbOfNights && this.stayId) {
      this.billingService.getBillingForStay(this.stayId, nbOfNights, nbOfGuests).subscribe((billing) => {
        if (billing) {
          const { VAT, bookInnFee, completeBill, completeBillWithoutCharges, pricePerNight } = billing;
          this.pricePerNight = pricePerNight;
          this.completeBillWithoutCharges = completeBillWithoutCharges;
          this.bookInnFee = bookInnFee;
          this.VAT = VAT;
          this.completeBill = completeBill;
        }
      });
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

  getGuests(guests: Guests) {
    this.guests = guests;
    this.nbOfGuests = getTotalNbOfGuests(guests);
    this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
  }

  @HostListener('document:click', ['$event.target']) onClick(target: Node | null) {
    if (this.reservationButtonRef && this.reservationButtonRef.nativeElement.contains(target)) {
      return;
    }

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

  reserveButtonHandler() {
    if (this.startingDate && this.endingDate && this.nbOfGuests > 0) {
      this.router.navigate(['/book/stays'], {
        queryParams: {
          productId: this.stayId,
          startDate: this.calendarDateFormatPipe.transform(this.startingDate, "MM-dd-yyyy"),
          endDate: this.calendarDateFormatPipe.transform(this.endingDate, "MM-dd-yyyy"),
          nbAdults: this.guests.adult.nb,
          nbChildren: this.guests.child.nb,
          nbInfants: this.guests.child.nb,
          nbPets: this.guests.pet.nb
        }
      });
    }

    if (!this.startingDate || !this.endingDate) {
      this.openCalendar();
      return;
    }

    if (this.nbOfGuests === 0) {
      this.openGuestsModal();
    }
  }
}
