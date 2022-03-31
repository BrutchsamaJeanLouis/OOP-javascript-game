import Player from './classes/Player'

window.addEventListener('load', () => {
  const loading : HTMLElement = document.getElementById('loading')
  loading.style.display = 'none'
  const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const player = new Player(canvas.width, canvas.height)
  player.draw(ctx)
})

console.log('hell yes')
