import React from 'react';
const Details = (props) => {
      return (
            <details className="kg__details">
                  <summary className="kg__details__header">
                        {props.title}
                        <i className="icon-datalist"></i>
                  </summary>
                  <div className="kg__details__body">
                        <p>{props.body}</p>
                  </div>
            </details>
      )
}

export default Details;