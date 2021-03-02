import React, { Component } from "react";

import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Minu nimi on {this.props.name}. Ma olen {this.props.age}-aastane.
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />
      </div>
    );
  }
}

export default Person;
