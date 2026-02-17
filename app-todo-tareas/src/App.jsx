import { useState } from 'react'
import './App.css'
import LogoFcc from './componentes/LogoFcc'
import ListaDeTareas from './componentes/ListaDeTareas'
// import Tarea from './componentes/Tarea'
// import TareaFormulario from './componentes/TareaFormulario'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-tareas">
      <LogoFcc />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
