import React, { Fragment, } from 'react';

import './registerStyles.css';
//import logo from '../assets/img/logo.png';
//import apiBseUrl from '../shared/utils/Api';

const VentasPage = () => {
    return (
        <Fragment >

            <section class="form-venta">
                {/* <img src="assets/img/logo.png"> */}
                <h5>Detalle de venta</h5>
                <div className="datos-venta">
                    <div className="datos-empresa">

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingDate" placeholder="Date" />
                            <label for="floatingDate">Fecha</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInvoice" placeholder="Invoice" />
                            <label for="floatingInvoice">Factura</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingSeller" placeholder="Seller" />
                            <label for="floatingSeller">Vendedor</label>
                        </div>

                    </div>

                    <div className="datos-cliente">

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="cedula" placeholder="Customer" />
                            <label for="floatingCustomer">Cedula Cliente</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingfirstName" placeholder="First name"
                            /* onChange={(dataname) => setName(dataname.target.value)} */ />
                            <label for="floatingFName">First name</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatinglastName" placeholder="Last name"
                                /* onChange={(dataLastname) => setLastname(dataLastname.target.value)} */ />
                            <label for="floatingLName">Last name</label>
                        </div>
                    </div>
                </div>



                <div class="form-floating">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selectd="" value="">Open this menu to select status</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
                    <label for="floatingSelect">Estado</label>
                </div>


                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col" >ID</th>
                            <th scope="col" > Descripcion </th>
                            <th scope="col" >Magnitud</th>
                            <th scope="col" >Cantidad</th>
                            <th scope="col" >Valor</th>
                            <th scope="col" >Subtotal</th>

                        </tr>
                        
                    </thead>

                    <tbody>

                        <tr>
                            <td><input type="text" class="form-control" name="ID" id="ID" /></td>
                            <td><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></td>
                            <td><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></td>
                            <td><input class="form-control" type="number" name="cantidad" id="Cantidad" /></td>
                            <td><input class="form-control" type="number" name="valor" id="Valor" /* onKeyUp={producto} */ /></td>
                            <td><input class="form-control" /* disabled="disabled" */ type="number" name="subtotal" id="Subtotal" /></td>

                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" name="ID" id="ID" /></td>
                            <td><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></td>
                            <td><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></td>
                            <td><input class="form-control" type="number" name="cantidad" id="Cantidad" /></td>
                            <td><input class="form-control" type="number" name="valor" id="Valor" /* onKeyUp={producto} */ /></td>
                            <td><input class="form-control" /* disabled="disabled" */ type="number" name="subtotal" id="Subtotal" /></td>

                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" name="ID" id="ID" /></td>
                            <td><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></td>
                            <td><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></td>
                            <td><input class="form-control" type="number" name="cantidad" id="Cantidad" /></td>
                            <td><input class="form-control" type="number" name="valor" id="Valor" /* onKeyUp={producto} */ /></td>
                            <td><input class="form-control" /* disabled="disabled" */ type="number" name="subtotal" id="Subtotal" /></td>

                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" name="ID" id="ID" /></td>
                            <td><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></td>
                            <td><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></td>
                            <td><input class="form-control" type="number" name="cantidad" id="Cantidad" /></td>
                            <td><input class="form-control" type="number" name="valor" id="Valor" /* onKeyUp={producto} */ /></td>
                            <td><input class="form-control" /* disabled="disabled" */ type="number" name="subtotal" id="Subtotal" /></td>

                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" name="ID" id="ID" /></td>
                            <td><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></td>
                            <td><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></td>
                            <td><input class="form-control" type="number" name="cantidad" id="Cantidad" /></td>
                            <td><input class="form-control" type="number" name="valor" id="Valor" /* onKeyUp={producto} */ /></td>
                            <td><input class="form-control" /* disabled="disabled"  */ type="number" name="subtotal" id="Subtotal" /></td>

                        </tr>


                    </tbody>

                </table>



                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Total</button>
                    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>


                <div>
                    <button type="button" class="btn btn-primary" /* onClick={enviardatos} */ >Guardar Ventas</button>
                </div>

                {/* <script>
                                                const boton = document.querySelector
                                                ('button');
                                                boton.addEventListener('click',function (){
                                                    alert("los cambios se realizaron con exito")
                                                });
                                                boton.addEventListener('click',function (){
                                                    location.href = 'Registeroventa.html'
                                                });
                                            </script> */}

            </section>


        </Fragment >

    )
}
export default VentasPage;