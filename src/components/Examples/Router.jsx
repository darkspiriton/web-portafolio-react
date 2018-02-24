import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
  // Redirect,
  // withRouter
} from 'react-router-dom'

const Static = () => (
  <Router>
    <div>
      <h1> React Router </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Route path="/acerca" component={Acerca} />
      <Route path="/servicios" component={Service} />
      <Route path="/contacto" component={Contact} />
    </div>
  </Router>
)

const Acerca = () => (
  <div>
    <h2>Acerca</h2>
  </div>
)

const Service = () => (
  <div>
    <h2>Servicios</h2>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <Route
      exact
      path={match.url}
      render={() => <h3> Mantente en contacto CONMIGO</h3>}
    />
  </div>
)

export default Static
