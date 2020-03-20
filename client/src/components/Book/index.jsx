import React from 'react';
import PropTypes from 'prop-types';

import Button from './Styles';

const Book = ({title, onClick}) => {
  return (
    <Button onClick={()=>{onClick(title)}}>
      <h4>{title}</h4>
    </Button>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Book
