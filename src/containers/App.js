import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

import withClass from "../hoc/withClass";
import Auxiliary from "../hoc/Auxiliary";

import AuthContext from "../context/auth-context";

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
    changeCounter: 0,
    authenticated: false,
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

    // Best practice for state changes that depend on the previous state
    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
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
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <Auxiliary classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
