import React from 'react'

const userInput = (props) => {
  return (
    <div className="userInput__wrapper">
      <label for="username">Please enter a username: </label>
      <input type="text" id="username" onChange={props.changed} defaultValue={props.username}/>
    </div>
  )
}

export default userInput