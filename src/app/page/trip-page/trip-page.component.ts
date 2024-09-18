import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { FooterComponent } from "../../component/footer/footer.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";
import { PhoneNavbarComponent } from "../../component/navbar/phone/phone-navbar.component";
import { tripServiceFactory } from '../../hexagonal/di-factories';
import { Trip } from '../../hexagonal/domain/model/trip/trip.model';
import { TripPort } from '../../hexagonal/domain/port/trip.port';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-trip-page',
  standalone: true,
  imports: [DesktopNavbarComponent, FooterComponent, RouterModule, CommonModule, CalendarDateFormatPipe, PhoneNavbarComponent],
  providers: [{ provide: TripPort, useFactory: tripServiceFactory }],
  templateUrl: './trip-page.component.html',
  styleUrl: './trip-page.component.css'
})
export class TripPageComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private store: Store<AppState>, private tripService: TripPort) { }

  ngOnInit(): void {

    this.tripService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }
}