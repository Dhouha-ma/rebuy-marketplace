import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from '../shared/button/button';
import { Offer } from '../../types/offer-type';
import { VoteButton } from '../shared/vote-button/vote-button';

@Component({
  selector: 'app-card',
  imports: [Button, CommonModule, VoteButton],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() offer!: Offer;

  public liked = false;
  public disliked = false;

  public onLike() {
    if (this.disliked) {
      this.disliked = false;
      this.offer.dislikes--;
    }

    if (this.liked) {
      this.liked = false;
      this.offer.likes--;
    } else {
      this.liked = true;
      this.offer.likes++;
    }
  }

  public onDislike() {
    if (this.liked) {
      this.liked = false;
      this.offer.likes--;
    }

    if (this.disliked) {
      this.disliked = false;
      this.offer.dislikes--;
    } else {
      this.disliked = true;
      this.offer.dislikes++;
    }
  }
}
