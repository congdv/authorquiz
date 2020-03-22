import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from './Styles';

const Hero = ({description}) => (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
        <Heading to='/'>Author Quiz</Heading>
        <p>{description}</p>
    </div>
  </div>
);
Hero.propTypes = {
  description: PropTypes.string,
}

export default Hero;