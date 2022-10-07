import React from 'react';
import axios from 'axios';
import '../estilos/contenedor-boletos.css';
import '../estilos/Boton.css';
import '../estilos/cuadro-resultado.css';
import Boton from "../componentes/Boton";

export default class Primitiva extends React.Component {

    state = {    
        numeros_generados: []
    }

    generar_primitiva = () => {
        axios.get("http://127.0.0.1:5000/primitiva")
            .then(resultado => {
                this.setState({ numeros_generados: resultado.data })
            })
            .catch(error => console.log(error))

      
    }

    render() {
        return (
            <div className="contenedor-boletos">  
                <p>SUEÑA</p>
                <div className="boton">
                    <Boton Apostar={this.generar_primitiva}>Generar Apuesta</Boton>
                </div>
                <div className="cuadro">
                    {this.state.numeros_generados.sort((a,b) => a - b).join(", ")}
                </div>
                <h6>1 euros por apuesta</h6>
            
            </div>
        )
    }
}