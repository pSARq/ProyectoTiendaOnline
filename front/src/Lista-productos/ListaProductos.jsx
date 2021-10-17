import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EstiloListaProductos.css";
import "../Productoss/ProductosEstilo.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {FaSearch} from "react-icons/fa";  

function ListaProductos() {
  const [mostrarM, setMostrarM] = useState(false);
  const [mostrarE, setMostrarE] = useState(false);
  const [productos, setProductos] = useState([]);
  const [ventana, setVentana] = useState();
  const [eliminar, setEliminar] = useState();
  let arregloProductos = []; 
  let productoModal = [];

  const actualizarProducto = (evento) => {
    const idProducto = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const valorUnitario = document.getElementById("valor").value;
    const estado = document.getElementById("estado").value;
    const descripcion = document.getElementById("descripcion").value;
    const producto = {
      idProducto: idProducto,
      nombre: nombre,
      valorUnitario: valorUnitario,
      estado: estado,
      descripcion: descripcion,
    };

    fetch("http://localhost:3001/update-producto", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(producto),
    });

    evento.preventDefault();
    window.location.href = ("");
  };

  const abrirModal = (producto) => {
    if (mostrarM) {
      setMostrarM(false);
    } else {
      setMostrarM(true);
    }
    productoModal = producto;
    getVentana(productoModal);
  };

  const abrirEliminacion = (producto) => {
    if (mostrarE) {
      setMostrarE(false);
    } else {
      setMostrarE(true);
    }
    productoModal = producto;
    getEliminar(producto);
  };

  const getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-productos");
      const jsonResponse = await response.json();
      const responseProductos = jsonResponse.data;
      const listProductos = responseProductos.map((producto) => (
        <div className="contenedor-lista-informacion">
          <a href={"ListaProductos#" + producto.idProducto + producto.nombre}>
            {producto.idProducto} - {producto.nombre}
          </a>
          <div
            className="contenedor-lista-submenu"
            id={producto.idProducto + producto.nombre}
          >
            <div className="contenedor-lista-interno-productos">
              <div className="contenedor-lista-producto1">
                <div className="elemento">
                  <label>Código</label>
                  <input
                    id="id"
                    type="number"
                    name="IdProducto"
                    value={producto.idProducto}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Valor por unidad</label>
                  <input
                    type="number"
                    name="precio"
                    value={producto.valorUnitario}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Descripción</label>
                  <textarea
                    className="descripcion"
                    name="descripción"
                    value={producto.descripcion}
                    readOnly
                  ></textarea>
                </div>
              </div>
              <div className="contenedor-lista-producto2">
                <div className="elemento">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="Nombre"
                    value={producto.nombre}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Estado</label>
                  <select
                    name="estado"
                    className="estado"
                    value={producto.estado}
                    readOnly
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                  </select>
                </div>
              </div>
            </div>

            <Button color="success" onClick={() => abrirModal(producto)}>
              Actualizar informacion
            </Button>

            <Button
              color="btn btn-danger"
              onClick={() => abrirEliminacion(producto)}
            >
              Eliminar producto
            </Button>
          </div>
        </div>
      ));
      setProductos(listProductos);
      console.log(jsonResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVentana = () => {
    setVentana(
      <div className="container contenedor-producto">
        <h2>
          Producto # {productoModal.idProducto} - {productoModal.nombre}
        </h2>
        <form name="forma" method="GET" onSubmit={actualizarProducto}>
          <div className="contenedor-informacion">
            <div className="contenedor-producto1">
              <div className="elemento">
                <label>Código</label>
                <input
                  type="number"
                  name="IdProducto"
                  id="codigo"
                  value={productoModal.idProducto}
                  readOnly
                  disabled
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
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="btn-informacion-producto">
            <input
              onClick={() => alert("Producto actualizado con exito")}
              type="submit"
              value="Guardar cambios"
            />
          </div>
        </form>
      </div>
    );
  };

  const eliminarProducto = (evento) => {
    const idProducto = document.getElementById("codigo").value;
    const producto = {
      idProducto: idProducto,
    };
    console.log(idProducto);

    fetch("http://localhost:3001/delete-producto", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(producto),
    });

    evento.preventDefault();
    window.location.href = ("");
  };

  const getEliminar = (producto) => {
    setEliminar(
      <div className="container contenedor-producto">
        <h2>
          Producto # {productoModal.idProducto} - {productoModal.nombre}
        </h2>
        <form name="forma" method="GET" onSubmit={eliminarProducto}>
          <div className="contenedor-informacion">
            <div className="contenedor-producto1">
              <div className="elemento">
                <label>Código</label>
                <input
                  type="number"
                  name="IdProducto"
                  id="codigo"
                  value={productoModal.idProducto}
                  readOnly
                  disabled
                />
              </div>

              <div className="elemento">
                <label>Valor por unidad</label>
                <input type="number" name="precio" id="valor" required="true" value={productoModal.valorUnitario} readOnly />
              </div>

              <div className="elemento">
                <label>Descripción</label>
                <textarea
                  name="descripción"
                  id="descripcion"
                  required="true"
                  value={productoModal.descripcion}
                  readOnly
                ></textarea>
              </div>
            </div>

            <div className="contenedor-producto2">
              <div className="elemento">
                <label>Nombre</label>
                <input id="nombre" type="text" name="Nombre" required="true" value={productoModal.nombre} readOnly/>
              </div>

              <div className="elemento">
                <label>Estado</label>
                <select name="estado" id="estado" value={productoModal.estado} readOnly>
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="btn-eliminar">
            <input
              className="btn btn-danger"
              type="submit"
              value="Eliminar Producto"
            />
          </div>
        </form>
      </div>
    );
  };

  const filtrar = async () =>{
    const terminoBusqueda = document.getElementById("buscar").value;
    let exite = false;
    
    const response = await fetch("http://localhost:3001/get-productos");
      const jsonResponse = await response.json();
      arregloProductos = jsonResponse.data;
    
    for (const producto of arregloProductos) {
      if (producto.idProducto == terminoBusqueda || producto.nombre.toLowerCase() == terminoBusqueda.toString().toLowerCase()) {
        document.location.href = "#"+producto.idProducto+producto.nombre;
        exite = true;
      }
    }
    if(!exite){
      alert("Producto no exite");
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Fragment>
      <div className="contenedor-lista-producto">
        <h2>Lista de productos</h2>

        <div className="contenedor-lista-buscar">
          <i><FaSearch/></i>
          <input type="search" className="buscar-producto" id="buscar" placeholder="Buscar producto" />
          <span className="btn-buscar" onClick={filtrar}>Buscar</span>
        </div>

        {productos}

        <div hidden={mostrarM}>
          <Modal className="modal-lg" isOpen={mostrarM}>
            <ModalHeader>Actualizar Producto</ModalHeader>
            <ModalBody>{ventana}</ModalBody>
            <ModalFooter>
              <Button color="btn btn-danger" onClick={abrirModal}>
                Salir
              </Button>
            </ModalFooter>
          </Modal>

          <Modal className="modal-lg" isOpen={mostrarE}>
            <ModalHeader>
              ¿Está seguro que desea eliminar el producto?
            </ModalHeader>
            <ModalBody>{eliminar}</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={abrirEliminacion}
              >
                Volver
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
}

export default ListaProductos;
