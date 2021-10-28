import React, { Fragment, useState } from 'react';
import './productosStyles.css';
import logo from '../assets/img/logo.png';
import apiBseUrl from '../shared/utils/Api';

const ProductosPage = () => {
    const [name, setName] = useState("");
    const [unitprice, setUnitprice] = useState(0);
    const [stock, setStock] = useState("");
    const [state, setState] = useState("");
    const [description, setDescription] = useState("");

    const enviardatos = async () => {
        const elementos = {
            "nombre": name,
            "preciounitario": unitprice,
            "stock": stock,
            "estado": state,
            "descripcion": description,
            /* "rol": "",
            "estado": "pendiente" */
        };
        const response = await fetch(`${apiBseUrl}/add-listadeproductos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(elementos),
        });
        const jsonResponse = await response.json();


        document.getElementById("newForm").reset();
        alert("Producto guardado con exito")
    }

    return (
        <Fragment >
            <section className="form-registro">

                <img src={logo} alt="" />

                <h5>Formulario De Producto</h5>
                <form id="newForm">
                    <div class="form-floating mb-3">
                        <input type="text"
                            class="form-control"
                            id="floatingName"
                            placeholder="First name"
                            onChange={(dataname) => setName(dataname.target.value)} />
                        <label for="floatingFName">Nonbre del producto</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingName" placeholder="unitprice"
                            onChange={(dataunitprice) => setUnitprice(dataunitprice.target.value)} />
                        <label for="floatingLName">Precio Unitario</label>
                    </div>


                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingID" placeholder="stock"
                            onChange={(datastock) => setStock(datastock.target.value)} />
                        <label for="floatingID">Inventario</label>
                    </div>


                    <div class="form-floating">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(datastate) => setState(datastate.target.value)} >
                            <option selected>Open this select menu</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>

                        </select>
                        <label for="floatingSelect">Estado</label>
                    </div>


                    <div class="form-floating">
                        <textarea type="text" class="form-control" placeholder="Leave a comment here" id="Descripcion del producto" onChange={(datadescription) => setDescription(datadescription.target.value)}></textarea>
                        <label for="floatingInput">Descripcion del producto</label>
                    </div>

                    <div>
                        <button type="button" class="btn btn-primary" onClick={enviardatos} > Guardar</button>
                    </div>

                </form>

            </section>
        </Fragment>
    )
}
export default ProductosPage;