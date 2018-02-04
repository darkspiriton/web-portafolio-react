import React from 'react'
export const Person = props => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p> Tu edad: {props.age}</p>
      <p> Pos: {props.pos}</p>
    </div>
  )
}
