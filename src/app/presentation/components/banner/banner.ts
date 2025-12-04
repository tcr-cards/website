import { Component, input } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';
import { BannerInfo } from './interfaces/banner-info.interface';

@Component({
  selector: 'app-banner',
  imports: [ProgressBar],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  type = input<'large' | 'small'>('large');
  bannerInfo = input.required<BannerInfo>();
}
