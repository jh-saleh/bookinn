import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { HTMLBodyReducer } from './state/htmlBody/htmlBody.reducer';
import { HTMLBodyFeatureKey } from './state/htmlBody/htmlBody.selectors';
import { UserReducer } from './state/user/user.reducer';
import { UserFeatureKey } from './state/user/user.selectors';

//@url: https://stackoverflow.com/questions/76318742/configuring-scroll-restoration-for-angular-standalone-router
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, inMemoryScrollingFeature), provideClientHydration(),
  provideStore(HTMLBodyReducer),
  provideState({ name: HTMLBodyFeatureKey, reducer: HTMLBodyReducer }),
  provideState({ name: UserFeatureKey, reducer: UserReducer }),
  ]
};