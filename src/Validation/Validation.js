import React from "react";

const validation = (props) => {
  let validationPasswordMessage = <p>Password long enough</p>

  if (props.inputLength <= 5) {
    validationPasswordMessage = <p>Password too short!</p>
  }

  return (
    <div>
      {validationPasswordMessage}
    </div>
  );
};

export default validation;
