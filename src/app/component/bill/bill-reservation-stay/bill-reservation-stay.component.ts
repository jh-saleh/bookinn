import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { billingServiceFactory } from '../../../hexagonal/di-factories';
import { Stay } from '../../../hexagonal/domain/model/stay/stay.model';
import { BillingPort } from '../../../hexagonal/domain/port/billing.port';
import { StayPort } from '../../../hexagonal/domain/port/stay.port';
import { CalendarDate, CalendarDatesService } from '../../../service/calendar-dates.service';
import { AppState } from '../../../state/app.state';
import { StayActions } from '../../../state/stay/stay.actions';
import { selectStay } from '../../../state/stay/stay.selectors';

@Component({
  selector: 'bill-reservation-stay',
  standalone: true,
  imports: [CommonModule],
  providers: [{ provide: BillingPort, useFactory: billingServiceFactory }, CalendarDatesService],
  templateUrl: './bill-reservation-stay.component.html',
  styleUrls: ['./bill-reservation-stay.component.css', '../bill.css']
})
export class BillReservationStayComponent implements OnInit, OnDestroy {
  @Input({ required: true }) stayId!: string;
  @Input({ required: true }) startingDate: CalendarDate | undefined;
  @Input({ required: true }) endingDate: CalendarDate | undefined;
  @Input({ required: true }) nbOfGuests!: number;
  stay?: Stay;
  nbOfNights!: number;
  pricePerNight!: number;
  completeBillWithoutCharges!: number;
  bookInnFee!: number;
  VAT!: number;
  completeBill!: number;
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private billingService: BillingPort,
    private calendarDatesService: CalendarDatesService, private stayService: StayPort) { }

  ngOnInit(): void {
    if (this.startingDate && this.endingDate) {
      this.nbOfNights = this.calendarDatesService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
    }

    this.store.select(selectStay)
      .pipe(
        takeUntil(this.destroy$),
        filter(({ stay }) => !stay),
        switchMap(() => this.stayService.getStay(this.stayId).pipe(
          tap((stay) => this.store.dispatch(StayActions.setStay({ stay })))
        )),
      ).subscribe();

    this.store.select(selectStay)
      .pipe(
        takeUntil(this.destroy$),
        filter(({ stay }) => !!stay)
      )
      .subscribe(({ stay }) => {
        this.stay = stay;
        this.updateBillPrices(this.nbOfNights, this.nbOfGuests);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateBillPrices(nbOfNights: number | undefined, nbOfGuests: number) {
    if (nbOfNights) {
      this.billingService.getBillingForStay(this.stayId, nbOfNights, nbOfGuests).subscribe((billing) => {
        const { VAT, bookInnFee, completeBill, completeBillWithoutCharges, pricePerNight } = billing;
        this.pricePerNight = pricePerNight;
        this.completeBillWithoutCharges = completeBillWithoutCharges;
        this.bookInnFee = bookInnFee;
        this.VAT = VAT;
        this.completeBill = completeBill;
      });
    }
  }

}
