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
      <div className='App'>
        {/*
          For single responsibility conventions, iterating 'monsters' would be moved to its containing element instead of App component. 
          For this reason monsters is passed as a property.
        */}
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
