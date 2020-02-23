import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import App from './App'

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

function getTurnData(){
    const allBooks = authors.reduce(function (p, c) {
        return p.concat(c.books);
    }, []);
    console.log(allBooks)
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks)
    console.log(answer)

    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
                              author.books.some((title) => title === answer))
    }
}


function resetState(){
    return {
        turnData: getTurnData(authors),
        highlight: 'none'
    }
}

let state = resetState();

function onAnswerSelected(answer){
    const isCorrect = state.turnData.author.books.some((book)=> book === answer);
    state.highlight = isCorrect ? 'correct':'wrong';
    render();
}



// function App(){
//     return <AuthorQuiz {...state} 
//         onAnswerSelected={onAnswerSelected}
//         onContinue={() => {
//             state = resetState();
//             render();
//         }} />;
// }

const AuthorWrapper = withRouter(({ history})=>
    <AddAuthorForm onAddAuthor={(author) => {
        authors.push(author);
        history.push('/');
    }}/>
)

function render(){
    ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route path="/add" component={AuthorWrapper}/>
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
}

// render();

ReactDOM.render(<App/>, document.getElementById('root'));