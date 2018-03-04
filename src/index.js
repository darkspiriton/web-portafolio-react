import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './containers/App'
// import StaticSite from './components/Examples/Router'
// import Style from './containers/Style.js'
// import BoxModel from './containers/BoxModel.js'
// import Position from './containers/Position.js'
import Flex from './containers/Flex'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Flex />, document.getElementById('root'))
// ReactDOM.render(<Position />, document.getElementById('root'))
// ReactDOM.render(<BoxModel />, document.getElementById('root'))
// ReactDOM.render(<Style />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<StaticSite />, document.getElementById('root'))
registerServiceWorker()
