import React from 'react'
import '../stylesheets/Tarea.css'
//https://react-icons.github.io/react-icons/icons/ai/
import { AiFillDelete } from "react-icons/ai";

function Tarea( { id, texto, completada, fnCompletarTarea, fnEliminarTarea }) {

  return (
    <div className={ completada ? 'tarea-contenedor completada':'tarea-contenedor' }>
        <div className="tarea-texto" onClick={ () => fnCompletarTarea(id) }>
            { texto }
        </div>
        <div className="tarea-contenedor-iconos" onClick={ () => fnEliminarTarea(id) }>
            <AiFillDelete  className='tarea-icono'/>
        </div>
    </div>
  )
}

export default Tarea