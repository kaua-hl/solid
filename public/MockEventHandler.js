var MockEventHandler = /** @class */ (function () {
    function MockEventHandler() {
    }
    MockEventHandler.prototype.addEventListenerToClass = function (clazz, event, fn) {
        console.log(clazz, event, fn);
    };
    return MockEventHandler;
}());
export default MockEventHandler;
