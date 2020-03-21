import React, {useEffect} from 'react';
import { BrowserRouter as Router,
         Route,Switch } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import AuthorQuizPage from './pages/AuthorQuiz';
import NewAuthorPage from './pages/NewAuthor';
import { AuthorConstants} from './constants';



const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchAuthorList = async() => {
      try {
        const authors = await axios.get('http://localhost:3001/api/authors');
        dispatch({type: AuthorConstants.SET_AUTHORS, data: authors.data });
        console.log(authors.data);
      }catch(e) {
        console.log(e);
      }
    };
    fetchAuthorList();
  }, [])
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={AuthorQuizPage} />
          <Route exact path='/add' component={NewAuthorPage}/>
      </Switch>
    </Router>
  )
}
export default App;
