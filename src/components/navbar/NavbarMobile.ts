import { disableScroll, enableScroll } from '../../utils'

// TODO: Organizar
export function setupMobileNavbar (container: HTMLElement, linkListElement: HTMLUListElement): void {
  const menuButtonElement = document.createElement('button')
  const navbarDialogElement = document.createElement('dialog')
  const dialogContainerElement = document.createElement('div')
  const dialogHeaderElement = document.createElement('header')
  const dialogFooterElement = document.createElement('footer')
  const closeDialogButtonElement = document.createElement('button')

  const cartIconElement = document.createElement('span')
  const cartTextElement = document.createElement('span')
  const cartElement = document.createElement('a')

  const userIconElement = document.createElement('span')
  const userTextElement = document.createElement('span')
  const userElement = document.createElement('a')

  dialogHeaderElement.appendChild(closeDialogButtonElement)

  dialogFooterElement.appendChild(cartElement)
  dialogFooterElement.appendChild(userElement)

  userElement.appendChild(userIconElement)
  userElement.appendChild(userTextElement)

  dialogContainerElement.appendChild(dialogHeaderElement)
  dialogContainerElement.appendChild(linkListElement)
  dialogContainerElement.appendChild(dialogFooterElement)

  navbarDialogElement.classList.add('navbar-dialog')
  dialogContainerElement.classList.add('navbar-dialog__container')

  dialogHeaderElement.classList.add('navbar-dialog__header')
  linkListElement.classList.add('navbar__link-list--mobile')
  dialogFooterElement.classList.add('navbar-dialog__footer')

  menuButtonElement.classList.add('material-symbols-outlined')

  cartElement.classList.add('navbar__cart-link')
  cartIconElement.classList.add('material-symbols-outlined')

  userElement.classList.add('navbar__cart-link')
  userIconElement.classList.add('material-symbols-outlined')

  menuButtonElement.innerText = 'menu'

  cartIconElement.innerText = 'shopping_cart'
  cartTextElement.innerText = 'Carrinho'

  userIconElement.innerText = 'person'
  userTextElement.innerText = 'Sua conta'

  cartElement.setAttribute('href', 'cart')
  userElement.setAttribute('href', 'profile')

  // Modifica o tipo de botão, pois o padrão é submit.
  menuButtonElement.setAttribute('type', 'button')
  closeDialogButtonElement.setAttribute('type', 'button')

  closeDialogButtonElement.classList.add('material-symbols-outlined', 'navbar-dialog__close-button')
  closeDialogButtonElement.innerText = 'close'

  menuButtonElement.addEventListener('click', () => {
    navbarDialogElement.show()
    disableScroll()
  })

  closeDialogButtonElement.addEventListener('click', () => {
    navbarDialogElement.close()
    enableScroll()
  })

  navbarDialogElement.appendChild(dialogContainerElement)

  container.replaceChildren(menuButtonElement, navbarDialogElement)
}
