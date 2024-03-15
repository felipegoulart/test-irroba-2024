// import components
import '@manufosela/stars-rating'
import { register } from 'swiper/element/bundle'
import { setupShowCase, setupNavbar } from './components'
import { categories, setCategories } from './store'

// register Swiper custom elements
register()

// Configura os componentes
await setupNavbar()

await (async () => {
  await setCategories()

  try {
    await setupShowCase('products/category/jewelery', 'Joias')
    // await Promise.allSettled()
  } catch (e) {
    console.error(e)
  }
})()
