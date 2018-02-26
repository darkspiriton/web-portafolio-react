import React, {Component} from 'react'
import '../css/Normalize.css'
import '../css/BoxModel.css'

class BoxModel extends Component {
  render() {
    return (
      <div>
        <article className="main">
          <h1>BoxModel</h1>
          <p>Yo soy el contenido del articulo</p>
        </article>

        <article className="alter">
          <h1>BoxModel 2</h1>
          <p>Yo soy el contenido del articulo 2</p>
        </article>

        <div className="box">
          <h1 className="title">Hola box</h1>
          <a href="#">url1</a>
          <a href="#">url2</a>
          <a href="#">url3</a>
        </div>
        <div className="box2">
          <h1 className="title">Hola box2</h1>
          <a href="#">url4</a>
          <a href="#">url5</a>
          <a href="#">url6</a>
        </div>

        <div className="caja">
          text
        </div>

        <div className="main-background">
          <img src="" alt="" className="background"/>
        </div>

        <div className="gear">

        </div>

      </div>
    )
  }
}

export default BoxModel;
