import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { css } from '@emotion/css';
import { AccountComponent } from "../account/account.component";
import { LogoComponent } from "../logo/logo.component";
import { DesktopSearchbarComponent, SearchbarStartingStates } from "../searchbar/desktop/desktop-searchbar.component";
import { PhoneSearchbarComponent } from "../searchbar/phone/phone-searchbar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, DesktopSearchbarComponent, LogoComponent, AccountComponent, PhoneSearchbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input({ required: false }) hideSearchbar: boolean = false
  @Input({ required: false }) startingModeState: 'minimized' | 'normal' = 'normal';
  @Input({ required: false }) searchbarStartingState: SearchbarStartingStates | undefined;
  isSearchbarOpen: boolean = false;
  maximizedClass: string = "";

  getSearchbarStatus(searchbarStatus: boolean) {
    this.isSearchbarOpen = searchbarStatus;
    if (this.isSearchbarOpen) {
      this.maximizedClass = css`
      grid-template-rows: auto 1fr;
      height: 100dvh;
    `;
    } else {
      this.maximizedClass = "";
    }
  }

  closeSearchBar() {
    this.getSearchbarStatus(false);
  }
}