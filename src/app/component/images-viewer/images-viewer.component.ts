import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { css } from '@emotion/css';

@Component({
  selector: 'images-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-viewer.component.html',
  styleUrl: './images-viewer.component.css'
})
export class ImagesViewerComponent {
  firstUrl!: string;
  urls!: string[];
  @Input({ required: true }) set imgsUrls(value: string[]) {
    this.firstUrl = value[0];
    this.urls = value.slice(1, value.length === 5 ? 5 : value.length > 3 ? 3 : value.length);
    this.updateClasses();
  };
  imagesViewerWrapperClass: string = css``;
  imagesViewerClass: string = css``;

  updateClasses() {
    if (this.urls.length + 1 === 5) {
      this.imagesViewerWrapperClass = css`
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 29.5dvw);
      gap: 0.5dvw;
      > img {
        width: 100%;
        border-top-left-radius: var(--box-border-radius);
        border-bottom-left-radius: var(--box-border-radius);
        object-fit: cover;
        object-position: center;
      }
      `;
      this.imagesViewerClass = css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 14.75dvw);
      gap: 0.5dvw;
      img {
        height: 14.5dvw;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
      img:nth-child(2) {
        border-top-right-radius: var(--box-border-radius);
      }
      img:nth-child(4) {
        border-bottom-right-radius: var(--box-border-radius);
      }
    `;
    } else if (this.urls.length + 1 === 3) {
      this.imagesViewerWrapperClass = css`
      height: 100%;
      display: grid;
      grid-template-columns: 39dvw 20dvw;
      gap: 1dvw;
      > img {
        height: 29dvw;
        width: 39dvw;
        border-top-left-radius: var(--box-border-radius);
        border-bottom-left-radius: var(--box-border-radius);
        object-fit: cover;
        object-position: center;
      }
      `;
      this.imagesViewerClass = css`
      width: 100%;
      display: grid;
      grid-template-rows: repeat(2, 14dvw);
      gap: 1dvw;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      img:nth-child(1) {
        border-top-right-radius: var(--box-border-radius);
      }
      img:nth-child(2) {
        border-bottom-right-radius: var(--box-border-radius);
      }
    `;
    } else if (this.urls.length + 1 === 2) {
      this.imagesViewerWrapperClass = css`
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 29.5dvw);
      gap: 1dvw;
      > img {
        height: 29dvw;
        border-top-left-radius: var(--box-border-radius);
        border-bottom-left-radius: var(--box-border-radius);
        object-fit: cover;
        object-position: center;
      }
      `;
      this.imagesViewerClass = css`
      width: 100%;
      img {
        width: 100%;
        height: 29dvw;
        object-fit: cover;
        object-position: center;
      }
      img:nth-child(1) {
        border-top-right-radius: var(--box-border-radius);
        border-bottom-right-radius: var(--box-border-radius);
      }
    `;
    } else {
      this.imagesViewerWrapperClass = css`
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 29dvw);
      gap: 1dvw;
      > img {
        height: 29dvw;
        border-radius: var(--box-border-radius);
        object-fit: cover;
        object-position: center;
      }
      `;
    }
  }
}
