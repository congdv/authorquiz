import React from 'react';
import PropTypes from 'prop-types';

const Continue = ({show, onContinue}) => {
  return (
      <div className="row continue">
          {show 
           ? <div className="col-11">
              <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
           </div>: null}
      </div>
  )
}

Continue.propTypes = {
  show: PropTypes.bool.isRequired,
  onContinue: PropTypes.func.isRequired
}

export default Continue