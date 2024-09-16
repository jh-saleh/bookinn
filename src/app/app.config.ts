import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { BillInformationReducer } from './state/bill-information/bill-information.reducer';
import { BillInformationFeatureKey } from './state/bill-information/bill-information.selectors';
import { HTMLBodyReducer } from './state/htmlBody/htmlBody.reducer';
import { HTMLBodyFeatureKey } from './state/htmlBody/htmlBody.selectors';
import { StayReducer } from './state/stay/stay.reducer';
import { StayFeatureKey } from './state/stay/stay.selectors';
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
  provideStore(HTMLBodyReducer, {
    runtimeChecks: {
      strictStateImmutability: false,
      strictActionImmutability: false, // Les etats de ngrx obetnues par les selectors sont en read only, ce qui rend difficile leurs manipulations
    }
  }),
  provideState({ name: HTMLBodyFeatureKey, reducer: HTMLBodyReducer }),
  provideState({ name: UserFeatureKey, reducer: UserReducer }),
  provideState({ name: StayFeatureKey, reducer: StayReducer }),
  provideState({ name: BillInformationFeatureKey, reducer: BillInformationReducer }),
  ]
};