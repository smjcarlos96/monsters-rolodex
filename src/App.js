import './App.css';
import { Component } from 'react';

//Converting the App function (basic component) into a more complex component by using 'class' and inheriting from React.Component (imported).
class App extends Component {

  constructor() {
    //It's needed to call the superclass' constructor to inherit its features. I.e: setState or render method.
    super();

    //the state determines the main resource of information related to the 'current page'.
    this.state = {
      monsters: [
        {name: 'Banshee', id: 'id1'},
        {name: 'Dracula', id: 'id2'},
        {name: 'Zombie', id: 'id3'},
      ]
    };
  }
  
  //render method is called every time there's a change on the DOM and refreshes it.
  //It returns the HTML structure to follow later (in its own syntax).
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => 
          //key attribute is requested by console for performance reasons.
          //So, it's convenient to make use of 'key' attribute to identify the modified element to update.
          <h1 key={monster.id}>{monster.name}</h1>
        )}
      </div>
    );
  }
}

export default App;
