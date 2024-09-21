import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { css } from '@emotion/css';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  _imgsUrls!: string[] | undefined;
  @Input({ required: true }) set imgsUrls(value: string[] | undefined) {
    if (value) {
      this._imgsUrls = value;
      this.minIndex = 0;
      this.maxIndex = this._imgsUrls.length - 1;
      this.updateAccessToButtonImages();
    }
  };

  get imgsUrls(): string[] | undefined {
    return this._imgsUrls;
  }

  imageIndex: number = 0;
  minIndex: number = 0;
  maxIndex: number = 0;
  translateClass: string = css`
  transform: translateX(calc(-${this.imageIndex} * 100%));
  `;
  canUsePreviousImageButton!: boolean;
  canUseNextImageButton!: boolean;

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
