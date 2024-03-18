// import components
import '@manufosela/stars-rating'
import { setupShowcase, setupNavbar, setupeHeaderBanners } from './components'
import { categories, setCategories } from './store'
import { categoriesMapper } from './utils'

// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/pagination'

// Configura os componentes
void (async () => {
  await setCategories()

  await setupNavbar()

  setupeHeaderBanners()

  try {
    const showcases = categories.map((category: string): any => {
      return setupShowcase(`products/category/${category}`, categoriesMapper[category] as string)
    })

    await Promise.allSettled(showcases)
  } catch (e) {
    console.error(e)
  }
})()
