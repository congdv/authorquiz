import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({description}) => (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>{description}</p>
    </div>
  </div>
);
Hero.propTypes = {
  description: PropTypes.string,
}

export default Hero;