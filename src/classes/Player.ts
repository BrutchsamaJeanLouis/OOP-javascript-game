export default class Player {
  // Attributes
  private gameWidth: number
  private gameHeight: number
  private states: []
  private currentState: any[]
  private image
  private width: number
  private height: number
  private posX: number
  private poxY: number

  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.states = []
    this.currentState = []
    this.image = document.getElementById('dinoRun1')
    this.width = 200
    this.height = 181.83
    this.posX = 0
    this.poxY = 0
  }

  public draw (canvasContext: CanvasRenderingContext2D) {
    canvasContext.drawImage(this.image, this.posX, this.poxY)
  }
}
