"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Details = props => {
  return /*#__PURE__*/_react.default.createElement("details", {
    className: "kg__details"
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: "kg__details__header"
  }, props.title, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon-datalist"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "kg__details__body"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.body)));
};

var _default = Details;
exports.default = _default;