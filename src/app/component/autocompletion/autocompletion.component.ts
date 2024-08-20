import { Component, EventEmitter, Input, Output } from '@angular/core';
import { landServiceFactory } from '../../hexagonal/di-factories';
import { LandPort } from '../../hexagonal/domain/port/land.port';

@Component({
  selector: 'autocompletion',
  standalone: true,
  imports: [],
  providers: [{ provide: LandPort, useFactory: landServiceFactory }],
  templateUrl: './autocompletion.component.html',
  styleUrl: './autocompletion.component.css'
})
export class AutocompletionComponent {
  @Input({ required: true }) set cityPart(value: string) {
    if (value) {
      this.landservice.findClosestCityName(value).subscribe((suggestions) => this.suggestions = suggestions);
    } else {
      this.suggestions = [];
    }
  };
  suggestions: string[] = [];
  @Output() sendSuggestion = new EventEmitter<string>();

  constructor(private landservice: LandPort) {

  }

  suggestionClickHandler(suggestion: string) {
    this.sendSuggestion.emit(suggestion);
  }
}
