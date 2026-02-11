import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css'
import fccLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BtClear from './components/BtClear'

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input+val);

  }

  const calcularResultado =() => {
    if(input){
      setInput( evaluate )
    }
    else{
      alert('Ingrese Valores')
    }
  }

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img src={fccLogo} alt="Logo de FreeCodeCamp" className='fcc-logo'/>
      </div>
      <div className="contenedor-calculadora">
        <Pantalla  input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput} >8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          <BtClear handleClear={ () => setInput('')} >Clear </BtClear>
        </div>
        
      </div>
    </div>
  )
}

export default App
