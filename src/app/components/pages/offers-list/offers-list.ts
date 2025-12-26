import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from '../../card/card';
import { SortOffersPipe } from '../../../pipes/sort-offers-pipe';
import { VoteButton } from '../../shared/vote-button/vote-button';
import { Offer } from '../../../types/offer-type';
import { Button } from '../../shared/button/button';
import { Offers } from '../../../services/offers';

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
    const toggleLike = this.offersService.toggleLike(offer, this.liked, this.disliked);

    this.liked = toggleLike.liked;
    this.disliked = toggleLike.disliked;
  }

  public onDislike(offer: Offer) {
    const toggleDislike = this.offersService.toggleDislike(offer, this.liked, this.disliked);

    this.liked = toggleDislike.liked;
    this.disliked = toggleDislike.disliked;
  }

  public navigateToOfferDetails(offerId: number) {
    this.router.navigate(['/offers', offerId]);
  }
}
