import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RoomComponent } from './page/rooms/room.component';
import { RootComponent } from './page/root/root.component';

export const routes: Routes = [
    { path: '', component: RootComponent, title: 'BookInn' },
    { path: 'home', component: HomeComponent, title: 'Home | BookInn' },
    { path: 'room/:id', component: RoomComponent, title: 'Room | BookInn' },
];