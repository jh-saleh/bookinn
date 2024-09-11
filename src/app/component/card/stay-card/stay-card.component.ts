import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { css } from '@emotion/css';
import { CityName, KingdomName } from '../../../hexagonal/domain/model/land/land.model';
import { PluralizePipe } from '../../../pipe/pluralize.pipe';

@Component({
  selector: 'stay-card',
  standalone: true,
  imports: [CommonModule, PluralizePipe],
  templateUrl: './stay-card.component.html',
  styleUrl: './stay-card.component.css'
})
export class StayCardComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) kingdom!: KingdomName;
  @Input({ required: true }) city!: CityName;
  @Input({ required: true }) pricePerNight!: number;
  @Input({ required: true }) ratings!: number;
  @Input({ required: true }) imgsUrls!: string[];
  @Input({ required: false }) distanceToOrigin!: number;
  imageIndex: number = 0;
  minIndex: number = 0;
  maxIndex: number = 0;
  translateClass: string = css`
  transform: translateX(calc(-${this.imageIndex} * 100%));
  `;
  canUsePreviousImageButton!: boolean;
  canUseNextImageButton!: boolean;

  ngOnInit(): void {
    this.minIndex = 0;
    this.maxIndex = this.imgsUrls.length - 1;
    this.updateAccessToButtonImages();
  }

  updateAccessToButtonImages() {
    this.canUsePreviousImageButton = this.minIndex < this.imageIndex;
    this.canUseNextImageButton = this.imageIndex < this.maxIndex;
  }

  updateTranslateClass() {
    this.translateClass = css`
      transform: translateX(calc(-${this.imageIndex} * 100%));
      transition: transform 0.3s ease-in-out;
  `;
  }

  goToPreviousImage(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (this.imageIndex > this.minIndex) {
      this.imageIndex--;
      this.updateTranslateClass();
      this.updateAccessToButtonImages();
    }
  }

  goToNextImage(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (this.imageIndex < this.maxIndex) {
      this.imageIndex++;
      this.updateTranslateClass();
      this.updateAccessToButtonImages();
    }
  }
}