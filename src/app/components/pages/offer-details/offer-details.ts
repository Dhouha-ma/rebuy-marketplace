import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Offer } from '../../../types/offer-type';
import { Offers } from '../../../services/offers';
import { Card } from '../../card/card';
import { Button } from '../../shared/button/button';
import { VoteButton } from '../../shared/vote-button/vote-button';

@Component({
  selector: 'app-offer-details',
  imports: [CommonModule, Card, VoteButton, Button],
  templateUrl: './offer-details.html',
  styleUrl: './offer-details.scss',
})
export class OfferDetails implements OnInit {
  public offer: Offer | undefined;
  public liked = false;
  public disliked = false;

  constructor(
    private route: ActivatedRoute,
    private offersService: Offers,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.offer = this.offersService.getOfferById(id);
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

  public goBack() {
    this.router.navigate(['/offers']);
  }

  public proceedToPurchase(offer: Offer) {
    window.location.href = offer.productUrl;
  }
}
