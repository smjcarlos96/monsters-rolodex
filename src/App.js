import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    /*
      3. bind returns a copy of the said function with a new definition for "this" keyword, in this case App class itself, and it's done like:
      this.handleChange = this.handleChange.bind(this);
      As handleChange is defined in App scope, we can refer to it with "this" from constructor. But "this" inside bind function passes App as the scope to use.
    */
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }));
  }

  /*
    2. There are two ways to do so. First one is a normal function like:
    handleChange(e) { this.setState({searchField: e.target.value}) }
    and setting SearchBox attribute to {this.handleChange} (no need to put brackets, it will pass the event object likewise).
    But will be needed to set the meaning for "this" keyword from the function scope to the class scope. Look for comment 3.

    Second way is to define an arrow function like:
    const handleChange = (e) => {this.setState({searchField: e.target.value})}
    and setting SearchBox attribute only to {this.handleChange}.
    The reason why "this" works is because anonymous functions are defined under class scope and not function scope. 
  */

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        {/* 1. Here in SearchBox we define handleChange inside the tag but we can also define it outside. Check comment number 2. */}
        <SearchBox placeholder='search monsters' handleChange={e => { this.setState({ searchField: e.target.value }) }} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
