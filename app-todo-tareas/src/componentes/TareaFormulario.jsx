import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/TareaFormulario.css'

function TareaFormulario( props ) {

  const [input, setInput] = useState('');

  const handleCambio = e => {
    //console.log('escribiendo...');
    setInput(e.target.value);
    //console.log(e.target.value);
  };
  
  const handleEnvio = e => {
    // setInput('');
    e.preventDefault();
    // console.log('enviando form');    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    //console.log(tareaNueva);    

    document.getElementById("intexto").value = '';
    setInput('');
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={handleEnvio}>
        <input className='tarea-input' type="text" placeholder='Escribe una tarea' id="intexto" name='texto' onChange={ handleCambio }/>
        <button className='tarea-boton' > Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario;