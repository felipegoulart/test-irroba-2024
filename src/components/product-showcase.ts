export function setupProductShowcase (product: any): HTMLDivElement {
  const containerElement = document.createElement('div')
  const titleElement = document.createElement('h2')

  titleElement.innerText = product?.title

  containerElement.classList.add('product-showcase__container')

  containerElement.appendChild(titleElement)

  return containerElement
}
