"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Image = props => {
  const thumbnail = props.thumbnail ? 'kg-thumbnail' : '';
  const responsive = props.responsive ? 'kg-mha' : '';
  const border = props.border === 20 || props.border === 10 ? "br-".concat(props.border) : '';
  const movile = props.mobile ? 'mw' : null;
  const width = props.width ? "w-".concat(props.width) : '';
  const customClass = props.customClass ? props.customClass : '';
  const src = props.src.length > 0 ? props.src : null;
  const alt = props.alt.length > 0 ? props.alt : null;
  const anchor = props.anchor ? props.anchor : false;

  if (!src) {
    return console.error("This component need src=\"\"");
  } else if (!alt) {
    return console.error("This component need alt=\"\"");
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, anchor.length > 0 ? /*#__PURE__*/_react.default.createElement("a", {
    href: anchor
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "kg__image kg ".concat(thumbnail, " ").concat(responsive, " ").concat(border, " ").concat(movile, " ").concat(width, " ").concat(customClass),
    src: src,
    alt: alt,
    loading: "lazy"
  })) : /*#__PURE__*/_react.default.createElement("img", {
    className: "kg__image kg ".concat(thumbnail, " ").concat(responsive, " ").concat(border, " ").concat(movile, " ").concat(width, " ").concat(customClass),
    src: src,
    alt: alt,
    loading: "lazy"
  }));
};

var _default = Image;
exports.default = _default;