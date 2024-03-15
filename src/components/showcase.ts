import { api } from '../api'
import { setupProductShowcase } from './product-showcase'

export async function setupShowCase () {
  const { data } = await api.get('products/category/jewelery')
  
  const productsShowcaseElement = document.querySelector('.showcase')
  
  data?.forEach((item: any) => {  
    const productElement = setupProductShowcase(item)
  
    productsShowcaseElement?.appendChild(productElement)
  })
  
  console.log(data)
}
