import React from 'react';
import { BrowserRouter as Router,
         Route,Switch } from "react-router-dom";
import AuthorQuizPage from './pages/AuthorQuiz';
import AddAuthorForm from "./AddAuthorForm";



const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={AuthorQuizPage} />
          <Route path="/add" component={AddAuthorForm}/>
      </Switch>
    </Router>
  )
}
export default App;
