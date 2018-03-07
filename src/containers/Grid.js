import React, {Component} from 'react'
import '../css/Normalize.css'
import '../css/Grid.css'

class Grid extends Component {
  render () {
    let _type = 'template'
    if (_type === 'intro') {
      return (
        <div>
          <div className="grid-container">
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
            <div className="grid-item">10</div>
            <div className="grid-item">11</div>
            <div className="grid-item">12</div>
          </div>
        </div>
      )
    } else if (_type === 'template') {
      return (
        <div class="main">
          <header>Header</header>
          <footer>Footer</footer>
          <main>Main</main>
          <aside>Aside 1</aside>
          <aside>Aside 2</aside>
        </div>
      )
    }
  }
}

export default Grid
