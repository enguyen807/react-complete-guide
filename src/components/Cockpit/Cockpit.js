// Functional Component
import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(
    () => {
      // Runs on every update, on component created
      // Can use http request here
      console.log("[Cockpit.js] useEffect");
      setTimeout(() => {
        alert("Saved data to cloud!");
      }, 1000);

      return () => {
        console.log("[Cockpit.js] cleanup work in useEffect");
      };
    },

    // Passing a second arg as an array with a list of used variables
    // will customize when useEffect runs i.e. props.persons
    // Passing an empty array will only run useEffect once
    []
  );

  // Can use useEffect() as many times as you want
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

// .memo will store a snapshot of this component and only rerender if inputs changes
// Wrap functional components with React.memo
// Only add if Child component is a standalone from parent component 
export default React.memo(cockpit);
