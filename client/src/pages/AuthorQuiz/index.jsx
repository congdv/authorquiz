import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {shuffle, sample} from 'underscore';
import { useSelector } from 'react-redux';

import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Turn from '../../components/Turn';
import Continue from '../../components/Continue';

const getTurnData = (authors) => {
  console.log("getTurnData -> authors", authors)
  if(authors === null || authors === undefined){
    return null;
  }
  const allBooks = authors.reduce(function (p, c) {
    return p.concat(c.books);
  }, []);
  console.log("getTurnData -> allBooks", allBooks)

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks)
  return {
      books: fourRandomBooks,
      author: authors.find((author) => {
        console.log("getTurnData -> author", author)
        return author.books.some((title) => title === answer)
      })
  }
}

const AuthorQuiz = () => {
  const [highlight, setHighlight] = useState('');
  const authors = useSelector(state => state.authors);
  const [turnData, setTurnData] = useState(getTurnData(authors));
  
  useEffect(() => {
      setTurnData(getTurnData(authors));
  }, [authors]);
  
  if(!turnData) {
    return null;
  }
  const onAnswerSelected = (answer) => {
    const isCorrect = turnData.author.books.some((book)=> book === answer);
    setHighlight(isCorrect ? 'correct':'wrong');
  }

  const onContinue = () => {
    setTurnData(getTurnData(authors));
    setHighlight('none');
  }

  return (
    <div className="container-fluid">
      <Hero description="Select the book written by the author shown"/>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <p><Link to="/add"> Add an author</Link></p>
      <Footer />
    </div>
  )
}

export default AuthorQuiz;