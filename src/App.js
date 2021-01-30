import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Eric", age: 27},
      {name: "Bob", age: 23},
      {name: "Susan",age: 25},
    ],
  };

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Erick';
    this.setState({
      persons: [
        {name: newName,age: 28},
        {name: "Bob",age: 24},
        {name: "Susan",age: 26},
      ],
    });
  };

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: "Eric",age: 28},
        {name: e.target.value,age: 24},
        {name: "Susan",age: 26},
      ],
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Donald")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Ma meeldib jaakohv!
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Erick")}
          changed={this.nameChangedHandler}
        >
          Ma meeldib Jaapani laule kuulata!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
