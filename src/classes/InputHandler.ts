import { KeyConstants } from '../utils/KeyConstants.js'
export default class InputHandler {
  private lastKey: string

  constructor () {
    this.lastKey = ''
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.lastKey = KeyConstants.pressLeft
          break
        case 'ArrowRight':
          this.lastKey = KeyConstants.pressRight
          break
      }
    })
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.lastKey = KeyConstants.releaseLeft
          break
        case 'ArrowRight':
          this.lastKey = KeyConstants.releaseRight
      }
    })
  }

  public getLastKey () {
    return this.lastKey
  }
}
