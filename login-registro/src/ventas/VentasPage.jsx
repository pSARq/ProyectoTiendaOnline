import React, { Fragment, } from 'react';

import './registerStyles.css';
//import logo from '../assets/img/logo.png';
//import apiBseUrl from '../shared/utils/Api';

const VentasPage = () => {

    function producto() {
        const input1 = document.getElementById("Cantidad").value.toLowerCase();
        const input2 = document.getElementById("Valor").value.toLowerCase();
        var valor3 = input1 * input2;
        document.getElementById("Subtotal").value = valor3;
    }

    function genera_tabla() {

        var tblBody = document.querySelector("tbody");
        
        var hilera =React.createElement("tr");

        var ID = document.createElement("td");
        var valor1 = document.getElementById("ID").value;
        //const input2 = document.getElementById('Valor').value.toLowerCase();
        //var textoCelda = document.createTextNode(valor);
        ID.appendChild(valor1);
        hilera.appendChild(ID);
        tblBody.appendChild(hilera);

        var Descripcion = document.createElement("td");
        var valor2 = document.getElementById("Descripcion").value;
        //var textoCelda = document.createTextNode(valor);
        Descripcion.appendChild(valor2);
        hilera.appendChild(Descripcion);
        tblBody.appendChild(hilera);

        var Magnitud = document.createElement("td");
        var valor3 = document.getElementById("Magnitud").value;
        //const input1 = document.getElementById('Valor').value.toLowerCase();
        //var textoCelda = document.createTextNode(valor);
        Magnitud.appendChild(valor3);
        hilera.appendChild(Magnitud);
        tblBody.appendChild(hilera);

        var Cantidad = document.createElement("td");
        var valor4 = document.getElementById("Cantidad").value;
        //var textoCelda = document.createTextNode(valor);
        Cantidad.appendChild(valor4);
        hilera.appendChild(Cantidad);
        tblBody.appendChild(hilera);

        var Valor = document.createElement("td");
        var valor5 = document.getElementById('Valor').value;
        //const input2 = document.getElementById('Valor').value.toLowerCase();
        //var textoCelda = document.createTextNode(valor);
        Valor.appendChild(valor5);
        hilera.appendChild(Valor);
        tblBody.appendChild(hilera);

        var Subtotal = document.createElement("td");
        Subtotal.setAttribute('id', 'totalitem[]');
        var valor6 = document.getElementById("Subtotal").value;
        //var textoCelda = document.createTextNode(valor);
        Subtotal.appendChild(valor6);
        hilera.appendChild(Subtotal);
        tblBody.appendChild(hilera);

        var eliminar = document.createElement("td");
        eliminar.setAttribute('style', 'text-align: center;');
        eliminar.innerHTML = '<input type="button" class="btn btn-success"  value="-"/>';
        hilera.appendChild(eliminar);

    }


    return (
        <Fragment >

            <section class="form-login">
                {/* <img src="assets/img/logo.png"> */}
                <h5>Detalle de venta</h5>

                <label for="ID">ID: </label>
                <input class="controls" type="text" disabled="disabled" name="ID" value="" />
                <label for="Nombre">Nombre: </label>
                <input class="controls" type="text" name="Nombre" value="" />
                <label for="Cedula">Cedula: </label>
                <input class="controls" type="text" name="Cedula" value="" />
                <label for="Fecha">Fecha: </label>
                <input class="controls" type="" name="Fecha" value="" />

                <select name="Estado" class="controls">
                    <option selectd="" value="">Estado</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Cancelada">Cancelada</option>
                    <option value="Entregada">Entregada</option>
                </select>

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

                        <tr>
                            <th><input type="text" class="form-control" name="ID" id="ID" /></th>
                            <th><input class="form-control" type="text" name="Descripcion" id="Descripcion" /></th>
                            <th><input class="form-control" type="text" name="Magnitud" id="Magnitud" /></th>
                            <th><input class="form-control" type="number" name="cantidad" id="Cantidad" /></th>
                            <th><input class="form-control" type="number" name="valor" id="Valor" onKeyUp={producto} /></th>
                            <th><input class="form-control" disabled="disabled" type="number" name="subtotal" id="Subtotal" /></th>
                            <th><input type="button" class="btn btn-success" id="adicionar" onclick={genera_tabla} value="+" /></th>
                        </tr>
                    </thead>

                    <tbody>
                    </tbody>

                </table>

                <label for="Total">Total: </label>
                <input class="controls" type="" name="total" value="" />

                <button class="buttons" >Guardar</button>
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