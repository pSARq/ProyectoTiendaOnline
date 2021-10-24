import React, { Fragment, useEffect } from "react";
import "./ProductosEstilo.css";

function Productos() {

  const obtenerId = async () =>{
    const response = await fetch("http://localhost:3001/get-productos");
      const jsonResponse = await response.json();
      const responseProductos = jsonResponse.data;
      const listProductos = responseProductos.map((producto) =>(
        document.getElementById("codigo").value = producto.idProducto+1
      ));
  }

  const agregarProducto = (evento) => {
    const id = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const valorUnitario = document.getElementById("valor").value;
    const estado = document.getElementById("estado").value;
    const descripcion = document.getElementById("descripcion").value;
    const producto = {
      "nombre": nombre, 
      "valorUnitario": valorUnitario, 
      "estado": estado, 
      "descripcion": descripcion};
    console.log(id, nombre);

    fetch("http://localhost:3001/add-producto", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    evento.preventDefault();
    // window.open(`/ListaProductos#${id}${nombre}`);
    window.open('/ListaProductos');
    window.location.href = window.location.href;

  };

  useEffect(() => {
    obtenerId();
  }, []);


  return (
    <Fragment>
      <div className="contenedor-producto">
        <h2>Productos</h2>
        <form
          name="forma"
          method="GET"
          target="_black"
          onSubmit={agregarProducto}
        >
          <div className="contenedor-informacion">
            <div className="contenedor-producto1">
              <div className="elemento">
                <label>Código</label>
                <input
                  type="number"
                  name="IdProducto"
                  id="codigo"
                  readOnly
                />
              </div>

              <div className="elemento">
                <label>Valor por unidad</label>
                <input type="number" name="precio" id="valor" required="true" />
              </div>

              <div className="elemento">
                <label>Descripción</label>
                <textarea
                  name="descripción"
                  id="descripcion"
                  required="true"
                ></textarea>
              </div>
            </div>

            <div className="contenedor-producto2">
              <div className="elemento">
                <label>Nombre</label>
                <input id="nombre" type="text" name="Nombre" required="true" />
              </div>

              <div className="elemento">
                <label>Estado</label>
                <select name="estado" id="estado">
                  <option value="disponible">Disponible</option>
                  <option value="no disponible">No disponible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="btn-informacion-producto">
            <input
              onClick={() => alert("Producto guardado con exito")}
              type="submit"
              value="Agregar Producto"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Productos;