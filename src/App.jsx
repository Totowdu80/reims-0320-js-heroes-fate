import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link 
} from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div>
        <Link exact to="/">Accueil</Link>
        <Link to="/Board" className="buttonPlay">Play Now !</Link>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Board">
            <Board />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
