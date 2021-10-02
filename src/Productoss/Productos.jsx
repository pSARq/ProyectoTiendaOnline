import React, { Fragment } from "react";
import "./ProductosEstilo.css";

function Productos() {

  const presionarBoton = (evento) =>{
    evento.preventDefault()
    window.open("/ListaProductos#seccion-1");
  }

  return (
    <Fragment>
      <div class="contenedor-producto">
        <h2>Productos</h2>
        <form
          name="forma"
          method="GET"
          target="_black"
          onSubmit={presionarBoton}
        >
          <div class="contenedor-informacion">
            <div class="contenedor-producto1">
              <div class="elemento">
                <label>Código</label>
                <input type="number" name="IdProducto" />
              </div>

              <div class="elemento">
                <label>Valor por unidad</label>
                <input type="number" name="precio" />
              </div>

              <div class="elemento">
                <label>Descripción</label>
                <textarea name="descripción"></textarea>
              </div>
            </div>

            <div class="contenedor-producto2">
              <div class="elemento">
                <label>Nombre</label>
                <input type="text" name="Nombre" />
              </div>

              <div class="elemento">
                <label>Estado</label>
                <select name="estado" id="estado">
                  <option value="disponible">Disponible</option>
                  <option value="no disponible">No disponible</option>
                </select>
              </div>
            </div>
          </div>

          <div class="btn-informacion-producto">
            <input onClick={() => alert('Producto guardado con exito')} type="submit" value="Agregar Producto" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Productos;
