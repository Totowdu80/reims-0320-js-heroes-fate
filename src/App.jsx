import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Axios from 'axios';
import './App.css';

import Homepage from './components/Homepage/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }

  componentDidMount() {
    const listHeroes = [
      687,
      620,
    ];

    for (let i = 0; i < listHeroes.length; i++) {
      Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${listHeroes[i]}`)
        .then((response) => response.data)
        .then((data) => {
          const heroes = [...this.state.heroes, data]
          heroes.sort((a, b) => (
            // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
            parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
          ));
          this.setState({
            heroes,
          });
        });
    }
  }

  render() {
    const heroes = this.state.heroes;
     return (
        <div>

            <Router>
              <div>
                <nav>
                  <ul className="navbar">
                    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/instructions">Mentions Légales</NavLink></li>
                  </ul>
                </nav>

                <Switch>

                  <Route exact path="/">
                    <Homepage heroes={heroes} />
                  </Route>

                  <Route path="/legalmention">
                    <p>Here will be something</p>
                  </Route>

                </Switch>
              </div>
            </Router>

        </div>
    ); 
  }
}

export default App;