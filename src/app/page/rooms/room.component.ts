import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaysService } from '../../IoC/service/inn.service';
import { CalendarComponent } from "../../component/calendar/calendar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { ImagesViewerComponent } from "../../component/images-viewer/images-viewer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Amenity, AmenityType, Stay, amenitiesLink, extractAmenities } from '../../model/inn/stay.model';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [NavbarComponent, CalendarComponent, FooterComponent, ImagesViewerComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  roomId: string | null = null;
  inn!: Stay;
  amenities!: Partial<Record<AmenityType, Amenity[]>>;
  amenitiesSummary: { amenity: Amenity, icon: string }[] = [];
  totalNbOfAmenities!: number;

  constructor(private route: ActivatedRoute, private staysService: StaysService) {

  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.inn = this.staysService.getStay(this.roomId ?? "");
    this.amenities = extractAmenities(this.inn.amenities ?? {});
    this.amenitiesSummary = this.extractAmenitiesSummary();
    this.totalNbOfAmenities = Object.keys(this.inn.amenities ?? {}).length;
  }

  extractAmenitiesSummary(): { amenity: Amenity, icon: string }[] {
    const output: { amenity: Amenity, icon: string }[] = [];
    for (const amenityType in AmenityType) {
      const amenity = this.amenities[amenityType as AmenityType];
      if (amenity !== undefined) {
        output.push({ amenity: amenity[0], icon: amenitiesLink[amenity[0]].icon });
      }
    }

    return output;
  }
}
