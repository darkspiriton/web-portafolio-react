import React, { Component } from 'react'

class ToggleButton extends Component {
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }

    if (this.props.status) {
      style.backgroundColor = 'red'
    }

    return (
      <button style={style} onClick={this.props.toggle}>
        Toggle Persons
      </button>
    )
  }
}

export default ToggleButton
