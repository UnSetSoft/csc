"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let btnclass;

const Button = (classArg, props) => {
  btnclass = classArg ? "kg__button " + classArg : "kg__button";
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: btnclass
  }, props), props.label);
};

var _default = Button;
exports.default = _default;