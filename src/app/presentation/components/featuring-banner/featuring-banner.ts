import { Component, input, output } from '@angular/core';
import { FeaturingBannerInfo } from './interfaces/featuring-banner-info.interface';

@Component({
  selector: 'app-featuring-banner',
  imports: [],
  templateUrl: './featuring-banner.html',
  styleUrl: './featuring-banner.scss',
})
export class FeaturingBanner {
  info = input.required<FeaturingBannerInfo>();
  showButton = input<boolean>(true);
  viewSet = output<string>();
}
