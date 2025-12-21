import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  imports: [],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class Chip {
  color = input<'red' | 'blue' | 'yellow'>('blue');
  text = input.required<string>();
}
