import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'images-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-viewer.component.html',
  styleUrl: './images-viewer.component.css'
})
export class ImagesViewerComponent implements OnInit {
  firstUrl!: string;
  urls!: string[];
  @Input({ required: true }) imgsUrls!: string[];

  ngOnInit(): void {
    this.firstUrl = this.imgsUrls[0];
    this.urls = this.imgsUrls.slice(1, this.imgsUrls.length === 5 ? 5 : this.imgsUrls.length > 3 ? 3 : this.imgsUrls.length);
  }
}