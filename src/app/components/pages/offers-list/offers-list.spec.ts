import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { OffersList } from './offers-list';
import { Offers } from '../../../services/offers';
import { OFFERS_MOCK } from '../../../mock-data/offer-mock';

describe('OffersList', () => {
  let component: OffersList;
  let fixture: ComponentFixture<OffersList>;
  let offersService: jasmine.SpyObj<Offers>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spyService = jasmine.createSpyObj<Offers>('Offers', [
      'toggleLike',
      'toggleDislike',
      'setVotes',
      'getAllOffers',
    ]);
    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    spyService.getAllOffers.and.returnValue(OFFERS_MOCK);

    await TestBed.configureTestingModule({
      imports: [OffersList],
      providers: [
        { provide: Offers, useValue: spyService },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OffersList);
    component = fixture.componentInstance;
    offersService = TestBed.inject(Offers) as jasmine.SpyObj<Offers>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load offers from the service', () => {
    expect(offersService.getAllOffers).toHaveBeenCalled();
    expect(component.offers()).toEqual(OFFERS_MOCK);
  });

  describe('onLike', () => {
    it('should call offersService.toggleLike', () => {
      offersService.toggleLike.and.returnValue({ liked: true, disliked: false });

      component.onLike(OFFERS_MOCK[1]);

      expect(offersService.toggleLike).toHaveBeenCalledWith(OFFERS_MOCK[1]);
    });
  });

  describe('onDislike', () => {
    it('should call offersService.toggleDislike', () => {
      offersService.toggleDislike.and.returnValue({ liked: false, disliked: true });

      component.onDislike(OFFERS_MOCK[0]);

      expect(offersService.toggleDislike).toHaveBeenCalledWith(OFFERS_MOCK[0]);
    });
  });

  describe('navigateToOfferDetails', () => {
    it('should navigate to the offer details page with the correct ID', () => {
      const offerId = 42;

      component.navigateToOfferDetails(offerId);

      expect(router.navigate).toHaveBeenCalledWith(['/offers', offerId]);
    });
  });
});
