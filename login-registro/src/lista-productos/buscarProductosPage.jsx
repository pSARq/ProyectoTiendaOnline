import React, { Fragment, useState, useEffect } from "react";
import "./EstiloListaProductos.css";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  
  const mensaje = (evento) => {
    
    console.log("hola");
  }

  const getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-productos");
      const jsonResponse = await response.json();
      const responseProductos = jsonResponse.data;
      const listProductos = responseProductos.map((producto) => (
        <div class="contenedor-lista-informacion">
          <a href={"ListaProductos#"+producto.idProducto + producto.nombre}>{producto.idProducto} - {producto.nombre}</a>
          <div class="contenedor-lista-submenu" id={producto.idProducto + producto.nombre}>
            <div class="contenedor-lista-interno-productos">
              <div class="contenedor-lista-producto1">
                <div class="elemento">
                  <label>Código</label>
                  <input
                    id="id"
                    type="number"
                    name="IdProducto"
                    value={producto.idProducto}
                    disabled
                  />
                </div>

                <div class="elemento">
                  <label>Valor por unidad</label>
                  <input
                    type="number"
                    name="precio"
                    value={producto.valorUnitario}
                  />
                </div>

                <div class="elemento">
                  <label>Descripción</label>
                  <textarea
                    className="descripcion"
                    name="descripción"
                    value={producto.descripcion}
                  ></textarea>
                </div>
              </div>
              <div class="contenedor-lista-producto2">
                <div class="elemento">
                  <label>Nombre</label>
                  <input type="text" name="Nombre" value={producto.nombre} />
                </div>

                <div class="elemento">
                  <label>Estado</label>
                  <select
                    name="estado"
                    className="estado"
                    value={producto.estado}
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                  </select>
                </div>
              </div>
            </div>

            <span class="btn-actualizar" onclick={mensaje()}>
              Actualizar
            </span>
          </div>
        </div>
      ));
      setProductos(listProductos);
      console.log(jsonResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Fragment>
      <div class="contenedor-lista-producto">
        <h2>Lista de productos</h2>

        <div class="contenedor-lista-buscar">
          <i class="bi bi-search"></i>
          <input type="search" class="buscar-producto" />
          <span class="btn-buscar">Buscar</span>
        </div>

        {productos}
      </div>
    </Fragment>
  );
}

export default ListaProductos;
