import React from 'react';
import PropTypes from 'prop-types';
import { CardTurn, AuthorImg } from './Styles';

import Book from '../Book';

const Turn = ({author, books, highlight, onAnswerSelected}) => {
  const hightlightToBgColor = (highlight) => {
    const mapping = {
        'none':'',
        'correct':'green',
        'wrong':'red'
    }
    return mapping[highlight]
}

return (
    <CardTurn color={hightlightToBgColor(highlight)} className="row">
        <AuthorImg className="col-4 offset-1">
            <img src={author.imageUrl} alt="AuthorImage"/>
        </AuthorImg>
        <div className="col-6">
            {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
        </div>
    </CardTurn>
)
}

Turn.prototype = {
  author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      imageSource: PropTypes.string.isRequired,
      books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

export default Turn;