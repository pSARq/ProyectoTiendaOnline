import React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";

function Barra(pros) {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading} = useAuth0();
    let title = pros.title;





    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
                        <Link to="/registro" className="nav-link" >Registro</Link>
                        {isAuthenticated ? null : <button onClick={() => loginWithRedirect()}>ingresar</button>}
                       {isAuthenticated ? <a className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>salir</a>:null}
                       <button class="btn btn-outline-success" type="submit">{isAuthenticated ? user.name:"usurio"}</button>
                        <a className="nav-link" href="#">Pricing</a>:
                        <a className="nav-link disabled">Disabled</a>
                        <form class="d-flex">
                        
                            <button class="btn btn-outline-success" type="submit">{isAuthenticated ? user.name:"usurio"}</button>

                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Barra;