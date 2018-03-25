import React, {Component} from 'react'
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

        <h1 className="time"> test </h1>
        <a href="#.pdf" className="link">Descargar pdf</a>
        <a href="#.txt" className="link">Descargar txt</a>

      <article>
        <h1>Mi mascota</h1>
        <img class="img" src="http://www.mundo-animal.com/blog/wp-content/plugins/special-recent-posts/cache/srpthumb-p3020-200x200-no.jpg" alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adi</p>

      </article>
      <h2>Noticias de esta semanana en devfront</h2>


      <div className="background-container">
        <h1>background</h1>
      </div>

      <div className="background-container-image">
        <h1>Goku</h1>

      </div>
      </div>
    )
  }
}

export default BoxModel;
