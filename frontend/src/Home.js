
import './App.css';

import Logo from "./componentes/Logo"




function Home() {
  return (
    <div className="App">
      <div className="logo">
        <Logo
        imagen="1"
        />
         <Logo
        imagen="2"
        />
        <div className="logo-3">
          
        </div>
      
      </div>
      <div className="titulo">
        <h1>Bienvenido a Loterias y Apuestas del Estado</h1>
      </div>
    </div>
    
    

  );
}

export default Home;
