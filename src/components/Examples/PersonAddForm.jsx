import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uid from 'uid'

class PersonAddForm extends Component {
  static propsType = {
    status: PropTypes.bool.isRequired,
    add: PropTypes.func.isRequired
  }
  static defaultProps = {
    id: uid(10),
    name: 'Desconocido',
    age: 0
  }

  componentWillMount = () => {}
  componentDidMount = () => {}
  componentWillReceiveProps = () => {}
  componentWillReceiveProps=() => {}
  componentWillUpdate = () => {}
  componentDidUpdate = () => {}
  componentWillUnmount = () => {}

  render () {
    let formulario = null
    if (this.props.status) {
      formulario = (
        <form
          action="POST"
          onSubmit={this.props.add}>
          <input type="text" placeholder="Name" name="name" />
          <input type="number" placeholder="Age" name="age" />
          <input type="hidden" name="id" value={uid(10)}/>
          <input type="submit" value="Add" />
        </form>
      )
    }
    return <div>{formulario}</div>
  }
}
export default PersonAddForm
