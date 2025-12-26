import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Offer } from '../../types/offer-type';
import { Offers } from '../../services/offers';
import { Card } from '../card/card';
import { VoteButton } from '../shared/vote-button/vote-button';
import { Button } from '../shared/button/button';

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
    const result = this.offersService.toggleLike(offer, this.liked, this.disliked);

    this.liked = result.liked;
    this.disliked = result.disliked;
  }

  public onDislike(offer: Offer) {
    const result = this.offersService.toggleDislike(offer, this.liked, this.disliked);

    this.liked = result.liked;
    this.disliked = result.disliked;
  }

  public goBack() {
    this.router.navigate(['/offers']);
  }
}
