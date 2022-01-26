var DOMEventHandler = /** @class */ (function () {
    function DOMEventHandler() {
    }
    DOMEventHandler.prototype.addEventListenerToClass = function (clazz, event, fn) {
        var elements = document.querySelectorAll(clazz);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            element.addEventListener(event, fn);
        }
    };
    return DOMEventHandler;
}());
export default DOMEventHandler;
