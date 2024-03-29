import { type Product } from '../../types'
import { parseToBRL } from '../../utils'

export function setupProductShowcase (product: Product): HTMLDivElement {
  const containerElement = document.createElement('div')

  const imageContainerElement = containerElement.appendChild(document.createElement('div'))
  const imageElement = imageContainerElement.appendChild(document.createElement('img'))
  const titleElement = containerElement.appendChild(document.createElement('h3'))
  const ratingContainerElement = containerElement.appendChild(document.createElement('div'))
  const priceElement = containerElement.appendChild(document.createElement('p'))

  const rateStarsElement = ratingContainerElement.appendChild(document.createElement('stars-rating'))
  const rateCountElement = ratingContainerElement.appendChild(document.createElement('span'))

  containerElement.classList.add('showcase-product__container')

  imageElement.setAttribute('src', product.image)
  imageContainerElement.classList.add('showcase-product__image-container')
  imageElement.classList.add('showcase-product__image')

  titleElement.innerText = product.title
  titleElement.classList.add('showcase-product__title')

  priceElement.innerText = parseToBRL(product.price)
  priceElement.classList.add('showcase-product__price')

  // Estilização e configuração da avaliação do produto
  ratingContainerElement.classList.add('showcase-product__rating-container')
  rateStarsElement.style.setProperty('font-size', '1rem')
  rateStarsElement.setAttribute('numstars', '5')
  rateStarsElement.setAttribute('rating', String(product.rating.rate))

  rateCountElement.innerText = `(${product.rating.count})`

  return containerElement
}
