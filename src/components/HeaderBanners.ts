import Swiper from 'swiper'
// import { setupScreenObserver } from '../utils/screen'

export function setupeHeaderBanners (): void {
  const swiper = new Swiper('[data-swiper="header-banner"]', {
    slidesPerView: 1,
    loop: true
  })

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

  function createImageElement (path: string): HTMLImageElement {
    const bannerImageElement = document.createElement('img')

    bannerImageElement.setAttribute('src', path)
    bannerImageElement.classList.add('swiper-slide')

    return bannerImageElement
  }
  desktopBannersURL.forEach(path => {
    swiper.el.appendChild(createImageElement(path))
  })
}
