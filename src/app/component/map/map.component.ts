import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { css } from '@emotion/css';
import * as L from "leaflet";
import { environment } from '../../../environments/environment';
import { CityName } from '../../hexagonal/domain/model/land/land.model';
import { Coordinates } from '../../hexagonal/domain/model/stay/location.model';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  imports: [CommonModule],
  providers: [],
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map: any;
  image: any;
  bounds = [[0, 0], [998, 1024]]; // ordre [height, width]
  mapWrapper: string = css`
  height: 100%;
  width: 100%;
  `;
  @Input({ required: true }) zoom: number = -1;
  _coordinates?: Coordinates;
  @Input({ required: true }) set coordinates(value: Coordinates | undefined) {
    this._coordinates = value;
    if (value && this.map) {
      this.map.setView([value.y, value.x], this.zoom);
    }
  };
  get coordinates(): Coordinates | undefined {
    return this._coordinates;
  }
  @Input({ required: false }) displayAllCities?: boolean;

  constructor() { }

  ngOnInit() {
    // check if app is running in browser and then lazyload leaflet because of SSR
    this.initMap();
  }

  initMap(): void {
    const getCityIcon = (city: string) => {
      const icon: string = `
        <div class="map-icon-label">${city}</div>
      `;
      return L.divIcon({ className: "", html: icon });
    }

    const getLocationMarker = (coordinate: Coordinates) => {
      const icon: string = `
        <span class="material-symbols-outlined map-icon">cottage</span>
      `;
      return L.marker([coordinate.y, coordinate.x], { icon: L.divIcon({ className: "", html: icon }) });
    }

    const cities = L.layerGroup([
      L.marker([310, 255], { icon: getCityIcon(CityName.Brightwater) }),
      L.marker([230, 120], { icon: getCityIcon(CityName.Briarholm) }),
      L.marker([120, 240], { icon: getCityIcon(CityName.Drakenshore) }),
      L.marker([220, 450], { icon: getCityIcon(CityName.Thandor) }),
      L.marker([300, 510], { icon: getCityIcon(CityName.Glimmerfall) }),
      L.marker([160, 850], { icon: getCityIcon(CityName.Ebonport) }),
      L.marker([300, 920], { icon: getCityIcon(CityName.Sunspire) }),
      L.marker([400, 250], { icon: getCityIcon(CityName.Redleaf) }),
      L.marker([420, 450], { icon: getCityIcon(CityName.Willowgrove) }),
      L.marker([470, 760], { icon: getCityIcon(CityName.Lurendale) }),
      L.marker([535, 740], { icon: getCityIcon(CityName.Shadowfen) }),
      L.marker([480, 870], { icon: getCityIcon(CityName.Goldhaven) }),
      L.marker([540, 370], { icon: getCityIcon(CityName.Vorandal) }),
      L.marker([580, 210], { icon: getCityIcon(CityName.Mirros) }),
      L.marker([610, 500], { icon: getCityIcon(CityName.Moonshadow) }),
      L.marker([710, 870], { icon: getCityIcon(CityName.Stormwatch) }),
      L.marker([800, 170], { icon: getCityIcon(CityName.Ironcliff) }),
      L.marker([900, 250], { icon: getCityIcon(CityName.Frostgate) }),
      L.marker([800, 470], { icon: getCityIcon(CityName.Krynholm) }),
      L.marker([850, 700], { icon: getCityIcon(CityName.Highreach) }),
    ]);
    this.map = L.map('map', {
      crs: L.CRS.Simple, // crs : coordinate reference system
      minZoom: 0,
      maxZoom: 2,
      attributionControl: false, // désactive le crédit
    });
    this.map.setMaxBounds(this.bounds);
    this.map.fitBounds(this.bounds);
    if (this.coordinates) {
      getLocationMarker(this.coordinates).addTo(this.map);
      this.map.setView([this.coordinates.y, this.coordinates.x], this.zoom);
    }
    if (this.displayAllCities) {
      cities.addTo(this.map);
    }
    const layerControl = L.control.layers({}, {

    }).addTo(this.map);
    layerControl.addOverlay(cities, "Cities");
    this.image = L.imageOverlay(environment.images.worldmap, this.bounds as L.LatLngBoundsExpression).addTo(this.map);
  }
}
