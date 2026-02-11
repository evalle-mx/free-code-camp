import React from 'react';
import '../stylesheets/Boton.css'

function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && ( valor != '=');
    };

    const alertar = () => {
      console.log('click');
    }
  return (
    <div className={`btn-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
    onClick={ () => props.manejarClic(props.children) }>
        {props.children}
    </div>
  )
}

export default Boton

//props.manejarClic(props.children)