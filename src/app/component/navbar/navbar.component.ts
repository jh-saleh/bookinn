import { Component } from '@angular/core';
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { LogoComponent } from "../logo/logo.component";
import { AccountComponent } from "../account/account.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent, LogoComponent, AccountComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}