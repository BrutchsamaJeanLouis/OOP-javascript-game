import InputHandler from './classes/InputHandler.js';
import Player from './classes/Player.js';
window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = canvas.width / 2.031;
    var inputHandler = new InputHandler();
    console.log(inputHandler.getLastKey());
    var player = new Player(canvas.width, canvas.height);
    var famesPerSecond = 30;
    var frameTick = 0;
    var lastTime = 0;
    function animateLoop(timeStamp) {
        var deltaTime = timeStamp - lastTime;
        lastTime = deltaTime;
        if (frameTick > 1000 / famesPerSecond) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            player.update(inputHandler.getLastKey());
            player.draw(ctx, deltaTime);
            frameTick = 0;
        }
        else {
            frameTick += deltaTime;
        }
        requestAnimationFrame(animateLoop);
    }
    animateLoop(0);
});
window.addEventListener('resize', function () {
    var canvas = document.getElementById('canvas1');
    canvas.height = canvas.width / 2.031;
});
//# sourceMappingURL=main.js.map