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
    const spyService = jasmine.createSpyObj('OffersService', [
      'toggleLike',
      'toggleDislike',
      'setVotes',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

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

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onLike: handle like button click', () => {
    it('should call offersService.toggleLike and update liked/disliked values', () => {
      offersService.toggleLike.and.returnValue({ liked: true, disliked: false });

      component.onLike(OFFERS_MOCK[1]);

      expect(offersService.toggleLike).toHaveBeenCalledWith(OFFERS_MOCK[1]);
    });
  });

  describe('onDislike: handle on dislike button click', () => {
    it('should call toggleDislike and update liked/disliked state', () => {
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
