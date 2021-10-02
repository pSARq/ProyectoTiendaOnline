import React from "react";
import { Link } from 'react-router-dom';
import "./indexstyles.css"
function NavbarComponet(propos) {
    let titulo = propos.titulo;



    return (
        <div>
            <nav class="cabecera">
                <img src="assets/img/logo.png"/>

                <ul>
                <button> <a href="https://www.chocolatetradicional.com.co">Nuestra empresa</a></button>
                <button><a href="https://www.chocolatetradicional.com.co">Inversionista</a></button>
                <button><a href="https://www.chocolatetradicional.com.co">Productos</a></button>
                <button><a href="https://www.chocolatetradicional.com.co">Recetas</a></button>
                <button><a href="https://www.chocolatetradicional.com.co">Comunidad</a></button>


                </ul>
            </nav>
        </div>
    )


}

export default NavbarComponet;