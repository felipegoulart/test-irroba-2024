import { api } from '../api'
import { type Product } from '../types'
import { setupProductShowcase } from './showcase-product'

export async function setupShowCase (path: string, title: string): Promise<void> {
  const { data } = await api.get(path)

  const showcaseElement = document.querySelector('.showcase')
  const categoryShowcaseElement = showcaseElement?.appendChild(document.createElement('div'))
  const titleShowcaseCategoryElement = categoryShowcaseElement?.appendChild(document.createElement('h2'))
  const productListElement = categoryShowcaseElement?.appendChild(document.createElement('div'))

  categoryShowcaseElement?.classList.add('showcase__category')
  productListElement?.classList.add('showcase__product-list')

  if (titleShowcaseCategoryElement !== undefined) {
    titleShowcaseCategoryElement.classList.add('showcase__category-title')
    titleShowcaseCategoryElement.innerText = title
  }

  data?.forEach((product: Product) => {
    productListElement?.appendChild(setupProductShowcase(product))
  })
}
