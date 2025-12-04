import { BannerInfo } from "../presentation/components/banner/interfaces/banner-info.interface";

export const bannerInfoMock: (overrides?: Partial<BannerInfo>) => BannerInfo = (overrides?: Partial<BannerInfo>) => ({
  type: 'large',
  bgImage: 'https://placehold.co/600x400/purple/white',
  bannerImage: 'https://placehold.co/200x100/orange/white?text=LOGO',
  total: 300,
  completed: 132,
  bannerDescription: 'Inferno X',
  ...overrides,
})

export const bannerInfoMockList: (overrides?: Partial<BannerInfo>) => BannerInfo[] = (overrides?: Partial<BannerInfo>) => [
  bannerInfoMock(overrides),
  bannerInfoMock({
    bgImage: 'https://placehold.co/800x200/darkblue/white',
    bannerImage: 'https://placehold.co/100x50/orange/white?text=LOGO',
    bannerDescription: 'Inferno X',
    total: 300,
    completed: 132,
    ...overrides,
  }),
  bannerInfoMock({
    bgImage: 'https://placehold.co/600x400/purple/white',
    bannerImage: 'https://placehold.co/200x100/orange/white?text=LOGO',
    total: 300,
    completed: 132,
    bannerDescription: 'Inferno X',
    ...overrides,
  }),
  bannerInfoMock({
    bgImage: 'https://placehold.co/800x200/darkblue/white',
    bannerImage: 'https://placehold.co/100x50/orange/white?text=LOGO',
    bannerDescription: 'Inferno X',
    total: 300,
    completed: 132,
    ...overrides,
  }),
]