import React from 'react'

function formatName(user) {
  return 'Sr.' + user.name
}

const user = {
  name: 'Cesar Antonio Aaron'
}

export const Example = props => {
  return (
    <div>
      <h1>
        Hello {formatName(user)} {props.aux}
      </h1>
      <h2> Test </h2>
    </div>
  )
}
