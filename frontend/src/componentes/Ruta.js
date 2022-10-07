import React, {useEffect, useState} from "react";
import axios from 'axios';
import '../App.css';

function Ruta() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: 'http://127.0.0.1:5000',
        });

        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setList]);

  return (
    <div className="titulo">
      {(typeof list.Loteria === "undefined") ? (
        <p>Loading...</p>): (list.Loteria.map((Loteria, i) => (
            <p key={i}>{Loteria}</p>
          )
        )
      )
    }
    
    </div>
  );
}

export default Ruta;