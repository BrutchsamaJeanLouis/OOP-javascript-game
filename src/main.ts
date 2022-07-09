import InputHandler from './classes/InputHandler.js'
import Player from './classes/Player.js'
import Background from './classes/Background.js'

window.addEventListener('load', () => {
  const loading : HTMLElement = document.getElementById('loading')
  loading.style.display = 'none'
  const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  // ctx.imageSmoothingEnabled = false
  canvas.width = window.innerWidth
  // canvas.height = 720 // window.innerHeight
  canvas.height = canvas.width / 2.031

  const inputHandler = new InputHandler()
  console.log(inputHandler.getLastKey())
  const player = new Player(canvas.width, canvas.height)
  const background = new Background(canvas.width, canvas.height, canvas.width, canvas.height, player, 1)

  const famesPerSecond = 30
  let frameTick = 0
  let lastTime: number = 0
  function animateLoop (timeStamp: number) {
    const deltaTime = timeStamp - lastTime
    lastTime = deltaTime
    if (frameTick > 1000 / famesPerSecond) {
      // clear canvas & draw next frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // render background update
      background.update()
      background.draw(ctx)
      // render player State
      player.update(inputHandler.getLastKey())
      player.draw(ctx, deltaTime)

      // at the end reset frame tick
      frameTick = 0
    } else {
      // do not render - too soon to redraw frame
      frameTick += deltaTime
    }
    // console.log(inputHandler.getLastKey(), timeStamp)

    // clear canvas
    // ctx.clearRect(0, 0, canvas.width, canvas.height)

    // // draw next frame
    // player.update(inputHandler.getLastKey())
    // player.draw(ctx, deltaTime)

    requestAnimationFrame(animateLoop)
  }
  animateLoop(0)
})

// Scale game width/ game height with aspect ratio
window.addEventListener('resize', () => {
  // const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas1')
  // canvas.height = canvas.width / 2.031
})
