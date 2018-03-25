import React from 'react'
import '../css/Pseudoclases.css'
const Pseudoclases = () => (
  <div>
    <nav className="menu">
      <a href="#parrafo1" className="menu-item">Link 1</a>
      <a href="#parrafo2" className="menu-item">Link 2</a>
      <a href="#parrafo3" className="menu-item">Link 3</a>
      <a href="#form" className="menu-item">Form</a>
    </nav>
    {/* <div className="container">
      <p class="parrafo" id="parrafo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore itaque, tempora doloremque, minima totam nobis corrupti voluptas veritatis inventore nam atque, maxime amet modi. Nulla est unde mollitia praesentium.</p>
    </div> */}
    <div className="container">
      <div id="parrafo1" className="parrafo">
        <h1>Parrafo 1</h1>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio repellendus eos aliquam architecto, quas expedita totam nobis debitis dolor eveniet consectetur tenetur et molestiae quis minima nulla aperiam illum veniam!</p>
      </div>
      <div id="parrafo2" className="parrafo">
      </div>
      <div id="parrafo3" className="parrafo">
        <h1>Parrafo 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum doloremque quae id nulla eaque itaque quis tempore quaerat voluptatibus veritatis explicabo modi, voluptas ea eligendi voluptates inventore, excepturi facilis?</p>
      </div>
      <div id="form" className="form-pseudoclase">
        <div className="form-group">
          <label htmlFor="name">Disabled</label>
          <input name="name" type="text" disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Ready</label>
          <input name="name" type="text" />
        </div>
        <div className="form-group">
          <input id="targer1" value="1" type="radio"/>
          <label htmlFor="targer">Activo</label>
        </div>
        <div className="form-group">
          <form action="">
            <input id="targer1"type="text" required/>
            <label htmlFor="targer">Required</label>
            <input className="input-optional" type="text" />
            <label htmlFor="targer">Optional</label>
            <input type="email" />
            <label htmlFor="targer">Valid Email</label>
            <input type="number" max="10"/>
            <label htmlFor="targer">Number Range</label>
          </form>
        </div>
        <div className="form-child">
          <div>Parrafo 0</div>
          <p>Parrafo 1</p>
          <p>Parrafo 2</p>
          <p>Parrafo 3</p>
          <p>Parrafo 4</p>
          <p>Parrafo 5</p>
          <p>Parrafo 6</p>
          <p>Parrafo 7</p>
          <p>Parrafo 8</p>
          <p>Parrafo 9</p>
          <p>Parrafo 10</p>
        </div>
      </div>
    </div>
  </div>
)
export default Pseudoclases
