import { Component } from '@angular/core';

import { Card } from '../card/card';
import { OFFERS_MOCK } from '../../mock-data/offer-mock';

@Component({
  selector: 'app-offers-list',
  imports: [Card],
  templateUrl: './offers-list.html',
  styleUrl: './offers-list.scss',
})
export class OffersList {
  offers = OFFERS_MOCK;
}
