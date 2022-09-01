import React from 'react';

const Alert = (props) => {
      return (
            <div className={props.type ? `kg__alert kg-${props.type}` : 'kg__alert'} role="alert">
                  <p>
                        {props.children}
                  </p>
            </div>
      )
}

export default Alert;