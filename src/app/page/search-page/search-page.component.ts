import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { MapComponent } from "../../component/map/map.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Coordinates } from '../../model/inn/location.model';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MapComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  coordinates: Coordinates | undefined;
}
