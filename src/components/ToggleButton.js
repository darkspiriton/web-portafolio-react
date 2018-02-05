import React, { Component } from 'react'

class ToggleButton extends Component {
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }
    return (
      <button style={style} onClick={this.props.toggle}>
        Toggle Persons
      </button>
    )
  }
}

export default ToggleButton
