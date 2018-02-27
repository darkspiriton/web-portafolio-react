import React, {Component} from 'react'
import '../css/Position.css'

class Position extends Component {
  render () {
    return (
      <div>
        {/* <div className="test">
          <h1 className="relative">Pos</h1>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eum voluptatum officiis voluptas distinctio esse, sed sequi magni nulla, asperiores odio suscipit id quibusdam? Numquam voluptatibus amet enim repudiandae quisquam?</p> */}
        {/* <h1 className="absolute">Absolute</h1> */}
        <div className="poster">
          <img src="https://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg?src=gp&w=300&h=375" alt=""/>
          <p className="caption">Start Wars - Pelicula 1970</p>
        </div>
      </div>
    )
  }
}

export default Position;
