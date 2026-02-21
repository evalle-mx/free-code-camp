import React, { useState } from "react";
import "./App.css";
import Testimonio from "./componentes/Testimonio";
import alumnos from "./data/alumnos.json";

class App extends React.Component {
 
  constructor(props) {
    super(props);  
  }

  render() {
    return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>

        {alumnos.map((alumno) => (
          <Testimonio
            key={alumno.nombre}
            nombre={alumno.nombre}
            pais={alumno.pais}
            nomimage={alumno.nomimage}
            cargo={alumno.cargo}
            empresa={alumno.empresa}
            testimonio={alumno.testimonio}
          />
        ))}
      </div>
    </div>
  );
  }
} //*/

/*
function App() {
  const [alumnosData, setAlumnosData] = useState(alumnos);
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>

        {alumnos.map((alumno) => (
          <Testimonio
            key={alumno.nombre}
            nombre={alumno.nombre}
            pais={alumno.pais}
            nomimage={alumno.nomimage}
            cargo={alumno.cargo}
            empresa={alumno.empresa}
            testimonio={alumno.testimonio}
          />
        ))}
      </div>
    </div>
  );
  ``;
} //*/

export default App;
