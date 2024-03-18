import Swiper from 'swiper'
import { Manipulation, Pagination } from 'swiper/modules'
import {
  isMobile,
  screenSize
} from '../utils/screen'

export function setupeHeaderBanners (): void {
  const desktopBannersURL = [
    '/desktop-banner-1.png',
    '/desktop-banner-2.png',
    '/desktop-banner-3.png'
  ]

  const mobileBannersURL = [
    '/mobile-banner-1.png',
    '/mobile-banner-2.png',
    '/mobile-banner-3.png'
  ]

  const swiper = new Swiper('[data-swiper="header-banner"]', {
    init: false,
    loop: true,
    slidesPerView: 1,

    modules: [Manipulation, Pagination],

    pagination: {
      el: '.swiper-pagination'
    },

    on: {
      beforeInit (swiper) {
        const mobileBanners = mobileBannersURL.map(path => createImageElement(path))
        const desktopBanners = desktopBannersURL.map(path => createImageElement(path))

        isMobile(screenSize)
          ? swiper.appendSlide(mobileBanners)
          : swiper.appendSlide(desktopBanners)
      }
    }
  })

  function createImageElement (path: string): HTMLImageElement {
    const bannerImageElement = document.createElement('img')

    bannerImageElement.setAttribute('src', path)
    bannerImageElement.classList.add('swiper-slide')

    return bannerImageElement
  }

  swiper.init()
}
