import { OFFERS_MOCK } from '../mock-data/offer-mock';
import { SortOffersPipe } from './sort-offers-pipe';

describe('SortOffersPipe', () => {
  const pipe = new SortOffersPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort offers by likes by default (descending)', () => {
    const sorted = pipe.transform(OFFERS_MOCK);

    expect(sorted[0].likes).toBe(75); // Bluetooth Speaker
    expect(sorted[1].likes).toBe(64); // Wireless Mouse
    expect(sorted[2].likes).toBe(59); // Earbuds
    expect(sorted[3].likes).toBe(40); // Smartwatch
  });

  it('should sort offers by a provided field (price)', () => {
    const sorted = pipe.transform(OFFERS_MOCK, 'price');

    expect(sorted[0].price).toBe(199); // Smartwatch
    expect(sorted[1].price).toBe(75); // Speaker
    expect(sorted[2].price).toBe(64); // Mouse
    expect(sorted[3].price).toBe(59); // Earbuds
  });
});
