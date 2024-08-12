import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { css } from '@emotion/css';
import { LeafletHelper } from '../../IoC/service/leaflet.helper';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  imports: [CommonModule],
  providers: [LeafletHelper],
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map: any;
  lat = 52.52437;
  lng = 13.41053;
  mapWrapper: string = css`
  height: 400px;
  width: 100%;
  `;

  constructor(
    private leafletHelper: LeafletHelper,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  ngOnInit() {
    // check if app is running in browser and then lazyload leaflet because of SSR
    if (this._platformId === 'browser') {
      this.leafletHelper.loadLeaflet().then((leafletLib) => {
        this.initMap(leafletLib);
      })
    }
  }

  initMap(lib: any): void {
    this.map = lib.map('map', {
      layers: [
        lib.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 21,
          maxNativeZoom: 19,
          minZoom: 3,
          attribution: '...',
          noWrap: true,
        }),
      ],
      zoom: 10,
      center: lib.latLng(this.lat, this.lng),
    });
  }
}
