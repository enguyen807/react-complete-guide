import React from "react";
import "./Input.css";

const input = (props) => {
  return (
    <div className="Card">
      <fieldset>
        <legend>Edit User Data</legend>
        <div>
          <label htmlFor="Username">Username: </label>
          <input
            id="Username"
            type="text"
            onChange={props.changed}
            defaultValue={props.username}
          />
        </div>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            id="Password"
            type="text"
            onChange={props.changed}
            defaultValue={props.password}
          />
        </div>
        <div>
          <label htmlFor="Bio">Bio: </label>
          <input
            id="Bio"
            type="text"
            onChange={props.changed}
            defaultValue={props.bio}
          />
        </div>
      </fieldset>
      <hr />
      <div className="Box">
        <p>Username: {props.username}</p>
        <p>Password: {props.password}</p>
        <p>Bio: {props.bio}</p>
      </div>
    </div>
  );
};

export default input;
