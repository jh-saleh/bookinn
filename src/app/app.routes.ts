import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home/home-page.component';
import { HostPageComponent } from './page/host/host-page.component';
import { RoomPageComponent } from './page/rooms/room-page.component';
import { RootPageComponent } from './page/root/root-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';

export const routes: Routes = [
    { path: '', component: RootPageComponent, title: 'BookInn' },
    { path: 'home', component: HomePageComponent, title: 'Home | BookInn' },
    { path: 'room/:id', component: RoomPageComponent, title: 'Room | BookInn' },
    { path: 'host/:id', component: HostPageComponent, title: 'Host profile | BookInn' },
    { path: 's/:location/:type?startDate&endDate&nbGuests', component: SearchPageComponent, title: 'Search Page | BookInn' },
];