import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from '../shared/button/button';
import { Offer } from '../../types/offer-type';

@Component({
  selector: 'app-card',
  imports: [Button, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() offer!: Offer;
}
