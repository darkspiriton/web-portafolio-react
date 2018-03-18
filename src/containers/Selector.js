import React, {Component} from 'react'
import '../css/Selector.css'

class Selector extends Component {
  render () {
    return (
      <div>
        <h1>selector etiqueta</h1>
        <h1 className="title">selector de clase</h1>
        <h1 id="id">selector id</h1>
        <div className="main-container">
          <h1>selector universal</h1>
          <p className="sub-container">1</p>
        </div>
        <div className="caseSentive">
          <h1>selector case sensitive & case insensitive</h1>
        </div>
        <h2 className="selector-group1">selector 1</h2>
        <h2 className="selector-group2">selector 2</h2>
        <h2 className="selector-group3">selector 3</h2>

        <ul>
          <li className="item">selector descendiente 1</li>
          <li className="item">selector descendiente 2</li>
          <li className="item">selector descendiente 3</li>
          <li className="item">selector descendiente 4</li>
          <li className="item">
            selector descendiente 5
            <span className="tag">(final)</span>
          </li>
        </ul>

        <div className="mayor">hermano</div>
        <div className="menor">hermano siguiente 1</div>
        <div className="menor">hermano siguiente 2</div>
        <div className="menor">hermano siguiente 3</div>

        <div>
          <input type="date" required/>
          <input type="text" placeholder="input-text" required/>
          <input type="number" placeholder="input-number" required/>
          <input type="text" placeholder="termina-input" required/>
          <input type="text" placeholder="contiene-dni" required/>
          <input type="text" placeholder="tiene espacio" required/>
        </div>

        <div>
          <a href="" className="button btn-orange" > Dale click </a>
          <a href="" className="button btn-red" > Dale click 2</a>
        </div>

      </div>
    )
  }
}
export default Selector
