import React, { Fragment } from "react";
import "./EstiloListaProductos.css";

function ListaProductos() {
  return (
    <Fragment>
      <div class="contenedor-lista-producto">
        <h2>Lista de productos</h2>

        <div class="contenedor-lista-buscar">
          <i class="bi bi-search"></i>
          <input type="text" class="buscar-producto" />
          <span class="btn-buscar">Buscar</span>
        </div>

        <div class="contenedor-lista-informacion">
          <a href="#seccion-1">Producto prueba #1</a>
          <div class="contenedor-lista-submenu" id="seccion-1">
            <div class="contenedor-lista-interno-productos">
              <div class="contenedor-lista-producto1">
                <div class="elemento">
                  <label>Código</label>
                  <input
                    type="number"
                    name="IdProducto"
                    value="12343212"
                    disabled
                  />
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
              <div class="contenedor-lista-producto2">
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
            <span class="btn-actualizar" onclick="mensaje()">
              Actualizar
            </span>
          </div>

          <a href="#seccion-2">Producto prueba #2</a>
          <div class="contenedor-lista-submenu" id="seccion-2">
            <div class="contenedor-lista-interno-productos">
              <div class="contenedor-lista-producto1">
                <div class="elemento">
                  <label>Código</label>
                  <input
                    type="number"
                    name="IdProducto"
                    value="9876543"
                    disabled
                  />
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
              <div class="contenedor-lista-producto2">
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
            <span class="btn-actualizar" onclick="mensaje()">
              Actualizar
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ListaProductos;
