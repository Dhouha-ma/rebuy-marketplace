import { Component } from '@angular/core';

import { Card } from '../card/card';
import { OFFERS_MOCK } from '../../mock-data/offer-mock';
import { SortOffersPipe } from '../../pipes/sort-offers-pipe';

@Component({
  selector: 'app-offers-list',
  imports: [Card, SortOffersPipe],
  templateUrl: './offers-list.html',
  styleUrl: './offers-list.scss',
})
export class OffersList {
  offers = OFFERS_MOCK;
}
