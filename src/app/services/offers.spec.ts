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

      expect(offer).toEqual(OFFERS_MOCK.find((offer) => offer.id === id));
      expect(offer?.id).toBe(id);
    });

    it('should return undefined for a non-existing id', () => {
      const offer = service.getOfferById(9999);
      expect(offer).toBeUndefined();
    });
  });

  describe('toggleLike: behavior of like button', () => {
    it('should increase likes when not previously liked', () => {
      const offer = { likes: 0, dislikes: 0 } as any;

      const result = service.toggleLike(offer);

      expect(offer.likes).toBe(1);
      expect(offer.dislikes).toBe(0);
      expect(result).toEqual({ liked: true, disliked: false });
    });

    it('should decrease likes when already liked', () => {
      const offer = { likes: 5, dislikes: 0 } as any;

      service.toggleLike(offer);
      const result = service.toggleLike(offer);

      expect(offer.likes).toBe(5);
      expect(result).toEqual({ liked: false, disliked: false });
    });
  });

  describe('toggleDislike: behavior of dislike button', () => {
    it('should increase dislikes when not previously disliked', () => {
      const offer = { likes: 0, dislikes: 0 } as any;

      const result = service.toggleDislike(offer);

      expect(offer.dislikes).toBe(1);
      expect(offer.likes).toBe(0);
      expect(result).toEqual({ liked: false, disliked: true });
    });

    it('should decrease dislikes when already disliked', () => {
      const offer = { likes: 0, dislikes: 4 } as any;

      service.toggleDislike(offer);
      const result = service.toggleDislike(offer);

      expect(offer.dislikes).toBe(4);
      expect(result).toEqual({ liked: false, disliked: false });
    });
  });
});
