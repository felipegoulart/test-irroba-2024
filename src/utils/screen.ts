let screenSize: number = window.innerWidth
let oldScreenSize: number = window.innerWidth

function setupScreenObserver (callback?: any): void {
  addEventListener('resize', (): void => {
    // Faz cache do tamanho da tela
    oldScreenSize = screenSize

    screenSize = window.innerWidth

    callback?.(screenSize, oldScreenSize)
  })
}

function isMobile (value: number): boolean {
  return value < 360
}

function isMedium (value: number): boolean {
  return value > 360 && value < 1023
}

function isLarge (value: number): boolean {
  return value > 1024
}

export {
  screenSize,
  oldScreenSize,

  isLarge,
  isMedium,
  isMobile,
  setupScreenObserver
}
