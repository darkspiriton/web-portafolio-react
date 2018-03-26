import React from 'react'
import ReactDOM from 'react-dom'
import './css/Normalize.css'
import './index.css'
// import App from './containers/App'
// import StaticSite from './components/Examples/Router'
// import Style from './containers/Style.js'
// import BoxModel from './containers/BoxModel.js'
// import Position from './containers/Position.js'
// import Flex from './containers/Flex'
// import Grid from './containers/Grid'
// import LayoutFlex from './containers/LayoutFlex'
// import Selector from './containers/Selector'
// import Pseudoclases from './containers/Pseudoclases'
import Animation from './containers/Animation'
import registerServiceWorker from './registerServiceWorker'

// ReactDOM.render(<Flex />, document.getElementById('root'))
// ReactDOM.render(<LayoutFlex />, document.getElementById('root') )
// ReactDOM.render(<Grid />, document.getElementById('root'))
// ReactDOM.render(<Position />, document.getElementById('root'))
// ReactDOM.render(<BoxModel />, document.getElementById('root'))
// ReactDOM.render(<Style />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<StaticSite />, document.getElementById('root'))
// ReactDOM.render(<Selector />, document.getElementById('root'))
// ReactDOM.render(<Pseudoclases />, document.getElementById('root'))
ReactDOM.render(<Animation />, document.getElementById('root'))
registerServiceWorker()
