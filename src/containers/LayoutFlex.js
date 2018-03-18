import React,{Component} from 'react'
import '../css/LayoutFlex.css'

class LayoutFlex extends Component {

  render () {
    return (
      <div>
        <header className="header">Header</header>

        <aside className="first">Aside first</aside>
        <main className="main">Main</main>
        <aside className="second">Aside second</aside>

        <footer className="footer">Footer</footer>
      </div>
    )
  }
}

export default LayoutFlex
