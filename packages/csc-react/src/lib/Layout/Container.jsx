import React from 'react';
import classNames from "classnames";
const Container = ({ children, hmax, expanded, className, isLite }) => {

      const containerSettings = {
            'h-100': hmax,
            'kg-expanded': expanded,
            'kg__e-lite': isLite
      }
      return (
            <>
                  <div className={classNames('kg__container', className, containerSettings)}>
                        {children}
                  </div>
            </>
      )
}

export default Container;