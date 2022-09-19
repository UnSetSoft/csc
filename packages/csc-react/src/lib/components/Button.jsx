import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {

      const styleArg = props.styleArg ? `kg-${props.styleArg}` : '';
      const width = props.width ? `kg-${props.width}` : ''
      const customClass = props.customClass ? props.customClass : '';
      const onClickButton = props.onClickButton ? props.onClickButton : null;

      const icon = props.icon ? props.icon : null;

      return (
            <>
                  {icon ?
                        <button className={[`kg__button ${styleArg} ${width}`, customClass].join(' ')} onClick={onClickButton}>
                              <span><FontAwesomeIcon icon={icon} /> {props.label}</span>
                        </button> :
                        <button className={[`kg__button ${styleArg} ${width}`, customClass].join(' ')} onClick={onClickButton}><span>{props.label}</span></button>
                  }

            </>
      )
}

export default Button;