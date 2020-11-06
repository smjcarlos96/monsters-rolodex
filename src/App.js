import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';

class App extends Component {

  constructor() {
    super();

    this.state = { 
      monsters: [],
      // this field in the state will represent anything the user types in the text input.
      seachField: '',
    };
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
          onChange attribute is used to capture (asyncrhonously through a method) any changes in such text field.
          'e' represents the event triggered (change), 'target' is the element which triggered it (input), and 'value' is the data typed.
        */}
        <input type='search' placeholder='search monsters' onChange={e => {this.setState({seachField: e.target.value}
        /* , () => {This second parameter callback function can be used to trigger any order right after setting the state, because it's asynchronous.} */)}} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
