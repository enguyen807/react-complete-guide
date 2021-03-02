import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // Old way of setting state
    // this.state = {
    //   persons: [
    //     { id: "asdfa", name: "Eric", age: 27 },
    //     { id: "qwtrth", name: "Bob", age: 23 },
    //     { id: "fghdfghd", name: "Susan", age: 25 },
    //   ],
    // };
  }

  // Modern way of setting state, implied constructor(props), and super(props)
  state = {
    persons: [
      { id: "asdfa", name: "Eric", age: 27 },
      { id: "qwtrth", name: "Bob", age: 23 },
      { id: "fghdfghd", name: "Susan", age: 25 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // Old way of setting initial state -> use constructor()
  // componentWillMount() {
  // console.log("[App.js] componentWillMount");
  // }

  // HTTP requests goes here ; Most used
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // Most used
  shouldComponentUpdate(nextProps, nextState) {
    // compare props with previous props
    // must return true or false; default return is true when
    // lifecycle hook is not initialized
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  // Most used
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
