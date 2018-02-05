import React, { Component } from 'react'
import Radium from 'radium'

class ToggleButton extends Component {
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    if (this.props.status) {
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <button style={style} onClick={this.props.toggle}>
        Toggle Persons
      </button>
    )
  }
}

export default Radium(ToggleButton)
