import React from 'react'
import '../stylesheets/Boton.css'


class Boton extends React.Component {
  render() {
    return (
    <button className={ this.props.bBtnClic? 'boton-click' : 'boton-reiniciar' }
        onClick={this.props.fnManejarClic} >
        {this.props.texto}
    </button>
  )
  }
}

// function Boton({texto, bBtnClic, fnManejarClic }) {

//   return (
//     <button className={ bBtnClic? 'boton-click' : 'boton-reiniciar' }
//         onClick={fnManejarClic} >
//         {texto}
//     </button>
//   )
// }

export default Boton