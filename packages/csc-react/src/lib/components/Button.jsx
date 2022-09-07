import React from 'react';

const Button = (props) => {



      const styleArg = props.styleArg ? `kg-${props.styleArg}` : '';
      const width = props.width ? `kg-${props.width}` : ''
      const customClass = props.customClass ? props.customClass : '';
      const onClickButton = props.onClickButton ? props.onClickButton : null;

      return (
            <button className={[`kg__button ${styleArg} ${width}`, customClass].join(' ')} onClick={onClickButton}>{props.label}</button>
      )
}

export default Button;