import InputHandler from './classes/InputHandler.js'
import Player from './classes/Player.js'

window.addEventListener('load', () => {
  const loading : HTMLElement = document.getElementById('loading')
  loading.style.display = 'none'
  const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const inputHandler = new InputHandler()
  console.log(inputHandler.getLastKey())
  const player = new Player(canvas.width, canvas.height)

  let lastTime: number = 0
  function animateLoop (timeStamp: number) {
    const deltaTime = timeStamp - lastTime
    console.log(inputHandler.getLastKey(), timeStamp)

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw next frame
    player.update(inputHandler.getLastKey())
    player.draw(ctx, deltaTime)

    requestAnimationFrame(animateLoop)
  }
  animateLoop(0)
})

console.log('hell yes')
