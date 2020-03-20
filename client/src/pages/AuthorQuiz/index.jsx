import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {shuffle, sample} from 'underscore';

import Book from '../../components/Book';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Turn from '../../components/Turn';
import Continue from '../../components/Continue';

const authors = [
  {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn',
              'The Adventures of Tom Sawyer']
  },
  {
      name: 'J.K Rowling',
      imageUrl: 'images/authors/J._K._Rowling.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Harry Potter']
  },
  {
      name: 'Mario Puzo',
      imageUrl: 'images/authors/mario-puzo.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The GodFather', 'The Family', 'The Sicilian']
  },
  {
      name: 'Victor Hugo',
      imageUrl: 'images/authors/Victor_Hugo.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['HernaniThe',' Hunchback of Notre-Dame']
  },
  {
      name: 'Nguyen Nhat Anh',
      imageUrl: 'images/authors/nguyen-nhat-anh.jpeg',
      imageSource: 'Wikimedia Commons',
      books: ['Celestial eyes','The girl from yesterday']
  },
  {
      name: 'Arthur Conan Doyle',
      imageUrl: 'images/authors/Arthur_Conan_Doyle.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Hound of the Baskervilles', 'The Adventures of Sherlock Holmes', 'A Study in Scarlet']
  },
  {
      name: 'Haruki Murakami',
      imageUrl: 'images/authors/Haruki_Murakami.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Kafka on the Shore', 'A Wild Sheep Chase']
  },
]

const getTurnData = () => {
  const allBooks = authors.reduce(function (p, c) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks)
  return {
      books: fourRandomBooks,
      author: authors.find((author) => 
                            author.books.some((title) => title === answer))
  }
}

const AuthorQuiz = () => {
  const [highlight, setHighlight] = useState('');
  const [turnData, setTurnData] = useState(getTurnData()); 

  const onAnswerSelected = (answer) => {
    const isCorrect = turnData.author.books.some((book)=> book === answer);
    setHighlight(isCorrect ? 'correct':'wrong');
  }

  const onContinue = () => {
    setTurnData(getTurnData());
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