import React, {Component} from 'react'
import '../css/Style.css'

class Style extends Component {
  methodClick = (msg, e) => {
    // alert(msg)
    console.log(e.target)
  }
  render() {
    return (
      <div className="main">
        <h1> Style </h1>
        <h1
          className="titulo">
          Clikme
        </h1>
        <ul>
          <li class="test1 yellow pink">item 1</li>
          <li class="test2 pink">item 2 <span> soy un span </span></li>
          <li class="pink">item 3</li>
        </ul>
        <h2 class="first title">soy un titulo</h2>
        <p class="first title two">soy un parraflo</p>
        <p>soy otro parrafo</p>
        <a href="www.facebook.com">Ir a Facebook</a>
        <a href="www.Google.com" title="Google">Ir a Google</a>
        <span title="Titulo">Soy un span</span>

        {/* Pseudo clases */}
        <a
          href="#"
          class="link">Moreno Profile
        </a>
        <p>Hola soy un p</p>
        <p></p>
        <p>Hola soy un p2</p>

        <form action="">
          <input type="text" placeholder="Insert" disabled={false}/>
          <input type="radio" className="elegir"/>
          <label htmlFor="elegir">Opcion a elegir</label>
          <input type="radio" className="elegir2" />
          <label htmlFor="elegir2">Opcion a elegir</label>

          <input type="text" placeholder="required" required/>
          <input type="text" placeholder="optional" optional/>

          <input type="email" placeholder="email" optional/>

          <input type="number" max="10"/>
        </form>
        <div>
          <div>parrafo-2</div>
          <div>parrafo-1</div>
          <p class="parrafo">Parrafo 1</p>
          <p class="parrafo">Parrafo 2</p>
          <p class="parrafo">Parrafo 3</p>
          <p class="parrafo">Parrafo 4</p>
          <p class="parrafo">Parrafo 5</p>
          <p class="parrafo">Parrafo 6</p>
          <p class="parrafo">Parrafo 7</p>
          <p class="parrafo">Parrafo 8</p>
          <p class="parrafo">Parrafo 9</p>
          <p class="parrafo">Parrafo 10</p>
          <p class="parrafo">Parrafo 11</p>
        </div>
      </div>
    )
  }
}

export default Style
