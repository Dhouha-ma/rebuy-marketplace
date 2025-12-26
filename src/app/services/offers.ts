import { Injectable } from '@angular/core';

import { OFFERS_MOCK } from '../mock-data/offer-mock';
import { Offer } from '../types/offer-type';

@Injectable({
  providedIn: 'root',
})
export class Offers {
  public getAllOffers(): Offer[] {
    return OFFERS_MOCK;
  }

  public getOfferById(id: number): Offer | undefined {
    return OFFERS_MOCK.find((offer) => offer.id === id);
  }

  public toggleLike(offer: Offer, liked: boolean, disliked: boolean) {
    if (disliked) {
      offer.dislikes--;
      disliked = false;
    }

    if (liked) {
      offer.likes--;
      liked = false;
    } else {
      offer.likes++;
      liked = true;
    }

    return { liked, disliked };
  }

  public toggleDislike(offer: Offer, liked: boolean, disliked: boolean) {
    if (liked) {
      offer.likes--;
      liked = false;
    }

    if (disliked) {
      offer.dislikes--;
      disliked = false;
    } else {
      offer.dislikes++;
      disliked = true;
    }

    return { liked, disliked };
  }
}
