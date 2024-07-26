import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { css } from '@emotion/css';
import { CityName, KingdomName } from '../../model/land/land.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) kingdom!: KingdomName;
  @Input({ required: true }) city!: CityName;
  @Input({ required: true }) pricePerNight!: number;
  @Input({ required: true }) ratings!: number;
  @Input({ required: true }) imgsUrls!: string[];
  imageIndex: number = 0;
  minIndex: number = 0;
  maxIndex: number = 0;
  imageWidth: number = 300;
  translateClass: string = css`
  transform: translateX(calc(-${this.imageIndex} * ${this.imageWidth}px));
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
      transform: translateX(calc(-${this.imageIndex} * ${this.imageWidth}px));
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