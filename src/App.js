import React, { Component } from 'react'
import './App.css'
import Person from './components/Person.js'
import { Example } from './components/Example.js'
import Button from './components/Button'

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
    index: ''
  }

  deleteNameHandler = event => {
    // console.log(event.target.value)
    let index = parseInt(event.target.value, 10)
    if (index <= this.state.persons.length - 1) {
      this.setState({ index })
      let state = this.state.persons
      state.splice(index, 1)
      this.setState({ persons: state })
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

  render() {
    return (
      <div className="App">
        <Button
          restore={this.restoreNameHandler}
          delete={this.deleteNameHandler}
          changed={this.deleteNameHandler}
          value={this.state.index}
        />
        <Example aux="male" />
        {this.state.persons.map((item, index) => {
          return (
            <Person
              key={index}
              name={item.name}
              age={item.age}
              pos={index}
              click={this.deleteItemHandler.bind(this, index)}
            />
          )
        })}
      </div>
    )
  }
}

export default App
