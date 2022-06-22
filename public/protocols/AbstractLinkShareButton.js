var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import AbstractShareButton from "./AbstractShareButton.js";
var AbstractLinkShareShareButton = /** @class */ (function (_super) {
    __extends(AbstractLinkShareShareButton, _super);
    function AbstractLinkShareShareButton(eventHandler, clazz, url) {
        var _this = _super.call(this, eventHandler, clazz) || this;
        _this.url = url;
        return _this;
    }
    AbstractLinkShareShareButton.prototype.createAction = function () {
        var link = this.createLink();
        return function () { return window.open(link); };
    };
    return AbstractLinkShareShareButton;
}(AbstractShareButton));
export default AbstractLinkShareShareButton;
