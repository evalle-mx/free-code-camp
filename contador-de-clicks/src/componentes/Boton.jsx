import React from 'react'
import '../stylesheets/Boton.css'

function Boton({texto, bBtnClic, fnManejarClic }) {

  return (
    <button className={ bBtnClic? 'boton-click' : 'boton-reiniciar' }
        onClick={fnManejarClic} >
        {texto}
    </button>
  )
}

export default Boton