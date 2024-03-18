import { enableScroll } from '../../utils'

export function setupDesktopNavbar (container: HTMLElement, linkListElement: HTMLUListElement): void {
  // Ativa o scroll para o caso de ter sido desativado no dialog do menu.
  enableScroll()

  // Anexa ao conteiner da direita os elementos de navegação de página, carrinho e usuário.
  const cartElement = document.createElement('button')
  const userElement = document.createElement('button')

  linkListElement.classList.add('navbar__link-list--desktop')
  cartElement.classList.add('material-symbols-outlined')
  userElement.classList.add('material-symbols-outlined')

  cartElement.innerText = 'shopping_cart'
  userElement.innerText = 'person'

  container.replaceChildren(linkListElement, cartElement, userElement)
}
