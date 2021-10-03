import React, { Fragment } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function RegistrarVentas() {
    return (
        <Fragment>

            <body className="body-r" >
                <nav className="navbar navbar-light bg-light barr-a">
                    <div class="container-fluid">
                        <a className="navbar-brand" href="#">Registro de ventas</a>
                    </div>
                </nav>
                <br />
                <h4>
                    
                        <div className="container">
                            <div className="row caja-r">
                                <div className="col-12 col-lg-6">
                                    <select name="productos" id="">
                                        <option value="">Seleccionar Productos</option>
                                        <option value="Producto1">Producto1</option>
                                        <option value="Producto2">Producto2</option>
                                        <option value="Producto3">Producto3</option>
                                        <option value="Producto4">Producto4</option>
                                        <option value="Producto6">Producto5</option>
                                        <option value="Producto6">Producto6</option>
                                    </select>&nbsp;&nbsp; ID &nbsp;<input type="number" name="" id="" />
                                    <br />
                                    <br />
                                    Cantidad<input type="number" name="" id="" />
                                    <br />
                                    <br />

                                    <input type="submit" value="Agregar" className="boton-r" />
                                    <br />
                                    <br />
                                    <br />
                                    <table id="listado" class='hide ' >
                                        <tr class="barr-a ">

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

                                    </table>
                                    <label>Total a pagar</label><input type="text" name="Total a pagar" disabled="disabled"></input>
                                    <br />
                                    <br />
                                    <Link to="/venta-exitosa" class="btn boton-r">Enviar</Link>&nbsp;&nbsp;&nbsp;<Link to="/" class="btn boton-r" >Crear nueva venta</Link>

                                </div>
                                <div class="col-12 col-lg-6">
                                   &nbsp;&nbsp; Vendedor:
                                    <br/>
                                        &nbsp;&nbsp;Fecha venta<input type="date" name="fecha" id="fecha"/>
                                            <br/>
                                                <br/>
                                                    <br/>
                                                        <center>Datos del cliente</center>
                                                        <br/>
                                                            <p>&nbsp;&nbsp;Nombres:&nbsp;&nbsp;<input type="text"/></p>
                                                            <p>&nbsp;&nbsp;Apellidos:&nbsp;&nbsp;<input type="text"/></p>
                                                            <p>&nbsp;&nbsp;Documento:&nbsp;&nbsp;<input type="number" name="" id="" /></p>
                                                        </div>

                                                    </div>

                                                </div>
                                            
                                        </h4>
                                        <br />
                                        <br />
                                        <br />
                                        <br />

                                    </body>

                                </Fragment >

                                );
}

                                export default RegistrarVentas;