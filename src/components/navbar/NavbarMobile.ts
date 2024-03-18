import { disableScroll, enableScroll } from '../../utils'

// TODO: Organizar
export function setupMobileNavbar (container: HTMLElement, linkListElement: HTMLUListElement): void {
  // Elementos que compõe os blocos do dialog.
  const navbarDialogElement = document.createElement('dialog')
  const dialogContainerElement = document.createElement('div')
  const dialogHeaderElement = document.createElement('header')
  const dialogFooterElement = document.createElement('footer')

  dialogContainerElement.appendChild(dialogHeaderElement)
  dialogContainerElement.appendChild(linkListElement)
  dialogContainerElement.appendChild(dialogFooterElement)

  navbarDialogElement.classList.add('navbar-dialog')

  dialogContainerElement.classList.add('navbar-dialog__container')

  linkListElement.classList.add('navbar__link-list--mobile')

  dialogHeaderElement.classList.add('navbar-dialog__header')

  dialogFooterElement.classList.add('navbar-dialog__footer')

  navbarDialogElement.appendChild(dialogContainerElement)

  // Botão de abrir dialog.
  const menuButtonElement = document.createElement('button')

  menuButtonElement.setAttribute('type', 'button')

  menuButtonElement.classList.add('material-symbols-outlined')

  menuButtonElement.innerText = 'menu'

  menuButtonElement.addEventListener('click', () => {
    navbarDialogElement.show()
    disableScroll()
  })

  // Botão de fechar dialog.
  const closeDialogButtonElement = document.createElement('button')

  dialogHeaderElement.appendChild(closeDialogButtonElement)

  closeDialogButtonElement.setAttribute('type', 'button')

  closeDialogButtonElement.classList.add('material-symbols-outlined', 'navbar-dialog__close-button')

  closeDialogButtonElement.innerText = 'close'

  closeDialogButtonElement.addEventListener('click', () => {
    navbarDialogElement.close()

    enableScroll()
  })

  // Opção de carrinho.
  const cartElement = document.createElement('a')
  const cartIconElement = document.createElement('span')
  const cartTextElement = document.createElement('span')

  dialogFooterElement.appendChild(cartElement)
  cartElement.appendChild(cartIconElement)
  cartElement.appendChild(cartTextElement)

  cartElement.setAttribute('href', 'cart')

  cartElement.classList.add('navbar__cart-link')
  cartIconElement.classList.add('material-symbols-outlined')

  cartIconElement.innerText = 'shopping_cart'
  cartTextElement.innerText = 'Carrinho'

  // Opção de usuário.
  const userIconElement = document.createElement('span')
  const userTextElement = document.createElement('span')
  const userElement = document.createElement('a')

  dialogFooterElement.appendChild(userElement)
  userElement.appendChild(userIconElement)
  userElement.appendChild(userTextElement)

  userElement.setAttribute('href', 'profile')

  userElement.classList.add('navbar__user-link')
  userIconElement.classList.add('material-symbols-outlined')

  userIconElement.innerText = 'person'
  userTextElement.innerText = 'Sua conta'

  container.replaceChildren(menuButtonElement, navbarDialogElement)
}
