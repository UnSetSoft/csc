"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _ref => {
  let {
    children,
    hmax,
    expanded,
    className
  } = _ref;
  const h = hmax ? 'h-100' : '';
  const e = expanded ? 'kg-expanded' : '';
  const c = className ? className : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "kg__container ".concat(e, " ").concat(h, " ").concat(c)
  }, children);
};

var _default = Container;
exports.default = _default;