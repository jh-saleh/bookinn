import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { css } from '@emotion/css';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { billingServiceFactory } from '../../../hexagonal/di-factories';
import { INIT_GUESTS } from '../../../hexagonal/domain/model/const';
import { Position } from '../../../hexagonal/domain/model/position/position.model';
import { Guests, getTotalNbOfGuests } from '../../../hexagonal/domain/model/stay/guest.model';
import { BillingPort } from '../../../hexagonal/domain/port/billing.port';
import { CalendarDateFormatPipe } from '../../../pipe/calendar-date-format.pipe';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';
import { CalendarDate, CalendarDatesService } from '../../../service/calendar-dates.service';
import { AppState } from '../../../state/app.state';
import { BillInformationActions } from '../../../state/bill-information/bill-information.actions';
import { selectBillInformation } from '../../../state/bill-information/bill-information.selectors';
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
export class BillRoomComponent implements OnInit, OnDestroy {
  stayId!: string;
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  maximumNbOfGuests: number = 1;
  guests: Guests | undefined;
  nbOfGuests: number = 0;
  nbOfNights: number | undefined;
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
  private destroy$ = new Subject<void>();
  constructor(private router: Router, private calendarDateFormatPipe: CalendarDateFormatPipe,
    private billingService: BillingPort, private calendarDatesService: CalendarDatesService, private store: Store<AppState>) {

  }

  ngOnInit(): void {
    combineLatest([this.store.select(selectStay), this.store.select(selectBillInformation)])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([{ stay }, { billInformation }]) => {
        this.stayId = stay?.id ?? "";
        this.maximumNbOfGuests = stay?.maxNumberOfGuests ?? 1;
        this.cleaningFee = stay?.billing.fees.cleaningFee ?? 0;
        this.updateBillPrices(this.nbOfNights, this.nbOfGuests);

        this.startingDate = billInformation?.startingDate;
        this.endingDate = billInformation?.endingDate;
        this.guests = billInformation?.guests !== undefined ? billInformation?.guests : JSON.parse(JSON.stringify(INIT_GUESTS));
        this.nbOfGuests = getTotalNbOfGuests(this.guests);
        if (this.startingDate && this.endingDate) {
          this.nbOfNights = this.calendarDatesService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
        }
        this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  getGuests(guests: Guests | undefined) {
    this.guests = guests !== undefined ? { ...guests } : undefined;
    this.nbOfGuests = getTotalNbOfGuests(guests);
    this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
    this.store.dispatch(BillInformationActions.updateGuests({ guests: this.guests }));
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
    this.store.dispatch(BillInformationActions.updateStartingDate({ startingDate: this.startingDate }));
  }

  getEndingDate(calendarDate: CalendarDate | undefined) {
    this.endingDate = calendarDate;
    this.store.dispatch(BillInformationActions.updateEndingDate({ endingDate: this.endingDate }));
  }

  reserveButtonHandler() {
    if (this.startingDate && this.endingDate && this.guests && this.nbOfGuests > 0) {
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
