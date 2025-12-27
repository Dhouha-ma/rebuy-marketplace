import { Injectable } from '@angular/core';

import { OFFERS_MOCK } from '../mock-data/offer-mock';
import { Offer, Vote } from '../types/offer-type';

@Injectable({
  providedIn: 'root',
})
export class Offers {
  private liked = false;
  private disliked = false;

  public getAllOffers(): Offer[] {
    return OFFERS_MOCK;
  }

  public getOfferById(id: number): Offer | undefined {
    return OFFERS_MOCK.find((offer) => offer.id === id);
  }

  public toggleLike(offer: Offer): Vote {
    if (this.disliked) {
      offer.dislikes--;
      this.disliked = false;
    }

    if (this.liked) {
      offer.likes--;
      this.liked = false;
    } else {
      offer.likes++;
      this.liked = true;
    }

    return {
      liked: this.liked,
      disliked: this.disliked,
    };
  }

  public toggleDislike(offer: Offer): Vote {
    if (this.liked) {
      offer.likes--;
      this.liked = false;
    }

    if (this.disliked) {
      offer.dislikes--;
      this.disliked = false;
    } else {
      offer.dislikes++;
      this.disliked = true;
    }

    return {
      liked: this.liked,
      disliked: this.disliked,
    };
  }

  public setVotes(toggleDislike: Vote) {
    this.liked = toggleDislike.liked;
    this.disliked = toggleDislike.disliked;
  }
}
