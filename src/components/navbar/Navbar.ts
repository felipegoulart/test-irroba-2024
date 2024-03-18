import { setupDesktopNavbar } from './NavbarDesktop'
import { setupMobileNavbar } from './NavbarMobile'
import { categoriesMapper } from '../../utils'
import { categories } from '../../store'
import {
  isLarge,
  isMedium,
  isMobile,
  oldScreenSize,
  screenSize,
  setupScreenObserver
} from '../../utils/screen'

export async function setupNavbar (): Promise<void> {
  const navbarHeaderAnchor: HTMLHeadingElement | null = document.querySelector('.navbar')

  const navbarElement = document.createElement('nav')
  const logoElement = document.createElement('a')
  const rightContainerElement = document.createElement('div')
  const linkListElement = document.createElement('ul')

  // Anexa ao header.navbar os elementos raiz que compõe a barra de navegação.
  navbarHeaderAnchor?.appendChild(navbarElement)
  navbarElement.appendChild(logoElement)
  navbarElement.appendChild(rightContainerElement)

  // Adiciona classes aos elementos.
  linkListElement.classList.add('navbar__link-list')
  navbarElement.classList.add('navbar__container')
  rightContainerElement.classList.add('navbar__right-container')

  // Configura o logo.
  logoElement.setAttribute('href', '')
  logoElement.innerText = 'LOGO'

  categories.forEach((category: string): void => {
    // Cria e anexa os elementos de link à lista.
    const pageItemElement = linkListElement.appendChild(document.createElement('li'))
    const linkElement = pageItemElement.appendChild(document.createElement('a'))

    linkElement.setAttribute('href', `${category}`)
    linkElement.classList.add('navbar__page-link')
    linkElement.innerText = categoriesMapper[category]
  })

  function setNavbarByScreenSize (isSmallScreen: boolean): void {
    isSmallScreen
      ? setupMobileNavbar(rightContainerElement, linkListElement)
      : setupDesktopNavbar(rightContainerElement, linkListElement)
  }

  setupScreenObserver(() => {
    const isSmallScreen = isMobile(screenSize) || isMedium(screenSize)
    const isOldSmallScreen = isMobile(oldScreenSize) || isMedium(oldScreenSize)

    // Verifica se mantém o mesmo tamanho de tela.
    const isSameScreenSize = (
      (isSmallScreen && isOldSmallScreen) ||
      (isLarge(oldScreenSize) && isLarge(screenSize))
    )

    if (isSameScreenSize) return

    setNavbarByScreenSize(isSmallScreen)
  })

  const isSmallScreen = isMobile(screenSize) || isMedium(screenSize)

  // Inicia o menu de acordo com o tamanho da tela.
  setNavbarByScreenSize(isSmallScreen)
}
