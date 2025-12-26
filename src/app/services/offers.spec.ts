import { TestBed } from '@angular/core/testing';

import { Offers } from './offers';
import { OFFERS_MOCK } from '../mock-data/offer-mock';

describe('Offers', () => {
  let service: Offers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Offers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllOffers: returns all offers', () => {
    it('should return all offers', () => {
      const offers = service.getAllOffers();

      expect(offers).toEqual(OFFERS_MOCK);
      expect(offers.length).toBe(OFFERS_MOCK.length);
    });
  });

  describe('getOfferById: returns a specific offer by id', () => {
    it('should return an offer by id', () => {
      const id = 2;
      const offer = service.getOfferById(id);

      expect(offer).toEqual(OFFERS_MOCK.find((o) => o.id === id));
      expect(offer?.id).toBe(id);
    });

    it('should return undefined for a non-existing id', () => {
      const id = 9999;
      const offer = service.getOfferById(id);

      expect(offer).toBeUndefined();
    });
  });

  describe('toggleLike: behavior of like button', () => {
    it('should increase likes when not previously liked', () => {
      const offer = { likes: 0, dislikes: 0 } as any;

      const result = service.toggleLike(offer, false, false);

      expect(offer.likes).toBe(1);
      expect(result.liked).toBeTrue();
      expect(result.disliked).toBeFalse();
    });

    it('should decrease likes when already liked', () => {
      const offer = { likes: 5, dislikes: 0 } as any;

      const result = service.toggleLike(offer, true, false);

      expect(offer.likes).toBe(4);
      expect(result.liked).toBeFalse();
      expect(result.disliked).toBeFalse();
    });
  });

  describe('toggleDislike: behavior of dislike button', () => {
    it('should increase dislikes when not previously disliked', () => {
      const offer = { likes: 0, dislikes: 0 } as any;

      const result = service.toggleDislike(offer, false, false);

      expect(offer.dislikes).toBe(1);
      expect(result.disliked).toBeTrue();
      expect(result.liked).toBeFalse();
    });

    it('should decrease dislikes when already disliked', () => {
      const offer = { likes: 0, dislikes: 4 } as any;

      const result = service.toggleDislike(offer, false, true);

      expect(offer.dislikes).toBe(3);
      expect(result.disliked).toBeFalse();
      expect(result.liked).toBeFalse();
    });
  });
});
