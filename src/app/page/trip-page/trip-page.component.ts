import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { tripServiceFactory } from '../../hexagonal/di-factories';
import { Trip } from '../../hexagonal/domain/model/trip/trip.model';
import { TripPort } from '../../hexagonal/domain/port/trip.port';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';

@Component({
  selector: 'app-trip-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, CommonModule, CalendarDateFormatPipe],
  providers: [{ provide: TripPort, useFactory: tripServiceFactory }],
  templateUrl: './trip-page.component.html',
  styleUrl: './trip-page.component.css'
})
export class TripPageComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private store: Store, private tripService: TripPort) { }

  ngOnInit(): void {

    this.tripService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }
}