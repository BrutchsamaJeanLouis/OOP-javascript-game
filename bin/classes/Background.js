import { StateConstants } from "../utils/StateConstants.js";
var Layer = (function () {
    function Layer(gameWidth, gameHeight, width, height, player, speedModifier) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.height = height;
        this.width = width;
        this.speedModifier = speedModifier;
        this.speed = 10;
        this.image = document.getElementById('background-img');
        this.posX = 0;
        this.posY = 0;
        this.player = player;
    }
    Layer.prototype.draw = function (context) {
        context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        context.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
        context.drawImage(this.image, this.posX - this.width, this.posY, this.width, this.height);
    };
    Layer.prototype.update = function () {
        if (this.posX < -this.width) {
            console.log('went off screen looping image right side');
            this.posX = 0;
        }
        else {
            if (this.player.getState() === StateConstants.player.RUNNING_RIGHT) {
                this.posX -= this.speed;
            }
            if (this.player.getState() === StateConstants.player.RUNNING_LEFT) {
                if (this.posX > this.width) {
                    console.log('went off screen looping image left side');
                    this.posX = -this.width;
                }
                this.posX += this.speed;
            }
        }
    };
    return Layer;
}());
export default Layer;
//# sourceMappingURL=Background.js.map