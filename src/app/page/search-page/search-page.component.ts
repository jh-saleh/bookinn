import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { StayCardComponent } from '../../component/card/stay-card/stay-card.component';
import { FooterComponent } from "../../component/footer/footer.component";
import { MapComponent } from "../../component/map/map.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";
import { PaginationComponent } from "../../component/pagination/pagination.component";
import { SearchbarStartingStates } from '../../component/searchbar/desktop/desktop-searchbar.component';
import { stayServiceFactory } from '../../hexagonal/di-factories';
import { MAX_NB_ADULTS, MAX_NB_CHILDREN, MAX_NB_INFANTS, MAX_NB_PETS } from '../../hexagonal/domain/model/const';
import { getTotalNbOfGuests } from '../../hexagonal/domain/model/stay/guest.model';
import { Coordinates } from '../../hexagonal/domain/model/stay/location.model';
import { StayWithDistanceToOrigin } from '../../hexagonal/domain/model/stay/stay.model';
import { StayPort } from '../../hexagonal/domain/port/stay.port';
import { CalendarDate, CalendarDatesService } from '../../service/calendar-dates.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [DesktopNavbarComponent, FooterComponent, MapComponent, RouterModule, StayCardComponent, PaginationComponent],
  providers: [CalendarDatesService, { provide: StayPort, useFactory: stayServiceFactory }],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
  coordinates: Coordinates | undefined;
  queryParamStartDate: string | null = null;
  queryParamEndDate: string | null = null;
  startDate: CalendarDate | null = null;
  endDate: CalendarDate | null = null;
  paramLocation: string | null = null;
  paramType: string | null = null;
  queryParamNbAdults: number | null = null;
  queryParamNbChildren: number | null = null;
  queryParamNbInfants: number | null = null;
  queryParamNbPets: number | null = null;
  staysSearchResults: StayWithDistanceToOrigin[] = [];
  searchbarStartingState: SearchbarStartingStates | undefined;
  lastPage: number = 1;

  constructor(private route: ActivatedRoute, private calendarDatesService: CalendarDatesService, private stayService: StayPort) {

  }

  ngOnInit() {
    //Subscribing to paramMap and queryParamMap allows for updates when doing new requests on that page without having the need to reload the page
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(map(([params, queryParams]) => {
        this.paramLocation = params.get('location');
        this.paramType = params.get('type');
        this.queryParamEndDate = queryParams.get("endDate");
        if (this.queryParamEndDate) {
          this.endDate = this.calendarDatesService.convertStringToCalendarDate(this.queryParamEndDate, "-");
        }
        this.queryParamStartDate = queryParams.get("startDate");
        if (this.queryParamStartDate) {
          this.startDate = this.calendarDatesService.convertStringToCalendarDate(this.queryParamStartDate, "-");
        }
        this.queryParamNbAdults = queryParams.get("nbAdults") !== null ? Number(queryParams.get("nbAdults")) : null;
        this.queryParamNbChildren = queryParams.get("nbChildren") !== null ? Number(queryParams.get("nbChildren")) : null;
        this.queryParamNbInfants = queryParams.get("nbInfants") !== null ? Number(queryParams.get("nbInfants")) : null;
        this.queryParamNbPets = queryParams.get("nbPets") !== null ? Number(queryParams.get("nbPets")) : null;

      })).subscribe(() => {
        this.searchbarStartingState = {
          startingDate: this.startDate ?? undefined,
          endingDate: this.endDate ?? undefined,
          locationInput: this.paramLocation ?? "",
          guests: {
            adult: {
              nb: this.queryParamNbAdults ?? 0,
              maximum: MAX_NB_ADULTS,
            },
            child: {
              nb: this.queryParamNbChildren ?? 0,
              maximum: MAX_NB_CHILDREN,
            },
            infant: {
              nb: this.queryParamNbInfants ?? 0,
              maximum: MAX_NB_INFANTS,
            },
            pet: {
              nb: this.queryParamNbPets ?? 0,
              maximum: MAX_NB_PETS,
            }
          }
        }
        this.executeSearch();
      });
  }

  executeSearch(page: number = 1) {
    this.stayService.searchStays(this.paramLocation, getTotalNbOfGuests(this.searchbarStartingState?.guests), page)
      .subscribe((stays) => {
        this.lastPage = stays.lastPage;
        this.staysSearchResults = stays.stays
      });
  }

  setMapView(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }
}
