import React from 'react'
import ToggleButton from '../Buttons/ToggleButton'
import PersonAddForm from '../Examples/PersonAddForm'
// import { Example } from '../Examples/Example'

const Cockpit = props => (
  <div>
    {/* <Example aux="male" /> */}
    <div>
      <ToggleButton
        toggle={props.clicked}
        status={props.show} />
    </div>
    <PersonAddForm
      add={props.test}
      status={props.show} />
  </div>
)

export default Cockpit
