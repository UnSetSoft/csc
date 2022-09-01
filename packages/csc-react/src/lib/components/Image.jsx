import React from 'react';

const Image = (props) => {

      const thumbnail = props.thumbnail ? 'kg-thumbnail' : '';
      const responsive = props.responsive ? 'kg-mha' : '';
      const border = props.border === 20 || props.border === 10 ? `br-${props.border}` : '';
      const movile = props.mobile ? 'mw' : null;
      const width = props.width ? `w-${props.width}` : '';

      const customClass = props.customClass ? props.customClass : '';
      const src = props.src.length > 0 ? props.src : null;
      const alt = props.alt.length > 0 ? props.alt : null;

      const anchor = props.anchor ? props.anchor : false;

      if (!src) {
            return console.error(`This component need src=""`);
      } else if (!alt) {
            return console.error(`This component need alt=""`);
      }



      return (
            <>
                  {anchor.length > 0 ? (
                        <a href={anchor}>
                              <img className={
                                    `kg__image kg ${thumbnail} ${responsive} ${border} ${movile} ${width} ${customClass}`
                              } src={src} alt={alt} loading='lazy' />
                        </a>
                  ) : (
                        <img className={
                              `kg__image kg ${thumbnail} ${responsive} ${border} ${movile} ${width} ${customClass}`
                        } src={src} alt={alt} loading='lazy' />
                  )}
            </>
      )
}

export default Image;