import Swiper from 'swiper'

import { api } from '../api'
import { setupProductShowcase } from './showcase-product/showcase-product'
import { type Product } from '../types'

export async function setupShowcase (path: string, title: string): Promise<void> {
  const { data } = await api.get(path)

  const showcaseElement = document.querySelector('.showcase')

  const categoryShowcaseElement = document.createElement('div')
  const titleShowcaseCategoryElement = document.createElement('h2')
  const productSliderElement = document.createElement('div')
  const swiperWrapperElement = document.createElement('div')

  showcaseElement?.appendChild(categoryShowcaseElement)
  categoryShowcaseElement.appendChild(productSliderElement)
  categoryShowcaseElement.appendChild(titleShowcaseCategoryElement)
  categoryShowcaseElement.appendChild(titleShowcaseCategoryElement)
  productSliderElement.appendChild(swiperWrapperElement)

  categoryShowcaseElement.classList.add('showcase__category')
  productSliderElement.classList.add('showcase__product-', 'swiper')
  swiperWrapperElement.classList.add('showcase__product-list', 'swiper-wraper')

  const swiper = new Swiper(categoryShowcaseElement)

  titleShowcaseCategoryElement.classList.add('showcase__category-title')
  titleShowcaseCategoryElement.innerText = title
  titleShowcaseCategoryElement.innerText = title

  data?.forEach((product: Product) => {
    productSliderElement.appendChild(setupProductShowcase(product))
  })
}
