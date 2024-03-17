import Swiper from 'swiper'
import { Screen } from '../utils/screen'

export function setupeHeaderBanners (): void {
  const swiper = new Swiper('[data-swiper="header-banner"]', {
    slidesPerView: 1
  })

  const desktopBannersURL = [
    '/public/desktop-banner-1.png',
    '/public/desktop-banner-2.png',
    '/public/desktop-banner-3.png'
  ]

  const mobileBannersURL = [
    '/public/mobile-banner-1.png',
    '/public/mobile-banner-2.png',
    '/public/mobile-banner-3.png'
  ]

  function handleBannersByScrenSize (screen: Screen): undefined {
    function createImageElement (path: string): HTMLImageElement {
      const bannerImageElement = document.createElement('img')

      bannerImageElement.setAttribute('src', path)
      bannerImageElement.classList.add('swiper-slide')

      return bannerImageElement
    }

    console.log(swiper)
    if (screen.isMobile()) {
      mobileBannersURL.forEach((path: string) => {
        const imageElement = createImageElement(path)

        swiper.el.appendChild(imageElement)
      })

      return
    }

    desktopBannersURL.forEach((path: string) => {
      const imageElement = createImageElement(path)

      swiper.el.appendChild(imageElement)
    })
  }

  const screenObserver = new Screen(handleBannersByScrenSize)

  screenObserver.init()
}
