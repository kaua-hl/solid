var AbstractShareButton = /** @class */ (function () {
    function AbstractShareButton(eventHandler, clazz) {
        this.clazz = clazz;
        this.eventHandler = eventHandler;
    }
    AbstractShareButton.prototype.bind = function () {
        var action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
    };
    return AbstractShareButton;
}());
export default AbstractShareButton;
