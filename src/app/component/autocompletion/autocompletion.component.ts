import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LandService } from '../../IoC/service/land.service';

@Component({
  selector: 'autocompletion',
  standalone: true,
  imports: [],
  providers: [LandService],
  templateUrl: './autocompletion.component.html',
  styleUrl: './autocompletion.component.css'
})
export class AutocompletionComponent {
  @Input({ required: true }) set cityPart(value: string) {
    if (value !== "") {
      this.suggestions = this.landservice.findClosestCityName(value);
    } else {
      this.suggestions = [];
    }
  };
  suggestions: string[] = [];
  @Output() sendSuggestion = new EventEmitter<string>();

  constructor(private landservice: LandService) {

  }

  suggestionClickHandler(suggestion: string) {
    this.sendSuggestion.emit(suggestion);
  }
}
