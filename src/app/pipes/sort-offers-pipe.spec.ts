import { OFFERS_MOCK } from '../mock-data/offer-mock';
import { SortOffersPipe } from './sort-offers-pipe';

describe('SortOffersPipe', () => {
  const pipe = new SortOffersPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort offers by likes by default (descending)', () => {
    const sorted = pipe.transform(OFFERS_MOCK);

    expect(sorted.map((offer) => offer.likes)).toEqual([88, 75, 64, 59, 52, 40]);
    // Noise-Canceling Headphones, Bluetooth Speaker, Wireless Mouse, Earbuds, Mechanical Keyboard, Smartwatch
  });

  it('should sort offers by a provided field (price)', () => {
    const sorted = pipe.transform(OFFERS_MOCK, 'price');

    expect(sorted.map((offer) => offer.price)).toEqual([249, 199, 129, 75, 64, 59]);
    // Headphones, Smartwatch, Keyboard, Speaker, Mouse, Earbuds
  });
});
