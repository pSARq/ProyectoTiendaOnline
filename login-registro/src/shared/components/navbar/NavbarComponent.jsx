import React from 'react';
import './navbarStyles.css';
import logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


function NavbarComponent(props) {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();

    
    // let title = props.title;
    return (

        <nav className="cabecera">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                
                {isAuthenticated ? null : <button onClick={() => loginWithRedirect()}>Log In</button>}
                {isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button> : null}
                <Link to="/register" > <button> Crear una cuenta </button></Link>
                <Link to="/Registrodeusuarios" > <button> Registro de usuarios</button></Link>
                <Link to="/Listadeusuarios" > <button> Lista de usuarios</button></Link>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                    <button class="btn btn-outline-success" type="submit">{isAuthenticated ? user.name : "User"}</button>
                </form>
            </ul>



        </nav>

    )
}
export default NavbarComponent;