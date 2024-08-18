import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CalendarDate, CalendarDatesService } from '../../IoC/service/calendar-dates.service';
import { StaysService } from '../../IoC/service/stay.service';
import { RoomCardComponent } from "../../component/card/room-card/room-card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { MapComponent } from "../../component/map/map.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Coordinates } from '../../model/inn/location.model';
import { Stay } from '../../model/inn/stay.model';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MapComponent, RouterModule, RoomCardComponent],
  providers: [CalendarDatesService, StaysService],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
  coordinates: Coordinates | undefined;
  startDate: CalendarDate | null = null;
  endDate: CalendarDate | null = null;
  nbGuests: number | null = null;
  location: string | null = null;
  type: string | null = null;
  staysSearchResults: Stay[] = [];

  constructor(private route: ActivatedRoute, private calendarDatesService: CalendarDatesService, private stayService: StaysService) {

  }

  ngOnInit() {
    //Subscribing to paramMap and queryParamMap allows for updates when doing new requests on that page without having the need to reload the page
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(map(([params, queryParams]) => {
        this.location = params.get('location');
        this.type = params.get('type');
        this.nbGuests = queryParams.get("nbGuests") !== null ? Number(queryParams.get("nbGuests")) : null;
        const stringEndDate = queryParams.get("endDate");
        if (stringEndDate) {
          this.endDate = this.calendarDatesService.convertStringToCalendarDate(stringEndDate, "-");
        }
        const stringStartDate = queryParams.get("startDate");
        if (stringStartDate) {
          this.startDate = this.calendarDatesService.convertStringToCalendarDate(stringStartDate, "-");
        }
      })).subscribe(() => {
        this.executeSearch();
      })
  }

  executeSearch() {
    this.staysSearchResults = this.stayService.searchStays(this.location, this.nbGuests);
  }
}
