import React, { PureComponent } from "react";

import Person from "./Person/Person";

// PureComponent is a normal component that does a shallow comparison of props and state

class Persons extends PureComponent {
  // Modern way for componentWillReceiveProps
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // DEPRECATED
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // Only available in class based components 
  // If parent components updates and child component doesnt need to update 
  // add shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   // compare props with previous props
  //   // must return true or false
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  // Used to fetch new data from server - Most used lifecycle hook
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] compondentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
