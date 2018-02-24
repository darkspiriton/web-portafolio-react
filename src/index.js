import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './containers/App'
// import StaticSite from './components/Examples/Router'
import Style from './containers/Style.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Style />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<StaticSite />, document.getElementById('root'))
registerServiceWorker()
