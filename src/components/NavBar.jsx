import React from "react";
import { NavLink } from "react-router-dom";

let logo = require("../images/logo240px.png");
 
function NavBar() {
        
    return (
      
    <>   
      
      <nav className="containerA">
        <img className="A"src={logo} alt="Madera Engenharia"/>
        
        <p className="B"><NavLink to="/Home">Home</NavLink></p>
        <p className="C"><NavLink to="/Projects1">Soluções Industriais</NavLink></p>
        <p className="D"><NavLink to="/Projects2">Soluções Ferroviárias</NavLink></p>
        <p className="E"><NavLink to="/Company">Quem Somos</NavLink></p>
        <p className="F"><NavLink to="/Contact">Entre em Contato</NavLink></p>
                 
      </nav>


    </>
    );
  };

export default NavBar;