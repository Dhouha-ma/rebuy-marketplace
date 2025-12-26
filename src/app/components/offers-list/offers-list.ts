import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from '../card/card';
import { SortOffersPipe } from '../../pipes/sort-offers-pipe';
import { VoteButton } from '../shared/vote-button/vote-button';
import { Offer } from '../../types/offer-type';
import { Button } from '../shared/button/button';
import { Offers } from '../../services/offers';

@Component({
  selector: 'app-offers-list',
  imports: [Card, SortOffersPipe, VoteButton, Button],
  templateUrl: './offers-list.html',
  styleUrl: './offers-list.scss',
})
export class OffersList implements OnInit {
  public offers: Offer[] = [];
  public liked = false;
  public disliked = false;

  constructor(
    private router: Router,
    private offersService: Offers,
  ) {}

  ngOnInit(): void {
    this.offers = this.offersService.getAllOffers();
  }

  public onLike(offer: Offer) {
    const result = this.offersService.toggleLike(offer, this.liked, this.disliked);

    this.liked = result.liked;
    this.disliked = result.disliked;
  }

  public onDislike(offer: Offer) {
    const result = this.offersService.toggleDislike(offer, this.liked, this.disliked);

    this.liked = result.liked;
    this.disliked = result.disliked;
  }

  public navigateToOfferDetails(offerId: number) {
    this.router.navigate(['/offers', offerId]);
  }
}
