import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [  /* For next lessons, better empty hardcoded data. */ ]
    };
  }

  //Overriding function for this particular use.
  //Lifecycle function -> such component was already loaded onto the real DOM.
  componentDidMount() {
    //As we want to get a document via an HTTP resource we use fetch method to get such Response inside a Promise.
    fetch('https://jsonplaceholder.typicode.com/users')
      //To retrieve the desired data we use json() method over the Response, that returns a Promise containing the data in a usable format.
      .then(response => response.json())
      //Once processed such Promise we use the returned array and set it as state prop.
      .then(json => this.setState({monsters: json}));
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => 
        <h1 key={monster.id}>
          {monster.name}
        </h1>)}
      </div>
    );
  }
}

export default App;
