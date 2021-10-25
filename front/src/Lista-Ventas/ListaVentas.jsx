import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EstiloListaVentas.css";
import "../Productoss/ProductosEstilo.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {FaSearch} from "react-icons/fa";  

function ListaVentas() {
  const [mostrarM, setMostrarM] = useState(false);
  const [mostrarE, setMostrarE] = useState(false);
  const [ventas, setVentas] = useState([]);
  const [ventana, setVentana] = useState();
  const [eliminar, setEliminar] = useState();
  let arregloVentas = []; 
  let ventaModal = [];

  const actualizarVenta = (evento) => {
    const idVenta = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const valorUnitario = document.getElementById("valor").value;
    const estado = document.getElementById("estado").value;
    const descripcion = document.getElementById("descripcion").value;
    const venta = {
      idVenta: idVenta,
      nombre: nombre,
      valorUnitario: valorUnitario,
      estado: estado,
      descripcion: descripcion,
    };

    fetch("http://localhost:3001/update-venta", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(venta),
    });

    evento.preventDefault();
    window.location.href = ("");
  };

  const abrirModal = (venta) => {
    if (mostrarM) {
      setMostrarM(false);
    } else {
      setMostrarM(true);
    }
    ventaModal = venta;
    getVentana(ventaModal);
  };

  const abrirEliminacion = (venta) => {
    if (mostrarE) {
      setMostrarE(false);
    } else {
      setMostrarE(true);
    }
    ventaModal = venta;
    getEliminar(venta);
  };

  const getVentas = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-ventas");
      const jsonResponse = await response.json();
      const responseVentas = jsonResponse.data;
      const listVentas = responseVentas.map((venta) => (
        <div className="contenedor-lista-informacion">
          <a href={"ListaVentas#" + venta.idVenta + venta.nombre}>
            {venta.idVenta} - {venta.nombre}
          </a>
          <div
            className="contenedor-lista-submenu"
            id={venta.idVenta + venta.nombre}
          >
            <div className="contenedor-lista-interno-venta">
              <div className="contenedor-lista-venta1">
                <div className="elemento">
                  <label>Código</label>
                  <input
                    id="id"
                    type="number"
                    name="IdVenta"
                    value={venta.idVenta}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Valor por unidad</label>
                  <input
                    type="number"
                    name="precio"
                    value={venta.valorUnitario}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Descripción</label>
                  <textarea
                    className="descripcion"
                    name="descripción"
                    value={venta.descripcion}
                    readOnly
                  ></textarea>
                </div>
              </div>
              <div className="contenedor-lista-venta2">
                <div className="elemento">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="Nombre"
                    value={venta.nombre}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Estado</label>
                  <select
                    name="estado"
                    className="estado"
                    value={venta.estado}
                    readOnly
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                  </select>
                </div>
              </div>
            </div>

            <Button color="success" onClick={() => abrirModal(venta)}>
              Actualizar informacion
            </Button>

            <Button
              color="btn btn-danger"
              onClick={() => abrirEliminacion(venta)}
            >
              Eliminar venta
            </Button>
          </div>
        </div>
      ));
      setVentas(listVentas);
      console.log(jsonResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVentana = () => {
    setVentana(
      <div className="container contenedor-venta">
        <h2>
          Venta # {ventaModal.idVenta} - {ventaModal.nombre}
        </h2>
        <form name="forma" method="GET" onSubmit={actualizarVenta}>
          <div className="contenedor-informacion">
            <div className="contenedor-venta1">
              <div className="elemento">
                <label>Código</label>
                <input
                  type="number"
                  name="IdVenta"
                  id="codigo"
                  value={ventaModal.idVenta}
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

            <div className="contenedor-venta2">
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

          <div className="btn-informacion-venta">
            <input
              onClick={() => alert("Venta actualizado con exito")}
              type="submit"
              value="Guardar cambios"
            />
          </div>
        </form>
      </div>
    );
  };

  const eliminarVenta = (evento) => {
    const idVenta = document.getElementById("codigo").value;
    const venta = {
      idVenta: idVenta,
    };
    console.log(idVenta);

    fetch("http://localhost:3001/delete-venta", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(venta),
    });

    evento.preventDefault();
    window.location.href = ("");
  };

  const getEliminar = (venta) => {
    setEliminar(
      <div className="container contenedor-venta">
        <h2>
          Venta # {ventaModal.idVenta} - {ventaModal.nombre}
        </h2>
        <form name="forma" method="GET" onSubmit={eliminarVenta}>
          <div className="contenedor-informacion">
            <div className="contenedor-venta1">
              <div className="elemento">
                <label>Código</label>
                <input
                  type="number"
                  name="IdVenta"
                  id="codigo"
                  value={ventaModal.idVenta}
                  readOnly
                  disabled
                />
              </div>

              <div className="elemento">
                <label>Valor por unidad</label>
                <input type="number" name="precio" id="valor" required="true" value={ventaModal.valorUnitario} readOnly />
              </div>

              <div className="elemento">
                <label>Descripción</label>
                <textarea
                  name="descripción"
                  id="descripcion"
                  required="true"
                  value={ventaModal.descripcion}
                  readOnly
                ></textarea>
              </div>
            </div>

            <div className="contenedor-venta2">
              <div className="elemento">
                <label>Nombre</label>
                <input id="nombre" type="text" name="Nombre" required="true" value={ventaModal.nombre} readOnly/>
              </div>

              <div className="elemento">
                <label>Estado</label>
                <select name="estado" id="estado" value={ventaModal.estado} readOnly>
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
              value="Eliminar Venta"
            />
          </div>
        </form>
      </div>
    );
  };

  const filtrar = async () =>{
    const terminoBusqueda = document.getElementById("buscar").value;
    let exite = false;
    
    const response = await fetch("http://localhost:3001/get-ventas");
      const jsonResponse = await response.json();
      arregloVentas = jsonResponse.data;
    
    for (const venta of arregloVentas) {
      if (venta.idVenta == terminoBusqueda || venta.nombre.toLowerCase() == terminoBusqueda.toString().toLowerCase()) {
        document.location.href = "#"+venta.idVenta+venta.nombre;
        exite = true;
      }
    }
    if(!exite){
      alert("Venta no exite");
    }
  };

  useEffect(() => {
    getVentas();
  }, []);

  return (
    <Fragment>
      <div className="contenedor-lista-venta">
        <h2>Lista de ventas</h2>

        <div className="contenedor-lista-buscar">
          <i><FaSearch/></i>
          <input type="search" className="buscar-venta" id="buscar" placeholder="Buscar venta" />
          <span className="btn-buscar" onClick={filtrar}>Buscar</span>
        </div>

        {ventas}

        <div hidden={mostrarM}>
          <Modal className="modal-lg" isOpen={mostrarM}>
            <ModalHeader>Actualizar Venta</ModalHeader>
            <ModalBody>{ventana}</ModalBody>
            <ModalFooter>
              <Button color="btn btn-danger" onClick={abrirModal}>
                Salir
              </Button>
            </ModalFooter>
          </Modal>

          <Modal className="modal-lg" isOpen={mostrarE}>
            <ModalHeader>
              ¿Está seguro que desea eliminar el venta?
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

export default ListaVentas;