import { CommonModule } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { css } from '@emotion/css';
import { environment } from '../../../environments/environment';
import { LeafletHelper } from '../../IoC/service/leaflet.helper';
import { Coordinates } from '../../model/inn/location.model';
import { CityName } from '../../model/land/land.model';

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
  image: any;
  bounds = [[0, 0], [998, 1024]]; // ordre [height, width]
  mapWrapper: string = css`
  height: 100%;
  width: 100%;
  `;
  @Input() zoom: number = -1;
  @Input({ required: true }) coordinates!: Coordinates;

  constructor(
    private leafletHelper: LeafletHelper,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  ngOnInit() {
    // check if app is running in browser and then lazyload leaflet because of SSR
    if (this._platformId === 'browser') {
      this.leafletHelper.loadLeaflet().then((leafletLib) => {
        this.initMap(leafletLib);
      });
    }
  }

  initMap(lib: any): void {
    const getCityIcon = (city: string) => {
      const icon: string = `
        <div class="map-icon-label">${city}</div>
      `
      return lib.divIcon({ className: "", html: icon });
    }

    const getLocationMarker = () => {
      const icon: string = `
        <span class="material-symbols-outlined map-icon">cottage</span>
      `
      return lib.marker([this.coordinates.y, this.coordinates.x], { icon: lib.divIcon({ className: "", html: icon }) });
    }

    const cities = lib.layerGroup([
      lib.marker([310, 255], { icon: getCityIcon(CityName.Brightwater) }),
      lib.marker([230, 120], { icon: getCityIcon(CityName.Briarholm) }),
      lib.marker([120, 240], { icon: getCityIcon(CityName.Drakenshore) }),
      lib.marker([220, 450], { icon: getCityIcon(CityName.Thandor) }),
      lib.marker([300, 510], { icon: getCityIcon(CityName.Glimmerfall) }),
      lib.marker([160, 850], { icon: getCityIcon(CityName.Ebonport) }),
      lib.marker([300, 920], { icon: getCityIcon(CityName.Sunspire) }),
      lib.marker([400, 250], { icon: getCityIcon(CityName.Redleaf) }),
      lib.marker([420, 450], { icon: getCityIcon(CityName.Willowgrove) }),
      lib.marker([470, 760], { icon: getCityIcon(CityName.Lurendale) }),
      lib.marker([535, 740], { icon: getCityIcon(CityName.Shadowfen) }),
      lib.marker([480, 870], { icon: getCityIcon(CityName.Goldhaven) }),
      lib.marker([540, 370], { icon: getCityIcon(CityName.Vorandal) }),
      lib.marker([580, 210], { icon: getCityIcon(CityName.Mirros) }),
      lib.marker([610, 500], { icon: getCityIcon(CityName.Moonshadow) }),
      lib.marker([710, 870], { icon: getCityIcon(CityName.Stormwatch) }),
      lib.marker([800, 170], { icon: getCityIcon(CityName.Ironcliff) }),
      lib.marker([900, 250], { icon: getCityIcon(CityName.Frostgate) }),
      lib.marker([800, 470], { icon: getCityIcon(CityName.Krynholm) }),
      lib.marker([850, 700], { icon: getCityIcon(CityName.Highreach) }),
    ]);
    this.map = lib.map('map', {
      crs: lib.CRS.Simple, // crs : coordinate reference system
      minZoom: 0,
      maxZoom: 2,
    });
    const marker = getLocationMarker().addTo(this.map);
    this.map.setMaxBounds(this.bounds);
    this.map.fitBounds(this.bounds);
    this.map.setView([this.coordinates.y, this.coordinates.x], this.zoom);
    const layerControl = lib.control.layers().addTo(this.map);
    layerControl.addOverlay(cities, "Cities");
    this.image = lib.imageOverlay(environment.images.worldmap, this.bounds).addTo(this.map);
  }
}
