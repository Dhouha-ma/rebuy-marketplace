import { Pipe, PipeTransform } from '@angular/core';

import { Offer, SortableOfferField } from '../types/offer-type';

@Pipe({
  name: 'sortOffers',
  standalone: true,
})
export class SortOffersPipe implements PipeTransform {
  transform(offers: Offer[], field: SortableOfferField = 'likes'): Offer[] {
    if (!offers) return [];

    return offers.slice().sort((a, b) => {
      return (b[field] as number) - (a[field] as number);
    });
  }
}
