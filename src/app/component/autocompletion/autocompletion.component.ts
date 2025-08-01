import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
export class AutocompletionComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  @Input({ required: true }) set cityPart(value: string) {
    if (value) {
      this.landservice.findClosestCityName(value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((suggestions) => this.suggestions = suggestions);
    } else {
      this.suggestions = [];
    }
  };
  suggestions: string[] = [];
  @Output() sendSuggestion = new EventEmitter<string>();

  constructor(private landservice: LandPort) {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  suggestionClickHandler(suggestion: string) {
    this.sendSuggestion.emit(suggestion);
  }
}
