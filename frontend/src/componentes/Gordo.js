import React from 'react';
import axios from 'axios';
import '../estilos/contenedor-boletos.css';
import '../estilos/Boton.css';
import '../estilos/cuadro-resultado.css';
import Boton from "../componentes/Boton";

export default class Gordo extends React.Component {

    state = {    
        numeros_generados: []
    }

    generar_gordo = () => {
        axios.get("http://127.0.0.1:5000/gordo")
            .then(resultado => {
                this.setState({ numeros_generados: resultado.data })
            })
            .catch(error => console.log(error))

      
    }

    render() {
        return (
            <div className="contenedor-boletos">  
                <p>PODRIAS SER TÚ</p>
                <div className="boton">
                    <Boton Apostar={this.generar_gordo}>Generar Apuesta</Boton>
                </div>
                <div className="cuadro">
                    {this.state.numeros_generados.sort((a,b) => a - b).join(", ")}
                </div>
                <h6>1.50 euros por apuesta</h6>
            
            </div>
        )
    }
}