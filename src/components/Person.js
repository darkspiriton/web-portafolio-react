import React, { Component } from 'react'
import Radium from 'radium'
import '../css/Person.css'

class Person extends Component {
  render() {
    const style = {
      '@media (min-width: 500px)': { width: '450px' }
    }
    return (
      <div className="person" style={style}>
        <h1>{this.props.name}</h1>
        <p> Tu edad: {this.props.age}</p>
        <p onClick={this.props.click}>X</p>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.change}
        />
      </div>
    )
  }
}

export default Radium(Person)
