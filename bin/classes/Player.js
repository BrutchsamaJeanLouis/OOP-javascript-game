import { KeyConstants } from '../utils/KeyConstants.js';
import { StateConstants } from '../utils/StateConstants.js';
var Player = (function () {
    function Player(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = StateConstants.player.STANDING_RIGHT;
        this.spriteIndex = 1;
        this.image = document.getElementById("dinoRunRight-".concat(this.spriteIndex));
        this.width = 0.6 * Math.floor(gameWidth / 2);
        this.height = 0.8 * Math.floor(gameHeight / 2);
        this.hitBoxXaxis = this.width / 1.5;
        this.posX = (this.gameWidth / 2) - this.width * 0.4;
        this.poxY = this.gameHeight - (this.height * 1.3);
        this.speed = 0.05 * gameWidth / 2;
        this.maxSpeed = 10;
    }
    Player.prototype.getState = function () {
        return this.currentState;
    };
    Player.prototype.draw = function (canvasContext, deltaTime) {
        canvasContext.drawImage(this.image, this.posX, this.poxY, this.width, this.height);
        canvasContext.restore();
    };
    Player.prototype.update = function (inputLastKey) {
        if (inputLastKey === KeyConstants.pressRight) {
            this.runRight();
        }
        if (inputLastKey === KeyConstants.pressLeft) {
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
        this.currentState = StateConstants.player.RUNNING_RIGHT;
        if (this.spriteIndex === 8) {
            this.spriteIndex = 1;
        }
        else {
            this.image = document.getElementById("dinoRunRight-".concat(this.spriteIndex));
            this.spriteIndex++;
        }
    };
    Player.prototype.runLeft = function () {
        this.currentState = StateConstants.player.RUNNING_LEFT;
        if (this.spriteIndex === 8) {
            this.spriteIndex = 1;
        }
        else {
            this.image = document.getElementById("dinoRunLeft-".concat(this.spriteIndex));
            this.spriteIndex++;
        }
    };
    Player.prototype.jump = function () {
    };
    Player.prototype.idleStandLeft = function () {
        this.currentState = this.currentState = StateConstants.player.STANDING_LEFT;
        this.spriteIndex = 1;
        this.image = document.getElementById("dinoRunLeft-".concat(this.spriteIndex));
    };
    Player.prototype.idleStandRight = function () {
        this.currentState = this.currentState = StateConstants.player.STANDING_RIGHT;
        this.spriteIndex = 1;
        this.image = document.getElementById("dinoRunRight-".concat(this.spriteIndex));
    };
    return Player;
}());
export default Player;
//# sourceMappingURL=Player.js.map