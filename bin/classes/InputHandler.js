import { KeyConstants } from '../utils/KeyConstants.js';
var InputHandler = (function () {
    function InputHandler() {
        var _this = this;
        this.lastKey = '';
        window.addEventListener('keydown', function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                    _this.lastKey = KeyConstants.pressLeft;
                    break;
                case 'ArrowRight':
                    _this.lastKey = KeyConstants.pressRight;
                    break;
                case 'ArrowUp':
                    _this.lastKey = KeyConstants.pressUp;
                    break;
            }
        });
        window.addEventListener('keyup', function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                    _this.lastKey = KeyConstants.releaseLeft;
                    break;
                case 'ArrowRight':
                    _this.lastKey = KeyConstants.releaseRight;
                    break;
                case 'ArrowUp':
                    _this.lastKey = KeyConstants.releaseUp;
                    break;
            }
        });
    }
    InputHandler.prototype.getLastKey = function () {
        return this.lastKey;
    };
    return InputHandler;
}());
export default InputHandler;
//# sourceMappingURL=InputHandler.js.map