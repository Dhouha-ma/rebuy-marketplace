import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'offers' },
  {
    path: 'offers',
    loadComponent: () =>
      import('./components/pages/offers-list/offers-list').then((m) => m.OffersList),
  },
  {
    path: 'offers/:id',
    loadComponent: () =>
      import('./components/pages/offer-details/offer-details').then((m) => m.OfferDetails),
  },
  {
    path: 'my-orders',
    loadComponent: () => import('./components/pages/my-orders/my-orders').then((m) => m.MyOrders),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: 'offers' },
];
