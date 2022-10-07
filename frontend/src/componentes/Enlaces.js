
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Bonoloto from '../componentes/Bonoloto';
import Ruta from '../componentes/Ruta';
import Primitiva from '../componentes/Primitiva';
import Euromillon from '../componentes/Euromillon';
import Gordo from '../componentes/Gordo';
import '../estilos/enlaces.css';
import '../App.css';
function Enlaces () {
    return (
        <Router>
        <div className="enlaces">
          <ul>
            <li className="sorteos">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bonoloto">Bonoloto</Link>
            </li>
            <li>
              <Link to="/primitiva">Primitiva</Link>
            </li>
            <li>
              <Link to="/euromillon">Euromillon</Link>
            </li>
            <li>
              <Link to="/gordo">Gordo</Link>
            </li>
          </ul>
          <div>
            <Routes>
              <Route exact path='/' element={<Ruta />}></Route>
              <Route exact path='/bonoloto' element={<Bonoloto />}></Route>
              <Route exact path='/primitiva' element={<Primitiva />}></Route>
              <Route exact path='/euromillon' element={<Euromillon />}></Route>
              <Route exact path='/gordo' element={<Gordo />}></Route>
              
            </Routes>
          </div>
        </div>
      </Router>
        
    )
}
export default Enlaces


