import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from "classnames";
import Alert from './Alerts'
const Button = ({
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
}) => {

      if (anchor) {
            if (!anchor.length > 0) return (
                  <Alert type="danger">
                        [Image] Anchor prop need url string
                  </Alert>
            )
      }


      const buttonSettings = {
            "success": success,
            "no__decoration": decorationOff,
            "block": block,
            "inline__block": inline,
            "primary": primary,
            "warning": warning,
            "danger": danger,
      }

      if (icon) {
            return (
                  <>
                        {anchor ? (
                              <a href={anchor} className={classNames('kg__button', "kr", className, buttonSettings)}>
                                    <span><FontAwesomeIcon icon={icon} /> {label}</span>
                              </a>
                        ) :
                              (
                                    <button className={classNames('kg__button', "kr", className, buttonSettings)} onClick={onClickButton}>
                                          <span>{label}</span>
                                    </button>
                              )
                        }
                  </>
            )
      }

      return (
            <>
                  {anchor ? (
                        <a href={anchor} className={classNames('kg__button', "kr", className, buttonSettings)}>
                              <span>{label}</span>
                        </a>
                  ) :
                        (
                              <button className={classNames('kg__button', "kr", className, buttonSettings)} onClick={onClickButton}>
                                    <span>{label}</span>
                              </button>
                        )
                  }
            </>
      )
}

export default Button;