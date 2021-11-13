import React, { Fragment, } from 'react';

import './registerStyles.css';
//import logo from '../assets/img/logo.png';
//import apiBseUrl from '../shared/utils/Api';

const VentasPage = () => {

    /*    function producto() {
            const input1 = document.getElementById("Cantidad").value.toLowerCase();
            const input2 = document.getElementById("Valor").value.toLowerCase();
            var valor3 = input1 * input2;
            document.getElementById("Subtotal").value = valor3;
        }
     */
    /* function genera_tabla() {

        var tblBody = document.querySelector("tbody");

        var hilera = React.createElement("tr");

        var ID = React.createElement("td");
        var valor1 = document.getElementById("ID").value;
        //const input2 = document.getElementById('Valor').value.toLowerCase();
        //var textoCelda = document.createTextNode(valor);
        ID.appendChild(valor1);
        hilera.appendChild(ID);
        tblBody.appendChild(hilera);

        var Descripcion = React.createElement("td");
        var valor2 = document.getElementById("Descripcion").value;
        //var textoCelda = document.createTextNode(valor);
        Descripcion.appendChild(valor2);
        hilera.appendChild(Descripcion);
        tblBody.appendChild(hilera);

        var Magnitud = React.createElement("td");
        var valor3 = document.getElementById("Magnitud").value;
        //const input1 = document.getElementById('Valor').value.toLowerCase();
        //var textoCelda = document.createTextNode(valor);
        Magnitud.appendChild(valor3);
        hilera.appendChild(Magnitud);
        tblBody.appendChild(hilera);

        var Cantidad = React.createElement("td");
        var valor4 = document.getElementById("Cantidad").value;
        //var textoCelda = document.createTextNode(valor);
        Cantidad.appendChild(valor4);
        hilera.appendChild(Cantidad);
        tblBody.appendChild(hilera);

        var Valor = React.createElement("td");
        var valor5 = document.getElementById('Valor').value;
        //const input2 = document.getElementById('Valor').value.toLowerCase();
        //var textoCelda = document.createTextNode(valor);
        Valor.appendChild(valor5);
        hilera.appendChild(Valor);
        tblBody.appendChild(hilera);

        var Subtotal = React.createElement("td");
        Subtotal.setAttribute('id', 'totalitem[]');
        var valor6 = document.getElementById("Subtotal").value;
        //var textoCelda = document.createTextNode(valor);
        Subtotal.appendChild(valor6);
        hilera.appendChild(Subtotal);
        tblBody.appendChild(hilera);

        var eliminar = React.createElement("td");
        //eliminar.setAttribute('style', 'text-align: center;');
        eliminar.innerHTML = '<input type="button" class="btn btn-success"  value="-"/>';
        hilera.appendChild(eliminar);

    }
 */

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
                        {/* 
                        <tr>
                            <th><input type="text" class="form-control" name="ID" id="ID" /></th>
                            <th><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></th>
                            <th><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></th>
                            <th><input class="form-control" type="number" name="cantidad" id="Cantidad" /></th>
                            <th><input class="form-control" type="number" name="valor" id="Valor" onKeyUp={producto} /></th>
                            <th><input class="form-control" disabled="disabled" type="number" name="subtotal" id="Subtotal" /></th>
                             <th><input type="button" class="btn btn-success" id="adicionar" onclick={genera_tabla} value="+" /></th> 
                        </tr> */}
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