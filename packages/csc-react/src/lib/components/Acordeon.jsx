import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
const Acordeon = ({ children, title, icon, iconColor, className }) => {
      const [open, setOpen] = useState(false)

      useEffect(() => {

      }, [iconColor, icon])

      const i = icon ? icon : null;

      const style = {
            color: `#${iconColor}` || '#3f3f3f'
      }

      const OpenAcordeon = () => {
            setOpen(prevCheck => !prevCheck);
      }
      return (
            <div className={className ? `kg__acordeon ${className}` : "kg__acordeon"} onClick={OpenAcordeon}>
                  <div className='kg__acordeon__title'>
                        <span>{icon && <FontAwesomeIcon style={style} icon={i} />} {title}</span>
                        <div className={open ? `kg__acordeon__title__icon kg-open` : `kg__acordeon__title__icon kg-default`}><FontAwesomeIcon icon={faSortDown} /></div>
                  </div>
                  {open ? (
                        <div className='kg__acordeon__body'>
                              <div className='kg__acordeon__body__container'>
                                    {children}
                              </div>
                        </div>
                  ) : null}
            </div>
      )
}

export default Acordeon;