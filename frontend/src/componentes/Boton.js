import React from "react";
import "../estilos/Boton.css"

const Boton = (props) => (
    <div  onClick={props.Apostar}>
      {props.children}
    </div>
);


export default Boton;