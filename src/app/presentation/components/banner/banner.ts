import { Component, input } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';

@Component({
  selector: 'app-banner',
  imports: [ProgressBar],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  type = input.required<'large' | 'small'>();
  bgImage = input<string>('');
  bannerImage = input<string>('');
  total = input<number>(0);
  completed = input<number>(0);
  bannerDescription = input<string | undefined>(undefined);
}
