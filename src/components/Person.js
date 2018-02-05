import React, { Component } from 'react'
import '../css/Person.css'

class Person extends Component {
  render() {
    return <div className="person">
        <h1>{this.props.name}</h1>
        <p> Tu edad: {this.props.age}</p>
        <p onClick={this.props.click}>X</p>
        <input type="text" value={this.props.value} onChange={this.props.change}/>
      </div>
  }
}

export default Person
