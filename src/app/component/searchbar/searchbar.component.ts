import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  readonly searchLabel = "Search";
  displayLabel: boolean = false;

  showLabel() {
    this.displayLabel = true;
  }

  hideLabel() {
    this.displayLabel = false;
  }

  focusLocationInput(refLocationInput: HTMLInputElement) {
    refLocationInput.focus();
  }
}
