import { Component, input } from '@angular/core';
import { Banner } from '../banner/banner';
import { BannerInfo } from '../banner/interfaces/banner-info.interface';

@Component({
  selector: 'app-banner-list',
  imports: [Banner],
  templateUrl: './banner-list.html',
  styleUrl: './banner-list.scss',
})
export class BannerList {
  type = input<'grid' | 'list'>('grid');
  banners = input.required<BannerInfo[]>();
}
