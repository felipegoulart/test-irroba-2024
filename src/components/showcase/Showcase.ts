import { api } from '../../api'
import { setupProductShowcase } from './ShowcaseProduct'
import { type Product } from '../../types'

export async function setupShowcase (path: string, title: string): Promise<void> {
  const { data } = await api.get(path)

  const showcaseElement = document.querySelector('.showcase')

  const categoryShowcaseElement = document.createElement('div')
  const titleShowcaseCategoryElement = document.createElement('h2')
  const productListElement = document.createElement('div')

  showcaseElement?.appendChild(categoryShowcaseElement)

  categoryShowcaseElement.appendChild(titleShowcaseCategoryElement)
  categoryShowcaseElement.appendChild(productListElement)

  categoryShowcaseElement.classList.add('showcase__category')

  titleShowcaseCategoryElement.classList.add('showcase__category-title')

  productListElement.classList.add('showcase__product-list')

  data?.forEach((product: Product) => {
    productListElement.appendChild(setupProductShowcase(product))
  })

  titleShowcaseCategoryElement.innerText = title
  titleShowcaseCategoryElement.innerText = title
}
