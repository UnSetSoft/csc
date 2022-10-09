"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Alerts = _interopRequireDefault(require("./Alerts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Image = _ref => {
  let {
    className,
    src,
    alt,
    anchor,
    border,
    thumbnail,
    responsive
  } = _ref;

  if (!src) {
    return /*#__PURE__*/_react.default.createElement(_Alerts.default, {
      type: "danger"
    }, "[Image] This component need src=\"\" for show the image");
  } else if (!alt) {
    return /*#__PURE__*/_react.default.createElement(_Alerts.default, {
      type: "danger"
    }, "[Image] This component need alt=\"\" for show the image");
  } else if (anchor) {
    if (!anchor.length > 0) return /*#__PURE__*/_react.default.createElement(_Alerts.default, {
      type: "danger"
    }, "[Image] Anchor prop need url string");
  }

  const imageSettings = {
    'kg-thumbnail': thumbnail,
    'kg-mha': responsive,
    'kg-br': border
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, anchor ? /*#__PURE__*/_react.default.createElement("a", {
    href: anchor
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _classnames.default)('kg__image', className, imageSettings),
    src: src,
    alt: alt,
    loading: "lazy"
  })) : /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _classnames.default)('kg__image', className, imageSettings),
    src: src,
    alt: alt,
    loading: "lazy"
  }));
};

var _default = Image;
exports.default = _default;