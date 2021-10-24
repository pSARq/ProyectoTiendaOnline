import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavbarComponent(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  let title = props.title;

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                {/*<Link to ="/login"className="nav-link" href="#">Login</Link>*/}
                <button
                  className="Nav-Link"
                  onClick={() => loginWithRedirect()}
                >
                  login
                </button>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link" href="#">
                  Registro
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ventas" className="nav-link" href="#">
                  Ventas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vendedor" className="nav-link" href="#">
                  Vendedor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link" href="#">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                {/*<Link to ="/login"className="nav-link" href="#">Login</Link>*/}
                {isAuthenticated?<button
                  className="Nav-Link"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  logout
                </button>:null}
              </li>
            </ul>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              {isAuthenticated ? user.name : "user"}
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}
