import React, { Component } from 'react'
import './App.css'
import Radium, { StyleRoot } from 'radium'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import PersonAddForm from '../components/Examples/PersonAddForm'
import { personsData } from '../data/persons'
import $ from 'jquery'

class App extends Component {
  state = {
    persons: [],
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

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    // const person = Object.assign({}, this.state.persons)
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    // const persons = this.state.persons.splice(0)
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  testHandler = e => {
    // alert('New Event')
    e.preventDefault()
    let form = e.target
    let person = {
      id: form.id.value ? form.id.value : PersonAddForm.defaultProps.id,
      name: form.name.value ? form.name.value : PersonAddForm.defaultProps.name,
      age: form.age.value ? form.age.value : PersonAddForm.defaultProps.age
    }
    let persons = [...this.state.persons]
    this.setState({ persons: persons.concat(person) })
    console.log(e.target)
  }

  fetchData = () => {
    $('#root')
      .fadeOut(3000, () => this.setState({ persons: personsData }))
      .fadeIn()
  }
  resetData = () => {
    this.setState({ index: '', switchPerson: false })
  }

  componentDidMount=() => {
    this.fetchData()
  }

  render () {
    let persons = null
    if (!this.state.persons.length) {
      return (
        <div>
          <p>No hay cursos cargados</p>
          <h1>:(</h1>
          <button onClick={this.fetchData} > Cargar cursos </button>
        </div>
      )
    } else {
      if (this.state.switchPerson) {
        persons = (
          <Persons
            persons={this.state.persons}
            changed={this.changeNameHandler}
            clicked={this.deleteItemHandler}
          />
        )
      }
      return (
        <StyleRoot>
          <div className="App">
            <Cockpit
              clicked={this.tooglePersonHandler}
              show={this.state.switchPerson}
              test={this.testHandler}
            />
            {persons}
          </div>
        </StyleRoot>
      )
    }
  }
}

export default Radium(App)
