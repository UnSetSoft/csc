"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: function get() {
    return _Alerts.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Details", {
  enumerable: true,
  get: function get() {
    return _details.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});

require("@kagarisoft/csc/dist/css/common.min.css");

var _Button = _interopRequireDefault(require("./components/Button"));

var _details = _interopRequireDefault(require("./components/details"));

var _Alerts = _interopRequireDefault(require("./components/Alerts"));

var _Image = _interopRequireDefault(require("./components/Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }