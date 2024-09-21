import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CityName, KingdomName } from '../../../hexagonal/domain/model/land/land.model';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';
import { SliderComponent } from "../../slider/slider.component";

@Component({
  selector: 'stay-card',
  standalone: true,
  imports: [CommonModule, PluralizePipe, SliderComponent],
  templateUrl: './stay-card.component.html',
  styleUrl: './stay-card.component.css'
})
export class StayCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) kingdom!: KingdomName;
  @Input({ required: true }) city!: CityName;
  @Input({ required: true }) pricePerNight!: number;
  @Input({ required: true }) ratings!: number;
  @Input({ required: true }) imgsUrls!: string[];
  @Input({ required: false }) distanceToOrigin!: number;
}