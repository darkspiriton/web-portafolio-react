import React from 'react'
import ToggleButton from '../Buttons/ToggleButton'
import { Example } from '../Examples/Example'

const Cockpit = props => (
  <div>
    <Example aux="male" />
    <div>
      <ToggleButton
        toggle={props.clicked}
        status={props.show}
      />
    </div>
  </div>
)

export default Cockpit
