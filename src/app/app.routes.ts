import { Routes } from '@angular/router';

import { OffersList } from './components/offers-list/offers-list';

export const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OffersList },
  { path: 'my-orders', component: OffersList },
  { path: 'contact', component: OffersList },
];
