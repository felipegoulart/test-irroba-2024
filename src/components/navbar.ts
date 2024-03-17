import { categoriesMapper } from '../utils/mappers'

export async function setupNavbar (categories: string[]): Promise<void> {
  const navbarHeaderAnchor: HTMLHeadingElement | null = document.querySelector('.navbar')

  // Anexa ao header.navbar os elementos raiz que compõe a barra de navegação.
  const navbarElement = navbarHeaderAnchor?.appendChild(document.createElement('nav'))
  const logoElement = navbarElement?.appendChild(document.createElement('a'))
  const rightContainerElement = navbarElement?.appendChild(document.createElement('div'))

  // Anexa ao conteiner da direita os elementos de navegação de página, carrinho e usuário
  const pageLinkListElement = rightContainerElement?.appendChild(document.createElement('ul'))
  const cartElement = rightContainerElement?.appendChild(document.createElement('button'))
  const userElement = rightContainerElement?.appendChild(document.createElement('button'))

  navbarElement?.classList.add('navbar__container')
  rightContainerElement?.classList.add('navbar__right-container')
  pageLinkListElement?.classList.add('navbar__link-list')

  if (logoElement !== undefined) {
    logoElement.setAttribute('href', '')
    logoElement.classList.add('navbar__cart-button')
    logoElement.innerText = 'LOGO'
  }

  if (cartElement !== undefined) {
    cartElement.classList.add('material-symbols-outlined', 'navbar__cart-button')
    cartElement.innerText = 'shopping_cart'
  }

  if (userElement !== undefined) {
    userElement.classList.add('material-symbols-outlined', 'navbar__user-button')
    userElement.innerText = 'person'
  }

  categories.forEach((category: string): void => {
    const pageItemElement = pageLinkListElement?.appendChild(document.createElement('li'))
    const linkElement = pageItemElement?.appendChild(document.createElement('a'))

    if (linkElement !== undefined) {
      linkElement.setAttribute('href', `${category}`)
      linkElement.classList.add('navbar__page-link')
      linkElement.innerText = categoriesMapper[category]
    }
  })
}
