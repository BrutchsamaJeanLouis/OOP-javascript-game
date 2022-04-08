class Layer {
  game: any
  gameWidth: any
  gameHeight: any
  height: any
  width: any
  speedModifier: any
  image: any
  constructor (game, gameWidth, gameHeight, width, height, speedModifier, image) {
    this.game = game
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.height = height
    this.width = width
    this.speedModifier = speedModifier
    this.image = image
  }
}
