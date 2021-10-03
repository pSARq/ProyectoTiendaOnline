import React, { Fragment } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function DetalleVenta() {
    return (
        <Fragment>
            <body className="body-r">
            <nav class="navbar navbar-light bg-light barr-a">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Detalles de venta</a>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <h3>
                            ID de venta:
                            <p></p>
                            Fecha:
                            <p></p>
                            Vendedor:



                        </h3>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h3>

                            Nombres:
                            <p></p>

                            Apellidos:
                            <p></p>
                            N° documento:
                            <p></p>
                            Detalles de pedido:

                        </h3>
                    </div>
                </div>
            </div>
            
                <center>
                    <h3>
                    <tr className="boton-r">
                        
                        <th>Id </th>


                        <th>Producto</th>

                        <th>Cantidad</th>

                        <th>Precio unitario</th>

                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>(borrador)</td>
                        <td>(borrador)</td>
                        <td>(borrador)</td>
                        <td>(borrador)</td>
                        <td>(borrador)</td>
                    </tr>
                    </h3>
                


            
            <h1>Total a pagar:</h1>

            <h2>
                <Link to="/"  type="button" className="btn  boton-r">Crear nueva venta</Link>
                
            </h2>
            </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </body>
        </Fragment >
    );

}
export default DetalleVenta;