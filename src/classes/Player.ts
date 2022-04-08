import { KeyConstants } from '../utils/KeyConstants.js'
import InputHandler from './InputHandler.js'

const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1
}
export default class Player {
  // Attributes
  private gameWidth: number
  private gameHeight: number
  private states: []
  private currentState: any[]
  private image
  private spriteIndex: number
  private width: number
  private hitBoxXaxis: number
  private height: number
  private posX: number
  private poxY: number
  private speed: number
  private maxSpeed: number

  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.states = []
    this.currentState = []
    this.spriteIndex = 1
    this.image = document.getElementById(`dinoRunRight-${this.spriteIndex}`)
    this.width = 0.6 * Math.floor(gameWidth / 2) // 200
    this.height = 0.8 * Math.floor(gameHeight / 2) // 150
    this.hitBoxXaxis = this.width / 1.5 // png image has extra padded area
    this.posX = 0
    this.poxY = this.gameHeight - this.height
    this.speed = 0.05 * gameWidth / 2
    this.maxSpeed = 10
  }

  public draw (canvasContext: CanvasRenderingContext2D, deltaTime: number) {
    canvasContext.drawImage(this.image, this.posX, this.poxY, this.width, this.height)
    console.log(this.width, this.height)
    canvasContext.restore()
    // console.log(this.posX)
  }

  public update (inputLastKey: string) {
    if (inputLastKey === KeyConstants.pressRight) {
      if (this.posX > this.gameWidth - this.hitBoxXaxis) return // avoid running off screen
      this.runRight()
    }
    if (inputLastKey === KeyConstants.pressLeft) {
      if (this.posX <= 0) return // avoid running off screen
      this.runLeft()
    }
    if (inputLastKey === KeyConstants.releaseLeft) {
      this.idleStandLeft()
    }
    if (inputLastKey === KeyConstants.releaseRight) {
      this.idleStandRight()
    }
  }

  private runRight () {
    // move
    this.posX += this.speed

    // animate
    // also checks if this is the last animation to the reset number
    if (this.spriteIndex === 8) {
      this.spriteIndex = 1
    } else {
      this.image = document.getElementById(`dinoRunRight-${this.spriteIndex}`)
      this.spriteIndex++
    }
  }

  private runLeft () {
    this.posX -= this.speed

    // animate
    // also checks if this is the last animation to the reset number
    if (this.spriteIndex === 8) {
      this.spriteIndex = 1
    } else {
      this.image = document.getElementById(`dinoRunLeft-${this.spriteIndex}`)
      this.spriteIndex++
    }
  }

  private idleStandLeft () {
    this.spriteIndex = 1
    this.image = document.getElementById(`dinoRunLeft-${this.spriteIndex}`)
  }

  private idleStandRight () {
    this.spriteIndex = 1
    this.image = document.getElementById(`dinoRunRight-${this.spriteIndex}`)
  }
}
