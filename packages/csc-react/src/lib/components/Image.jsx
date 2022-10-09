import React from 'react';
import classNames from "classnames";
import Alert from './Alerts'
const Image = ({ className, src, alt, anchor, border, thumbnail, responsive }) => {
      if (!src) {
            return (
                  <Alert type="danger">
                        [Image] This component need src="" for show the image
                  </Alert>
            )
      } else if (!alt) {
            return (
                  <Alert type="danger">
                        [Image] This component need alt="" for show the image
                  </Alert>
            )
      } else if (anchor) {
            if (!anchor.length > 0) return (
                  <Alert type="danger">
                        [Image] Anchor prop need url string
                  </Alert>
            )
      }

      const imageSettings = {
            'kg-thumbnail': thumbnail,
            'kg-mha': responsive,
            'kg-br': border
      }



      return (
            <>
                  {anchor ? (
                        <a href={anchor}>

                              <img className={classNames('kg__image', className, imageSettings)} src={src} alt={alt} loading='lazy' />
                        </a>
                  ) : (
                        <img className={classNames('kg__image', className, imageSettings)} src={src} alt={alt} loading='lazy' />
                  )}
            </>
      )
}

export default Image;