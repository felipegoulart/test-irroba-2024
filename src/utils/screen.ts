interface IScreen {
  screenSize: number
  callback?: () => void
  isMobile: () => boolean
  isMedium: () => boolean
  isLarge: () => boolean
}

export class Screen implements IScreen {
  screenSize: number
  readonly callback

  constructor (callback: any) {
    this.callback = callback

    // Inicia o screensize com o tamanho da tela
    this.screenSize = window.innerWidth

    addEventListener('resize', (): void => {
      this.screenSize = window.innerWidth

      this.callback?.(this)
    })
  }

  public isMobile (): boolean {
    return this.screenSize < 360
  }

  public isMedium (): boolean {
    return this.screenSize > 360 && this.screenSize < 1023
  }

  public isLarge (): boolean {
    return this.screenSize > 1024
  }

  init (): void {
    this.callback(this)
  }
}
