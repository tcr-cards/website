import { Component } from '@angular/core';
import { bannerInfoMockList } from '../../../mocks/banner-info.mock';
import { BannerList } from '../../components/banner-list/banner-list';
import { Collapsible } from '../../components/collapsible/collapsible';

@Component({
  selector: 'app-sets',
  imports: [BannerList, Collapsible],
  templateUrl: './sets.page.html',
  styleUrl: './sets.page.scss',
})
export class Sets {
  banners = bannerInfoMockList();
}
