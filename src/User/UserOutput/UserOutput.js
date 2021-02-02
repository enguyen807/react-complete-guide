import React from 'react'

const userOutput = (props) => {
  return (
    <div className="userOutput__wrapper">
      <p>Tere {props.username ? props.username : 'user'}. Loodame, et naudite oma viibimist.</p>
      <p>{props.children} Täname külastamast! </p>
    </div>
  )
}

export default userOutput