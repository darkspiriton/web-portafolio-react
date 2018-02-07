import React from 'react'
import Person from './Person/Person'

const persons = props => props.persons.map((person, index) => {
  return (
    <Person
      key={index}
      name={person.name}
      age={person.age}
      value={person.name}
      changed={event => props.changed(event, person.id)}
      click={() => props.clicked(index)}
    />
  )
})

export default persons
