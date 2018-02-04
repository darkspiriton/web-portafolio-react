import React, { Component } from 'react'
import '../css/NameUpdate.css'

class NameUpdate extends Component {
  render() {
    return (
      <div className="name-update">
        <div>
          <button onClick={this.props.delete}> Delete Name </button>
          <button onClick={this.props.restore}> Restore Names </button>
        </div>
        <input type="text" onChange={this.props.changed} />
      </div>
    )
  }
}

export default NameUpdate
