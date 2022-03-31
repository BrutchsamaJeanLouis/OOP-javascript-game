import InputHandler from './classes/InputHandler.js';
import Player from './classes/Player.js';
window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var inputHandler = new InputHandler();
    console.log(inputHandler.getLastKey());
    var player = new Player(canvas.width, canvas.height);
    var lastTime = 0;
    function animateLoop(timeStamp) {
        var deltaTime = timeStamp - lastTime;
        console.log(inputHandler.getLastKey(), timeStamp);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update(inputHandler.getLastKey());
        player.draw(ctx, deltaTime);
        requestAnimationFrame(animateLoop);
    }
    animateLoop(0);
});
console.log('hell yes');
//# sourceMappingURL=main.js.map