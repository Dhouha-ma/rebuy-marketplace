import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';

import { OfferDetails } from './offer-details';

describe('OfferDetails', () => {
  let component: OfferDetails;
  let fixture: ComponentFixture<OfferDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => '1',
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferDetails);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
