import { Component, Input } from '@angular/core';
import { AccountComponent } from "../account/account.component";
import { LogoComponent } from "../logo/logo.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent, LogoComponent, AccountComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input({ required: false }) hideSearchbar: boolean = false
}