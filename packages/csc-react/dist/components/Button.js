"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _classnames = _interopRequireDefault(require("classnames"));

var _Alerts = _interopRequireDefault(require("./Alerts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    className,
    label,
    onClickButton,
    icon,
    success,
    primary,
    warning,
    danger,
    decorationOff,
    block,
    inline,
    anchor
  } = _ref;

  if (anchor) {
    if (!anchor.length > 0) return /*#__PURE__*/_react.default.createElement(_Alerts.default, {
      type: "danger"
    }, "[Image] Anchor prop need url string");
  }

  const buttonSettings = {
    "success": success,
    "no__decoration": decorationOff,
    "block": block,
    "inline__block": inline,
    "primary": primary,
    "warning": warning,
    "danger": danger
  };

  if (icon) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, anchor ? /*#__PURE__*/_react.default.createElement("a", {
      href: anchor,
      className: (0, _classnames.default)('kg__button', "kr", className, buttonSettings)
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon
    }), " ", label)) : /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _classnames.default)('kg__button', "kr", className, buttonSettings),
      onClick: onClickButton
    }, /*#__PURE__*/_react.default.createElement("span", null, label)));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, anchor ? /*#__PURE__*/_react.default.createElement("a", {
    href: anchor,
    className: (0, _classnames.default)('kg__button', "kr", className, buttonSettings)
  }, /*#__PURE__*/_react.default.createElement("span", null, label)) : /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _classnames.default)('kg__button', "kr", className, buttonSettings),
    onClick: onClickButton
  }, /*#__PURE__*/_react.default.createElement("span", null, label)));
};

var _default = Button;
exports.default = _default;