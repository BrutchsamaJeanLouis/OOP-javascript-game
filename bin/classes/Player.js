"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = (function () {
    function Player(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = [];
        this.image = document.getElementById('dinoRun1');
        this.width = 200;
        this.height = 181.83;
        this.posX = 0;
        this.poxY = 0;
    }
    Player.prototype.draw = function (canvasContext) {
        canvasContext.drawImage(this.image, this.posX, this.poxY);
    };
    return Player;
}());
exports.default = Player;
