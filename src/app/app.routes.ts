import { Routes } from '@angular/router';

import { OffersList } from './components/offers-list/offers-list';
import { OfferDetails } from './components/offer-details/offer-details';

export const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OffersList },
  { path: 'offers/:id', component: OfferDetails },
  { path: 'my-orders', component: OffersList },
  { path: 'contact', component: OffersList },
];
