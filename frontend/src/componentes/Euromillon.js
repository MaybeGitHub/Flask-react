import React from 'react';
import axios from 'axios';
import '../estilos/contenedor-boletos.css';
import '../estilos/Boton.css';
import '../estilos/cuadro-resultado.css';
import Boton from "../componentes/Boton";

export default class Euromillon extends React.Component {

    state = {    
        numeros_generados: []
    }

    generar_euromillon = () => {
        axios.get("http://127.0.0.1:5000/euromillones")
            .then(resultado => {
                this.setState({ numeros_generados: resultado.data })
            })
            .catch(error => console.log(error))

      
    }

    render() {
        return (
            <div className="contenedor-boletos">  
                <p>Y SI TOCA</p>
                <div className="boton">
                    <Boton Apostar ={this.generar_euromillon}>Generar Apuesta</Boton>
                </div >
                <div className="cuadro">
                    {this.state.numeros_generados.sort((a,b) => a - b).join(", ")}
                </div>
                <h6>2.50 euros por apuesta</h6>
            
            </div>
        )
    }
}