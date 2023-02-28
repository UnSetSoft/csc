"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Acordeon = _ref => {
  let {
    children,
    title,
    icon,
    iconColor,
    className
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {}, [iconColor, icon]);
  const i = icon ? icon : null;
  const style = {
    color: "#".concat(iconColor) || '#3f3f3f'
  };

  const OpenAcordeon = () => {
    setOpen(prevCheck => !prevCheck);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className ? "kg__acordeon ".concat(className) : "kg__acordeon",
    onClick: OpenAcordeon
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kg__acordeon__title"
  }, /*#__PURE__*/_react.default.createElement("span", null, icon && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    style: style,
    icon: i
  }), " ", title), /*#__PURE__*/_react.default.createElement("div", {
    className: open ? "kg__acordeon__title__icon kg-open" : "kg__acordeon__title__icon kg-default"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortDown
  }))), open ? /*#__PURE__*/_react.default.createElement("div", {
    className: "kg__acordeon__body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kg__acordeon__body__container"
  }, children)) : null);
};

var _default = Acordeon;
exports.default = _default;