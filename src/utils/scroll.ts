const bodyElement = document.querySelector('body')

export function toggleScroll (): void {
  bodyElement?.classList.contains('scroll--disabled') === true
    ? bodyElement?.classList.remove('scroll--disabled')
    : bodyElement?.classList.add('scroll--disabled')
}

export function enableScroll (): void {
  bodyElement?.classList.remove('scroll--disabled')
}

export function disableScroll (): void {
  bodyElement?.classList.add('scroll--disabled')
}
