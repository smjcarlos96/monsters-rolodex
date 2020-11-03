import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';

class App extends Component {

  constructor() {
    super();

    this.state = { monsters: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({monsters: json}));
  }
  
  render() {
    return (
      <div className="App">
        <CardList name="Robbie">
          {
            //Putting all the iterated elements inside the card list would apply the column style defined to all elements.
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
        </CardList>
      </div>
    );
  }
}

export default App;
