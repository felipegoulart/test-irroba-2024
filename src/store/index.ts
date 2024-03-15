import { api } from '../api'
import { type Product } from '../types'

let categories: string[] = []

async function fetchAllProducts (): Promise<Product[]> {
  return await api.get('products')
}

async function fetchProductsByCategory (category: string): Promise<Product[]> {
  return await api.get(`products/category/${category}`)
}

async function fetchProductByID (id: string | number): Promise<Product> {
  return await api.get(`products/${id}`)
}

async function setCategories (): Promise<void> {
  categories = await api.get('products/categories')
}

export {
  categories,
  setCategories,
  fetchAllProducts,
  fetchProductByID,
  fetchProductsByCategory
}
