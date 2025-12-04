import { Component } from '@angular/core';
import { bannerInfoMockList } from '../../../mocks/banner-info.mock';
import { BannerList } from '../../components/banner-list/banner-list';
import { ProgressBar } from '../../components/progress-bar/progress-bar';

@Component({
  selector: 'app-sets',
  imports: [ProgressBar, BannerList],
  templateUrl: './sets.page.html',
  styleUrl: './sets.page.scss',
})
export class Sets {
  banners = bannerInfoMockList();
}
