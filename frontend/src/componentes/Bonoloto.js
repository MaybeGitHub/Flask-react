import React from 'react';
import axios from 'axios';
import '../estilos/contenedor-boletos.css';
import '../estilos/Boton.css';
import '../estilos/cuadro-resultado.css';
import Boton from "../componentes/Boton";

export default class Bonoloto extends React.Component {

    state = { 
        numeros: [],
        complementario: []
    }

    generar_bonoloto = () => {
        axios.get("http://127.0.0.1:5000/bonoloto")
            .then(resultado => {

                const new_state = { 
                    numeros: resultado.data.numeros,
                    complementario: resultado.data.complementario
                };

                this.setState(new_state);
            })
            .catch(error => console.log(error))

        // fetch("http://127.0.0.1:5000/generar_numeros")
        //     .then(response => response.json())
        //     .then(resultado => {
        //         this.setState({ numeros_generados: resultado })
        //     })
        //     .catch(error => console.log(error))
    }

    render() {
        return (
            
            <div className="contenedor-boletos" >  
                <p>JUEGA</p>
                
                <div className="boton">
                    <Boton Apostar={this.generar_bonoloto}>Generar Apuesta</Boton>
                </div>
                <div className="cuadro">
                    {this.state.numeros_generados.sort((a,b) => a - b).join(", ")}
                </div>
                <div className="cuadro">
                    {this.state.numeros_generados.sort((a,b) => a - b).join(", ")}
                </div>
                <h6>0.50 euros por apuesta</h6>
                
                
            </div>
            
        )
    };
}