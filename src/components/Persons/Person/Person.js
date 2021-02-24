import React from "react";

import classes from './Person.css'


const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Minu nimi on {props.name}. Ma olen {props.age}-aastane.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default person;
