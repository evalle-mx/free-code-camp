import React from 'react'
import './App.css'
import fccLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.fnClick = this.fnClick.bind(this);
    this.fnReiniciar = this.fnReiniciar.bind(this);
  }

  fnClick() {
    // console.log('Click');
    this.setState(({ numClics }) => ({ numClics:numClics+1 }));
  }

  fnReiniciar() {
     // console.log('Reiniciar');
    this.setState({ numClics:0 }); //setNumClics(0);
  }

  render(){
    return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={fccLogo} alt="Logo de FreeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={this.state.numClics} />
        <Boton texto='Clic' bBtnClic={true} fnManejarClic={this.fnClick} />
        <Boton texto='Reiniciar' bBtnClic={false} fnManejarClic={this.fnReiniciar} />

      </div>
    </div>
  )
  }
}

/*
function App() {

  const [numClics, setNumClics] = useState(0);

  const fnClick = () => {
    // console.log('Click');
    setNumClics(numClics +1);
  };

  const fnReiniciar = () => {
    // console.log('Reiniciar');
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={fccLogo} alt="Logo de FreeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto='Clic' bBtnClic={true} fnManejarClic={fnClick} />
        <Boton texto='Reiniciar' bBtnClic={false} fnManejarClic={fnReiniciar} />

      </div>
    </div>
  )
} //*/

export default App
