import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarDate, CalendarDatesService } from '../../IoC/service/calendar-dates.service';
import { StaysService } from '../../IoC/service/inn.service';
import { BillRoomComponent } from "../../component/bill/bill-room/bill-room.component";
import { CalendarComponent } from "../../component/calendar/calendar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { GuidebookRoomComponent } from "../../component/guidebook/guidebook-room/guidebook-room.component";
import { ImagesViewerComponent } from "../../component/images-viewer/images-viewer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FullViewModalComponent } from "../../component/windows/full-view-classic-modal/full-view-modal.component";
import { AmenityType, AminityRow, extractAmenities } from '../../model/inn/amenity.model';
import { Stay } from '../../model/inn/stay.model';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { CamelToSentencePipe } from '../../pipe/cameltosentence.pipe';
import { PluralizePipe } from '../../pipe/pluralize.pipe';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CalendarComponent, FooterComponent,
    ImagesViewerComponent, FullViewModalComponent, BillRoomComponent, GuidebookRoomComponent,
    PluralizePipe, CamelToSentencePipe, FullViewModalComponent, CalendarDateFormatPipe],
  providers: [CalendarDatesService],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  roomId: string | null = null;
  inn!: Stay;
  amenities!: Partial<Record<AmenityType, AminityRow[]>>;
  amenitiesSummary: AminityRow[] = [];
  totalNbOfAmenities!: number;
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  nbDays: number | undefined;
  isAmenitiesModalOpen: boolean = false;

  constructor(private route: ActivatedRoute, private staysService: StaysService, private calendarDateService: CalendarDatesService) {

  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.inn = this.staysService.getStay(this.roomId ?? "");
    this.amenities = extractAmenities(this.inn.amenities ?? {});
    this.amenitiesSummary = this.extractAmenitiesSummary();
    this.totalNbOfAmenities = Object.keys(this.inn.amenities ?? {}).length;
  }

  extractAmenitiesSummary(): AminityRow[] {
    const output: AminityRow[] = [];
    for (const amenityType in AmenityType) {
      const amenity = this.amenities[amenityType as AmenityType];
      if (amenity !== undefined) {
        output.push({ amenity: amenity[0].amenity, icon: amenity[0].icon });
      }
    }
    return output;
  }

  getStartingDate(date: CalendarDate | undefined) {
    this.startingDate = date;
    if (this.startingDate && this.endingDate) {
      this.nbDays = this.calendarDateService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
    } else {
      this.nbDays = undefined;
    }
  }

  getEndingDate(date: CalendarDate | undefined) {
    this.endingDate = date;
    if (this.startingDate && this.endingDate) {
      this.nbDays = this.calendarDateService.getNbOfDaysBetweenDates(this.startingDate, this.endingDate);
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
