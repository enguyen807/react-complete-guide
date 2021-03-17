import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

import AuthContext from "../../../context/auth-context";

import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    // Works in class based components and functional base components
    this.inputElementRef = React.createRef();
  }

  // Best to use in class base components vs wrapping code with AuthContext.Consumer
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

        <p key="i1" onClick={this.props.click}>
          Minu nimi on {this.props.name}. Ma olen {this.props.age}-aastane.
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // OLD Way of using ref; works online in classbase components
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Fragment>
    );

    // OLD Way of using ref
    // ref={(inputEl) => {this.inputElement = inputEl}} works online in classbase components

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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
