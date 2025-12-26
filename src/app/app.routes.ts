import { Routes } from '@angular/router';

import { OffersList } from './components/pages/offers-list/offers-list';
import { OfferDetails } from './components/pages/offer-details/offer-details';
import { MyOrders } from './components/pages/my-orders/my-orders';
import { Contact } from './components/pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OffersList },
  { path: 'offers/:id', component: OfferDetails },
  { path: 'my-orders', component: MyOrders },
  { path: 'contact', component: Contact },
];
