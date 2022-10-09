"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _ref => {
  let {
    children,
    hmax,
    expanded,
    className,
    isLite
  } = _ref;
  const containerSettings = {
    'h-100': hmax,
    'kg-expanded': expanded,
    'kg__e-lite': isLite
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('kg__container', className, containerSettings)
  }, children));
};

var _default = Container;
exports.default = _default;