import React, { Component } from 'react'
import './NameUpdate.css'

class NameUpdate extends Component {
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }
    return (
      <div className="name-update">
        <div>
          <button
            style={style}
            onClick={this.props.delete}>
              Delete Name
          </button>
          <button
            style={style}
            onClick={this.props.restore}>
              Restore Names
          </button>
        </div>
        {/* <input type="text"  onChange={this.props.changed} /> */}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default NameUpdate
