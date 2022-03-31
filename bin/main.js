import Player from './classes/Player.js';
window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
});
console.log('hell yes');
//# sourceMappingURL=main.js.map