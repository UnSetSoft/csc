import React from 'react';

const Container = ({ children, hmax, expanded, className }) => {

      const h = hmax ? 'h-100' : '';
      const e = expanded ? 'kg-expanded' : '';
      const c = className ? className : '';
      return (
            <div class={`kg__container ${e} ${h} ${c}`}>
                  {children}
            </div>
      )
}

export default Container;