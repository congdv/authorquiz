import React from 'react';
import PropTypes from 'prop-types';
import { CardTurn, AuthorImg } from './Styles';
import shortid from 'shortid';

import Book from '../Book';

const Turn = ({author, books, highlight, onAnswerSelected}) => {
  console.log("Turn -> author", author)
  const highlightToBgColor = (highlight) => {
    const mapping = {
        'none':'',
        'correct':'green',
        'wrong':'red'
    }
    return mapping[highlight]
}

return (
    <CardTurn color={highlightToBgColor(highlight)} className="row">
        <AuthorImg className="col-4 offset-1">
            <img src={author.imageUrl} alt="AuthorImage"/>
        </AuthorImg>
        <div className="col-6">
            {books.map((title) => <Book title={title} key={shortid.generate()} onClick={onAnswerSelected} />)}
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