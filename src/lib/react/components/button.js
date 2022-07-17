import React from "react";
let btnclass;
const Button = (classArg, props) => {
  btnclass = classArg ? "kg__button " + classArg : "kg__button";
  return (
    <button className={btnclass} {...props}>
      {props.label}
    </button>
  );
};

export default Button;
