import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { HTMLBodyReducer } from './state/htmlBody/htmlBody.reducer';
import { HTMLBodyFeatureKey } from './state/htmlBody/htmlBody.selectors';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
  provideStore(HTMLBodyReducer),
  provideState({ name: HTMLBodyFeatureKey, reducer: HTMLBodyReducer })]
};