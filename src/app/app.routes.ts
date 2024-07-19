import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RootComponent } from './page/root/root.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home - BookInn' },
    { path: '', component: RootComponent, title: 'BookInn' }
];