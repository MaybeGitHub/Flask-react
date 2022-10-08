import React, { useState } from 'react';
import axios from 'axios';
import '../estilos/contenedor-boletos.css';
import '../estilos/Boton.css';
import '../estilos/cuadro-resultado.css';
import Boton from "../componentes/Boton";

function Bonoloto() {

    const [state, setState] = useState({ numeros: [], complementarios: [] });

    const generar_bonoloto = () => {
        axios.get("http://127.0.0.1:5000/bonoloto")
            .then(resultado => {

                const new_state = {
                    numeros: resultado.data.numeros,
                    complementarios: resultado.data.complementarios
                };

                setState(new_state);
            })
            .catch(error => console.log(error))
    }

    return (

        <div className="contenedor-boletos" >
            <p>JUEGA</p>

            <div className="boton">
                <Boton Apostar={generar_bonoloto}>Generar Apuesta</Boton>
            </div>
            <div className="cuadro">
                {state.numeros.sort((a, b) => a - b).join(", ")}
            </div>
            <div className="cuadro">
                {state.complementarios.sort((a, b) => a - b).join(", ")}
            </div>
            <h6>0.50 euros por apuesta</h6>

        </div>

    )
}

export default Bonoloto;