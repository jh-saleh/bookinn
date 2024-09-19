import { Routes } from '@angular/router';
import { guestOnlyGuard } from './guard/guest-only.guard';
import { userOnlyGuard } from './guard/user-only.guard';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HostPageComponent } from './page/host-page/host-page.component';
import { PrivacyPolicyPageComponent } from './page/legal-pages/privacy-policy-page/privacy-policy-page.component';
import { TermsOfServicePageComponent } from './page/legal-pages/terms-of-service-page/terms-of-service-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { StayReservationPageComponent } from './page/reservation-page/stay-reservation-page.component';
import { RoomPageComponent } from './page/room-page/room-page.component';
import { RootPageComponent } from './page/root-page/root-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { SignUpPageComponent } from './page/sign-up-page/sign-up-page.component';
import { TripPageComponent } from './page/trip-page/trip-page.component';

export const routes: Routes = [
    { path: '', component: RootPageComponent, title: 'BookInn' },
    { path: 'home', component: HomePageComponent, title: 'Home | BookInn' },
    { path: 'room/:id', component: RoomPageComponent, title: 'Room | BookInn' },
    { path: 'host/:id', component: HostPageComponent, title: 'Host profile | BookInn' },
    { path: 's/:location/:type', component: SearchPageComponent, title: 'Search Page | BookInn' },
    { path: 'book/stays', component: StayReservationPageComponent, title: 'Confirm and pay | BookInn', canActivate: [userOnlyGuard] },
    { path: 'trips', component: TripPageComponent, title: 'Trips | BookInn', canActivate: [userOnlyGuard] },
    { path: 'login', component: LoginPageComponent, title: 'Log In | BookInn', canActivate: [guestOnlyGuard] },
    { path: 'signup', component: SignUpPageComponent, title: 'Sign Up | BookInn', canActivate: [guestOnlyGuard] },
    { path: 'terms-of-service', component: TermsOfServicePageComponent, title: 'Terms of Service | BookInn' },
    { path: 'privacy-policy', component: PrivacyPolicyPageComponent, title: 'Privacy Policy | BookInn' },
    { path: '**', component: NotFoundPageComponent, title: 'Not Found | BookInn' },
];