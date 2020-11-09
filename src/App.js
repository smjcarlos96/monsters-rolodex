import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';

class App extends Component {

  constructor() {
    super();

    this.state = { 
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({monsters: json}));
  }
  
  render() {
    // We make use of destructuring (declarating multiple variables between curly brackets and asigning another object, automatically
    // decomposing it in the variables).
    /* 
      const monsters = this.state.monsters;
      const searchField = this.state.searchField;
      is the same as this thing below.
    */
    // The constants declared above will be used to filter and get only the monsters that contain the string entered in the searchbox.
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <input type='search' placeholder='search monsters' onChange={e => {this.setState({searchField: e.target.value})}} />
        {/* The card list monsters should be the filtered monsters instead of the raw data from the state (which we should keep). */}
        <CardList monsters= { filteredMonsters } />
      </div>
    );
  }
}

export default App;
