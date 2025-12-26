import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Offer } from '../../types/offer-type';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() offer!: Offer;
}
