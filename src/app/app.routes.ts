import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HostPageComponent } from './page/host-page/host-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { RoomPageComponent } from './page/room-page/room-page.component';
import { RootPageComponent } from './page/root-page/root-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';

export const routes: Routes = [
    { path: '', component: RootPageComponent, title: 'BookInn' },
    { path: 'home', component: HomePageComponent, title: 'Home | BookInn' },
    { path: 'room/:id', component: RoomPageComponent, title: 'Room | BookInn' },
    { path: 'host/:id', component: HostPageComponent, title: 'Host profile | BookInn' },
    { path: 's/:location/:type', component: SearchPageComponent, title: 'Search Page | BookInn' },
    { path: '**', component: NotFoundPageComponent, title: 'Not Found | BookInn' },
];