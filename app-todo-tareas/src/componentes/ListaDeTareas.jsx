import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import '../stylesheets/ListaDeTareas.css'
import Tarea from './Tarea';

function ListaDeTareas() {

  const [ tareas, setTareas ] = useState([]);

  const addTarea = tarea => {
    console.log(tarea);
    if(tarea.texto.trim() ){
      tarea.texto = tarea.texto.trim();
      const tareasUpd = [tarea, ...tareas]; //Agrega la tarea al principio LIFO
      setTareas( tareasUpd );
    }
    else{
      console.log('Texto es vacio');      
    }
  };

  const delTarea = id => {
    // console.log(`Eliminar tarea ${id}`);
    const tareasUpd = tareas.filter( tarea => tarea.id !== id );
    setTareas( tareasUpd );
    
  };

  const completeTarea = id => {
    const tareasUpd = tareas.map(
      tarea => {
        if(tarea.id === id ){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      }
    );
    setTareas( tareasUpd );
  };

  return (
    <>
    <TareaFormulario onSubmit={addTarea} />
    <div className="tareas-lista-contenedor">
        {
          tareas.map( 
            (tarea) => 
              <Tarea key={tarea.id} id={tarea.id}
              texto={tarea.texto} completada={tarea.completada}
              fnCompletarTarea={completeTarea}
              fnEliminarTarea={delTarea} /> 
          )
        }
    </div>
    </>
  )
}

export default ListaDeTareas