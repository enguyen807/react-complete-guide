import React, { Component, Fragment } from "react";

// import Auxiliary from "../../../hoc/Auxiliary";

import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment className={classes.Person}>
        <p key="i1" onClick={this.props.click}>
          Minu nimi on {this.props.name}. Ma olen {this.props.age}-aastane.
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Fragment>
    );
    // return [
    //   <p key="i1" onClick={this.props.click}>
    //     Minu nimi on {this.props.name}. Ma olen {this.props.age}-aastane.
    //   </p>,
    //   <p key="i2">{this.props.children}</p>,
    //   <input
    //     key="i3"
    //     type="text"
    //     onChange={this.props.changed}
    //     defaultValue={this.props.name}
    //   />,
    // ];
  }
}

export default Person;
