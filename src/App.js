import React, { Component } from 'react'
import './css/App.css'
import Person from './components/Person'
import { Example } from './components/examples/Example'
import Button from './components/Button'
import ToggleButton from './components/ToggleButton'

class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Cesar', age: 21 },
      { id: '234', name: 'Mari', age: 22 },
      { id: '345', name: 'Luis1', age: 23 },
      { id: '456', name: 'Luis2', age: 24 },
      { id: '567', name: 'Luis3', age: 25 },
      { id: '678', name: 'Luis4', age: 26 }
    ],
    index: '',
    switchPerson: false
  }

  deleteNameHandler = event => {
    // console.log(event.target.value)
    let index = parseInt(event.target.value, 10)
    if (index <= this.state.persons.length - 1) {
      this.setState({ index })
      let persons = this.state.persons
      persons.splice(index, 1)
      this.setState({ persons })
    } else {
      console.log('Error de value')
    }
  }

  deleteItemHandler = indexPerson => {
    let persons = [...this.state.persons]
    persons.splice(indexPerson, 1)
    this.setState({ persons })
  }

  indexChangeHadler = event => {
    let value = event.target.value
    this.setState({ index: value })
  }

  restoreNameHandler = () => {
    this.setState({
      persons: [
        { id: '123', name: 'Cesar', age: 21 },
        { id: '234', name: 'Mari', age: 22 },
        { id: '345', name: 'Luis1', age: 23 },
        { id: '456', name: 'Luis2', age: 24 },
        { id: '567', name: 'Luis3', age: 25 },
        { id: '678', name: 'Luis4', age: 26 }
      ]
    })
  }

  tooglePersonHandler = () => {
    let switchPerson = !this.state.switchPerson
    this.setState({ switchPerson })
  }

  render() {
    let persons = null
    if (this.state.switchPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deleteItemHandler(index)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <Button
          restore={this.restoreNameHandler}
          delete={this.deleteNameHandler}
          changed={this.deleteNameHandler}
          value={this.state.index}
        />
        <Example aux="male" />
        <div>
          <ToggleButton toggle={this.tooglePersonHandler} />
        </div>

        {persons}
      </div>
    )
  }
}

export default App
