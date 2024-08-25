import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, filter, of, switchMap, takeUntil, tap } from 'rxjs';
import { BillRoomComponent } from "../../component/bill/bill-room/bill-room.component";
import { CalendarComponent } from "../../component/calendar/calendar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { GuidebookRoomComponent } from "../../component/guidebook/guidebook-room/guidebook-room.component";
import { HostRoomComponent } from "../../component/host/host-room.component";
import { ImagesViewerComponent } from "../../component/images-viewer/images-viewer.component";
import { MapComponent } from '../../component/map/map.component';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FullViewModalComponent } from "../../component/windows/full-view-classic-modal/full-view-modal.component";
import { hostServiceFactory, stayServiceFactory } from '../../hexagonal/di-factories';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../hexagonal/domain/model/const';
import { AmenityType, AminityRow, AminitySummaryRow, extractAmenitiesData } from '../../hexagonal/domain/model/stay/amenity.model';
import { Guests } from '../../hexagonal/domain/model/stay/guest.model';
import { Host } from '../../hexagonal/domain/model/stay/host.model';
import { Stay } from '../../hexagonal/domain/model/stay/stay.model';
import { HostPort } from '../../hexagonal/domain/port/host.port';
import { StayPort } from '../../hexagonal/domain/port/stay.port';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { CamelToSentencePipe } from '../../pipe/cameltosentence.pipe';
import { NegationPipe } from '../../pipe/negation.pipe';
import { PluralizePipe } from '../../pipe/pluralize.pipe';
import { CalendarDate, CalendarDatesService } from '../../service/calendar-dates.service';
import { StayActions } from '../../state/stay/stay.actions';
import { selectStay } from '../../state/stay/stay.selectors';

@Component({
  selector: 'room-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CalendarComponent, FooterComponent,
    ImagesViewerComponent, FullViewModalComponent, BillRoomComponent, GuidebookRoomComponent,
    PluralizePipe, CamelToSentencePipe, CalendarDateFormatPipe, HostRoomComponent, NegationPipe,
    MapComponent],
  providers: [CalendarDatesService, { provide: HostPort, useFactory: hostServiceFactory }, { provide: StayPort, useFactory: stayServiceFactory }],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.css'
})
export class RoomPageComponent implements OnInit, OnDestroy {
  stay!: Stay;
  private destroy$ = new Subject<void>();
  host!: Host;
  amenities!: Partial<Record<AmenityType, AminityRow[]>>;
  amenitiesSummary: AminitySummaryRow[] = [];
  totalNbOfAmenities!: number;
  isThereNotIncludedAmenities!: boolean;
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  nbDays: number | undefined;
  isAmenitiesModalOpen: boolean = false;
  paramRoomId: string | null = null;
  queryParamGuests!: Guests;

  constructor(private route: ActivatedRoute, private stayService: StayPort, private hostService: HostPort,
    private calendarDatesService: CalendarDatesService, private store: Store) {

  }

  ngOnInit(): void {
    this.paramRoomId = this.route.snapshot.paramMap.get('id');
    this.store.select(selectStay)
      .pipe(
        takeUntil(this.destroy$),
        filter(({ stay }) => !stay),
        switchMap(() => this.stayService.getStay(this.paramRoomId ?? "").pipe(
          tap((stay) => this.store.dispatch(StayActions.setStay({ stay })))
        )),
      ).subscribe();

    this.store.select(selectStay)
      .pipe(
        takeUntil(this.destroy$),
        filter(({ stay }) => !!stay),
        switchMap(({ stay }) => combineLatest([of(stay), this.hostService.getHost(stay?.hostId ?? "")]).pipe(
          tap(([_stay, host]) => this.host = host)
        ))
      )
      .subscribe(([stay]) => {
        if (stay) {
          this.stay = stay;
        }
      });

    this.amenities = extractAmenitiesData(this.stay?.amenities ?? {});
    this.amenitiesSummary = this.extractAmenitiesSummary();
    this.isThereNotIncludedAmenities = this.amenities[AmenityType.NotIncluded] ? this.amenities[AmenityType.NotIncluded].length > 0 : false;
    this.totalNbOfAmenities = Object.keys(this.stay?.amenities ?? {}).length;
    const queryParamEndDate = this.route.snapshot.queryParamMap.get("endDate");
    if (queryParamEndDate) {
      this.getEndingDate(this.calendarDatesService.convertStringToCalendarDate(queryParamEndDate, "-"));
    }
    const queryParamStartDate = this.route.snapshot.queryParamMap.get("startDate");
    if (queryParamStartDate) {
      this.getStartingDate(this.calendarDatesService.convertStringToCalendarDate(queryParamStartDate, "-"));
    }
    const queryParamNbAdults: string | null = this.route.snapshot.queryParamMap.get("nbAdults");
    const queryParamNbChildren: string | null = this.route.snapshot.queryParamMap.get("nbChildren");
    const queryParamNbInfants: string | null = this.route.snapshot.queryParamMap.get("nbInfants");
    const queryParamNbPets: string | null = this.route.snapshot.queryParamMap.get("nbPets");
    if (queryParamNbAdults || queryParamNbChildren || queryParamNbInfants || queryParamNbPets) {
      this.queryParamGuests = {
        adult: {
          nb: queryParamNbAdults ? Number(queryParamNbAdults) : 0,
          maximum: MAX_NB_ADULTS,
        },
        child: {
          nb: queryParamNbChildren ? Number(queryParamNbChildren) : 0,
          maximum: MAX_NB_CHILDREN
        },
        infant: {
          nb: queryParamNbInfants ? Number(queryParamNbInfants) : 0,
          maximum: MAX_NB_INFANTS
        },
        pet: {
          nb: queryParamNbPets ? Number(queryParamNbPets) : 0,
          maximum: MAX_NB_PETS
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  extractAmenitiesSummary(): AminitySummaryRow[] {
    const output: AminitySummaryRow[] = [];
    for (const amenityType in AmenityType) {
      const amenity = this.amenities[amenityType as AmenityType];
      if (amenity !== undefined) {
        output.push({ ...amenity[0], included: (amenityType as AmenityType) !== AmenityType.NotIncluded });
      }
    }
    return output;
  }

  getStartingDate(date: CalendarDate | undefined) {
    this.startingDate = date;
    if (this.startingDate && this.endingDate) {
      this.nbDays = this.calendarDatesService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
    } else {
      this.nbDays = undefined;
    }
  }

  getEndingDate(date: CalendarDate | undefined) {
    this.endingDate = date;
    if (this.startingDate && this.endingDate) {
      this.nbDays = this.calendarDatesService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
    } else {
      this.nbDays = undefined;
    }
  }

  openAmenitiesModal() {
    this.isAmenitiesModalOpen = true;
  }

  closeAmenitiesModal() {
    this.isAmenitiesModalOpen = false;
  }
}
