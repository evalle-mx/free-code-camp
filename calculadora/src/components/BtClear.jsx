import React from 'react'
import '../stylesheets/BtClear.css'

const BtClear = ( props) => (
    <div className='boton-clear' onClick={ props.handleClear } >
        {props.children}
    </div>
)

export default BtClear