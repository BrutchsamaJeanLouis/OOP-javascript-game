import { KeyConstants } from '../utils/KeyConstants.js'
import { StateConstants } from '../utils/StateConstants.js'
import InputHandler from './InputHandler.js'
export default class Player {
  // Attributes
  private gameWidth: number
  private gameHeight: number
  private states: []
  private currentState: string
  private image
  private spriteIndex: number
  private width: number
  private hitBoxXaxis: number
  private height: number
  private posX: number
  private poxY: number
  private speed: number
  private maxSpeed: number
  private jumpHeight: number
  private groundHeight: number
  private isOnGround: boolean

  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.states = []
    this.currentState = StateConstants.player.STANDING_RIGHT
    this.spriteIndex = 1
    this.image = document.getElementById(`dinoRunRight-${this.spriteIndex}`)
    this.width = 0.6 * Math.floor(gameWidth / 2) // 200
    this.height = 0.8 * Math.floor(gameHeight / 2) // 150
    this.hitBoxXaxis = this.width / 1.5 // png image has extra padded area
    this.posX = (this.gameWidth / 2) - this.width * 0.4
    this.groundHeight = this.gameHeight - (this.height * 1.3)
    this.poxY = this.gameHeight - (this.height * 1.3)
    this.speed = 0.05 * gameWidth / 2
    this.maxSpeed = 10
    this.jumpHeight = this.gameHeight - 50
    this.isOnGround = true
  }

  public getState () {
    return this.currentState
  }

  public draw (canvasContext: CanvasRenderingContext2D, deltaTime: number) {
    canvasContext.drawImage(this.image, this.posX, this.poxY, this.width, this.height)
    canvasContext.restore()
  }

  public update (inputLastKey: string) {
    if (inputLastKey === KeyConstants.pressRight) {
      // if (this.posX > this.gameWidth - this.hitBoxXaxis) return // avoid running off screen
      this.runRight()
    }
    if (inputLastKey === KeyConstants.pressLeft) {
      // if (this.posX <= 0) return // avoid running off screen
      this.runLeft()
    }
    if (inputLastKey === KeyConstants.releaseLeft) {
      this.idleStandLeft()
    }
    if (inputLastKey === KeyConstants.releaseRight) {
      this.idleStandRight()
    }
    if (inputLastKey === KeyConstants.pressUp) {
      this.jump()
    }

    // FIXME currently falling only happens while jump button is pressed
    // need to give this function behavior to always simulate gravity on update frame
    this.simulateGravity()
  }

  private runRight () {
    // change state
    this.currentState = StateConstants.player.RUNNING_RIGHT
    // move
    // this.posX += this.speed

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
    // change state
    this.currentState = StateConstants.player.RUNNING_LEFT

    // move
    // no need to really move the character since the background class will move instead
    // this.posX -= this.speed

    // animate
    // also checks if this is the last animation to the reset number
    if (this.spriteIndex === 8) {
      this.spriteIndex = 1
    } else {
      this.image = document.getElementById(`dinoRunLeft-${this.spriteIndex}`)
      this.spriteIndex++
    }
  }

  private jump () {
    // if already in air don't jump again
    if (this.currentState !== StateConstants.player.FALLING) {
      this.currentState = StateConstants.player.JUMPING
    }
    this.isOnGround = false
    console.log(this.poxY, this.jumpHeight, this.groundHeight, this.currentState)
    if (this.poxY > 0 && this.currentState !== StateConstants.player.FALLING) {
      // jumping
      console.log('increasing jump')
      this.poxY -= 10
      console.log(this.poxY, this.jumpHeight, this.groundHeight, this.currentState)
    } else {
      console.log('reached max jump height')
      // checking if player is already on ground before we make him falling
      if (this.poxY === this.groundHeight) {
        console.log('Player is gorunded')
        this.isOnGround = true
        this.currentState = StateConstants.player.STANDING_RIGHT
      } else {
        console.log('trying to fall')
        this.currentState = StateConstants.player.FALLING
        this.poxY += 10
      }
    }
  }

  private simulateGravity () {
    console.log('TODO')
  }

  private idleStandLeft () {
    // change state
    this.currentState = this.currentState = StateConstants.player.STANDING_LEFT
    this.spriteIndex = 1
    this.image = document.getElementById(`dinoRunLeft-${this.spriteIndex}`)
  }

  private idleStandRight () {
    // change state
    this.currentState = this.currentState = StateConstants.player.STANDING_RIGHT
    this.spriteIndex = 1
    this.image = document.getElementById(`dinoRunRight-${this.spriteIndex}`)
  }
}
