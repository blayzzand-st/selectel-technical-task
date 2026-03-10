import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Items } from './pages/items/items';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'items', component: Items },
];
