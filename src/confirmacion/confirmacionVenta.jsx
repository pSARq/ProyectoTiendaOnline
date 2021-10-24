import React, { Fragment } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function ConfirmacionVenta(){
    return(
        <Fragment>
            <body className="body-r">
            <nav className="navbar navbar-light bg-light barr-a">
    <div className="container-fluid">
      <a className="navbar-brand" href="/login">Venta exitosa</a>
      </div>
      </nav>
      <center className="caja-r margen-r caja-x">
      <h1> La venta (id venta) se ha registro con exito</h1>
    <br/>
  <br/>
  <br/>
  
    <h2><input type="button" name="boton" value="Cerrar" onclick="window.close()" class="btn btn-danger"/>

      <Link to="/detalle" exact    class="btn btn-primary"> Ver Detalles</Link>
    </h2>
      </center>
    
  
            </body>
        </Fragment>
    );
}

export default ConfirmacionVenta;