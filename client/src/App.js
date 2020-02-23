import React from 'react';
import { BrowserRouter as Router,
         Route,Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AddAuthorForm from "./AddAuthorForm";



const App = () => {
  return (
    <div>
      <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={AddAuthorForm}/>
      </Router>
    </div>
  )
}

export default App;
