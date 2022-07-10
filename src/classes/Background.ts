import Player from './Player.js'
import { StateConstants } from '../utils/StateConstants.js'

export default class Layer {
  game: any
  gameWidth: any
  gameHeight: any
  height: any
  width: any
  speedModifier: any
  image: any
  posX: number
  posY: number
  speed: number
  player: Player

  constructor (gameWidth, gameHeight, width, height, player, speedModifier) {
    // this.game = game
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.height = height
    this.width = width
    this.speedModifier = speedModifier
    this.speed = 10
    this.image = document.getElementById('background-img')
    this.posX = 0
    this.posY = 0
    this.player = player
  }

  draw (context: CanvasRenderingContext2D) {
    // 3 images stick together -  left, center, right
    context.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    context.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height)
    context.drawImage(this.image, this.posX - this.width, this.posY, this.width, this.height)
  }

  update () {
    if (this.posX < -this.width) {
      console.log('went off screen looping image right side')
      this.posX = 0
    } else {
      // TODO
      // Only move while player is moving
      if (this.player.getState() === StateConstants.player.RUNNING_RIGHT) {
        // pan background to the right
        this.posX -= this.speed
      }
      if (this.player.getState() === StateConstants.player.RUNNING_LEFT) {
        // pan background to the left
        if (this.posX > this.width) {
          console.log('went off screen looping image left side')
          this.posX = -this.width
        }
        this.posX += this.speed
      }
    }
  }
}
