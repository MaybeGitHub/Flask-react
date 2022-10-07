import React from 'react';
import '../estilos/logo.css';

function Logo(props) {
  return (
    <div className="logo">
      <img 
        className='logo-2'
        src={require(`../imagenes/Logo-${props.imagen}.png`)}
        alt='Foto de loterias'/>
    </div>
  )
  }

  export default Logo