import { Component, input, output } from '@angular/core';
import { CardModel } from '../../../entities/models/card.model';
import { Chip } from '../chip/chip';

@Component({
  selector: 'app-card',
  imports: [Chip],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  card = input.required<CardModel>();
  showSet = input<boolean>(true);
  setSelected = output<void>();
}
