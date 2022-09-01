"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Alert = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.type ? "kg__alert kg-".concat(props.type) : 'kg__alert',
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.children));
};

var _default = Alert;
exports.default = _default;