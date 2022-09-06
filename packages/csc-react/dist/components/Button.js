"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  const styleArg = props.styleArg ? "kg-".concat(props.styleArg) : '';
  const width = props.width ? "kg-".concat(props.width) : '';
  const customClass = props.customClass ? props.customClass : '';
  const onClickButton = props.onClickButton ? props.onClickButton : null;
  console.log(customClass);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: ["kg__button ".concat(styleArg).concat(width), customClass].join(' '),
    onClick: onClickButton
  }, props.label);
};

var _default = Button;
exports.default = _default;