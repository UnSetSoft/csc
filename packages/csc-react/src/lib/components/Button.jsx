import React from 'react';

const Button = (props) => {
      return (
            <button className={props.styleArg ? `kg__button ${props.styleArg}` : 'kg__button'}>{props.label}</button>
      )
}

export default Button;