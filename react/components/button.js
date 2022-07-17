"use strict";

require("core-js/modules/es.object.assign.js");

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let btnclass;

function Button(classArg, arg) {
  btnclass = classArg ? "kg__button " + classArg : "kg__button";
  return /*#__PURE__*/React.createElement("button", _extends({
    className: btnclass
  }, arg));
}