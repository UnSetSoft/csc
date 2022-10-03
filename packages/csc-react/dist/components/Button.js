"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  const styleArg = props.styleArg ? "kg-".concat(props.styleArg) : '';
  const width = props.width ? "kg-".concat(props.width) : '';
  const customClass = props.customClass ? props.customClass : '';
  const onClickButton = props.onClickButton ? props.onClickButton : null;
  const icon = props.icon ? props.icon : null;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon ? /*#__PURE__*/_react.default.createElement("button", {
    className: ["kg__button ".concat(styleArg, " ").concat(width), customClass].join(' '),
    onClick: onClickButton
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  }), " ", props.label)) : /*#__PURE__*/_react.default.createElement("button", {
    className: ["kg__button ".concat(styleArg, " ").concat(width), customClass].join(' '),
    onClick: onClickButton
  }, /*#__PURE__*/_react.default.createElement("span", null, props.label)));
};

var _default = Button;
exports.default = _default;