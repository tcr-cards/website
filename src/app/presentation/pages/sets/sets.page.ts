import { Component } from '@angular/core';
import { cardMock } from '../../../entities/models/card.model';
import { bannerInfoMockList } from '../../../mocks/banner-info.mock';
import { BannerList } from '../../components/banner-list/banner-list';
import { Card } from '../../components/card/card';
import { Collapsible } from '../../components/collapsible/collapsible';
import { FeaturingBanner } from '../../components/featuring-banner/featuring-banner';
import { FeaturingBannerInfo } from '../../components/featuring-banner/interfaces/featuring-banner-info.interface';

@Component({
  selector: 'app-sets',
  imports: [BannerList, Collapsible, FeaturingBanner, Card],
  templateUrl: './sets.page.html',
  styleUrl: './sets.page.scss'
})
export class Sets {
  banners = bannerInfoMockList();
  card = cardMock;
  featuringBannerInfo: FeaturingBannerInfo = {
    bgImage: 'https://bonus-action.com/wp-content/uploads/2025/09/Pokemon-TCG-Mega-Evolution-Phantasmal-Flames.webp',
    logoImage: 'https://boostermania.es/wp-content/uploads/2025/09/Pokemon_TCG_Mega_Evolution%E2%80%94Phantasmal_Flames_Logo-scaled-1-1024x444.png',
    setId: 'sv085'
  };

  onViewSet(setId: string) {
    console.log('View set:', setId);
  }
}
