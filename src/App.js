import React, { Component } from 'react'
import './css/App.css'
import Person from './components/Person'
import { Example } from './components/examples/Example'
import Button from './components/Button'
import ToggleButton from './components/ToggleButton'

class App extends Component {
  state = {
    persons: [
      { name: 'Cesar', age: 21 },
      { name: 'Mari', age: 22 },
      { name: 'Luis1', age: 23 },
      { name: 'Luis2', age: 24 },
      { name: 'Luis3', age: 25 },
      { name: 'Luis4', age: 26 }
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

  deleteItemHandler = index => {
    console.log(index)
  }

  indexChangeHadler = event => {
    let value = event.target.value
    this.setState({ index: value })
  }

  restoreNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Cesar', age: 21 },
        { name: 'Mari', age: 22 },
        { name: 'Luis1', age: 23 },
        { name: 'Luis2', age: 24 },
        { name: 'Luis3', age: 25 },
        { name: 'Luis4', age: 26 }
      ]
    })
  }

  tooglePersonHandler = () => {
    let switchPerson = this.state.switchPerson
    this.setState({ switchPerson: !switchPerson })
  }

  render() {
    let persons = null
    if (this.state.switchPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                pos={index}
                click={this.deleteItemHandler.bind(this, index)}
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
