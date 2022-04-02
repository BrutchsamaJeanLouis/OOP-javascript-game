import { KeyConstants } from '../utils/KeyConstants.js';
var states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1
};
var Player = (function () {
    function Player(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = [];
        this.spriteIndex = 1;
        this.image = document.getElementById("dinoRunRight-".concat(this.spriteIndex));
        this.width = 200;
        this.hitBox = this.width / 1.5;
        this.height = 150;
        this.posX = 0;
        this.poxY = 0;
        this.speed = 10;
        this.maxSpeed = 10;
    }
    Player.prototype.draw = function (canvasContext, deltaTime) {
        canvasContext.drawImage(this.image, this.posX, this.poxY, this.width, this.height);
        canvasContext.restore();
        console.log(this.posX);
    };
    Player.prototype.update = function (inputLastKey) {
        if (inputLastKey === KeyConstants.pressRight) {
            if (this.posX > this.gameWidth - this.hitBox)
                return;
            this.runRight();
        }
        if (inputLastKey === KeyConstants.pressLeft) {
            if (this.posX === 0)
                return;
            this.runLeft();
        }
        if (inputLastKey === KeyConstants.releaseLeft) {
            this.idleStandLeft();
        }
        if (inputLastKey === KeyConstants.releaseRight) {
            this.idleStandRight();
        }
    };
    Player.prototype.runRight = function () {
        this.posX += this.speed;
        if (this.spriteIndex === 8) {
            this.spriteIndex = 1;
        }
        else {
            this.image = document.getElementById("dinoRunRight-".concat(this.spriteIndex));
            this.spriteIndex++;
        }
    };
    Player.prototype.runLeft = function () {
        this.posX -= this.speed;
        if (this.spriteIndex === 8) {
            this.spriteIndex = 1;
        }
        else {
            this.image = document.getElementById("dinoRunLeft-".concat(this.spriteIndex));
            this.spriteIndex++;
        }
    };
    Player.prototype.idleStandLeft = function () {
        this.spriteIndex = 1;
        this.image = document.getElementById("dinoRunLeft-".concat(this.spriteIndex));
    };
    Player.prototype.idleStandRight = function () {
        this.spriteIndex = 1;
        this.image = document.getElementById("dinoRunRight-".concat(this.spriteIndex));
    };
    return Player;
}());
export default Player;
//# sourceMappingURL=Player.js.map