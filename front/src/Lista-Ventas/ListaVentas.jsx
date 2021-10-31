import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EstiloListaVentas.css";
import "../Productoss/ProductosEstilo.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaSearch } from "react-icons/fa";

function ListaVentas() {
  const [mostrarM, setMostrarM] = useState(false);
  const [mostrarE, setMostrarE] = useState(false);
  const [ventas, setVentas] = useState([]);
  const [ventana, setVentana] = useState();
  const [eliminar, setEliminar] = useState();
  let arregloVentas = [];
  let ventaModal = [];

  const actualizarVenta = (evento) => {
    const id = document.getElementById("codigo").value;
    const fecha = document.getElementById("fecha").value;
    const id_producto = document.getElementById("codigo_producto").value;
    const n_producto = document.getElementById("n_producto").value;
    const precio_unitario = document.getElementById("precio_unitario").value;
    const cantidad = document.getElementById("cantidad").value;
    const total = document.getElementById("total").value;
    const id_comprador = document.getElementById("codigo_comprador").value;
    const n_comprador = document.getElementById("n_comprador").value;
    const a_comprador = document.getElementById("a_comprador").value;
    const id_vendedor = document.getElementById("codigo_vendedor").value;
    const n_vendedor = document.getElementById("n_vendedor").value;
    const a_vendedor = document.getElementById("a_vendedor").value;
    const venta = {
      id: id,
      id_producto: id_producto,
      id_comprador: id_comprador,
      id_vendedor: id_vendedor,
      fecha: fecha,
      n_producto: n_producto,
      precio_unitario: precio_unitario,
      cantidad: cantidad,
      total: total,
      n_comprador: n_comprador,
      a_comprador: a_comprador,
      n_vendedor: n_vendedor,
      a_vendedor: a_vendedor
    };

    console.log("Esta es la venta",venta);

    fetch("http://localhost:3001/update-venta", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(venta),
    });

    evento.preventDefault();
    window.location.href = "";
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
          <a href={"ListaVentas#" + venta.id + venta.n_comprador}>
            {venta.id} - {venta.n_comprador}
          </a>
          <div
            className="contenedor-lista-submenu"
            id={venta.id + venta.n_comprador}
          >
            <div className="contenedor-lista-interno-ventas">
              <div className="contenedor-lista-venta1">

              <label className="subtitulos">PRODUCTO</label>
                
                <div className="elemento">
                  <label>Código de la venta</label>
                  <input
                    id="id"
                    type="number"
                    name="id"
                    value={venta.id}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Id del producto</label>
                  <input
                    id="id_producto"
                    type="number"
                    name="id_producto"
                    value={venta.id_producto}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Fecha</label>
                  <input
                    type="text"
                    name="fecha"
                    value={venta.fecha}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Nombre producto</label>
                  <input
                    type="text"
                    name="n_producto"
                    value={venta.n_producto}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Valor por unidad</label>
                  <input
                    type="number"
                    name="precio_unitario"
                    value={venta.precio_unitario}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Cantidad</label>
                  <input
                    type="number"
                    name="cantidad"
                    value={venta.cantidad}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Total a pagar</label>
                  <input
                    type="text"
                    name="total"
                    value={venta.total}
                    readOnly
                  />
                </div>
              </div>
              <div className="contenedor-lista-venta2">
                <label className="subtitulos">CLIENTE</label>

                <div className="elemento">
                  <label>Id del cliente</label>
                  <input
                    id="id_comprador"
                    type="number"
                    name="id_comprador"
                    value={venta.id_comprador}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Nombre cliente</label>
                  <input
                    type="text"
                    name="n_comprador"
                    value={venta.n_comprador}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Apellido cliente</label>
                  <input
                    type="text"
                    name="a_comprador"
                    value={venta.a_comprador}
                    readOnly
                  />
                </div>

                <label className="subtitulos">VENDEDOR</label>

                <div className="elemento">
                  <label>Id del vendedor</label>
                  <input
                    id="id_vendedor"
                    type="number"
                    name="id_vendedor"
                    value={venta.id_vendedor}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Nombre vendedor</label>
                  <input
                    type="text"
                    name="Nombre"
                    value={venta.n_vendedor}
                    readOnly
                  />
                </div>

                <div className="elemento">
                  <label>Apellido vendedor</label>
                  <input
                    type="text"
                    name="a_vendedor"
                    value={venta.a_vendedor}
                    readOnly
                  />
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
      <div className="container contenedor-producto">
        <h2>
          Venta # {ventaModal.id} - {ventaModal.n_comprador}
        </h2>
        <form name="forma" method="GET" onSubmit={actualizarVenta}>
          <div className="contenedor-informacion">
            <div className="contenedor-venta1">
              <label className="subtitulos">PRODUCTO</label>
              <div className="elemento">
                <label>Código de la venta</label>
                <input
                  id="codigo"
                  type="number"
                  name="id"
                  value={ventaModal.id}
                  readOnly
                />
              </div>

              <div className="elemento">
                  <label>Id del producto</label>
                  <input
                    id="codigo_producto"
                    type="number"
                    name="id_producto"
                  />
                </div>

              <div className="elemento">
                  <label>Fecha</label>
                  <input
                    type="date"
                    name="fecha"
                    id="fecha"
                  />
                </div>

              <div className="elemento">
                <label>Nombre producto</label>
                <input type="text" name="n_producto" id="n_producto"/>
              </div>

              <div className="elemento">
                <label>Valor por unidad</label>
                <input type="number" name="precio_unitario" id="precio_unitario"/>
              </div>

              <div className="elemento">
                <label>Cantidad</label>
                <input type="number" name="cantidad" id="cantidad"/>
              </div>

              <div className="elemento">
                <label>Total a pagar</label>
                <input type="number" name="total" id="total"/>
              </div>
            </div>
            <div className="contenedor-lista-venta2">
              <label className="subtitulos">CLIENTE</label>

              <div className="elemento">
                  <label>Id del cliente</label>
                  <input
                    id="codigo_comprador"
                    type="number"
                    name="id_comprador"
                  />
                </div>

              <div className="elemento">
                <label>Nombre cliente</label>
                <input type="text" name="n_comprador" id="n_comprador"/>
              </div>

              <div className="elemento">
                <label>Apellido cliente</label>
                <input type="text" name="a_comprador" id="a_comprador"/>
              </div>

              <label className="subtitulos">VENDEDOR</label>

              <div className="elemento">
                  <label>Id del vendedor</label>
                  <input
                    id="codigo_vendedor"
                    type="number"
                    name="id_vendedor"
                  />
                </div>

              <div className="elemento">
                <label>Nombre vendedor</label>
                <input type="text" name="n_vendedor" id="n_vendedor"/>
              </div>

              <div className="elemento">
                <label>Apellido vendedor</label>
                <input type="text" name="a_vendedor" id="a_vendedor"/>
              </div>
            </div>
          </div>

          <div className="btn-informacion-producto">
            <input
              onClick={() => alert("Venta actualizada con exito")}
              type="submit"
              value="Guardar cambios"
            />
          </div>
        </form>
      </div>
    );
  };

  const eliminarVenta = (evento) => {
    const id = document.getElementById("id").value;
    const venta = {
      id: id,
    };
    console.log(id);

    fetch("http://localhost:3001/delete-venta", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(venta),
    });

    evento.preventDefault();
    window.location.href = "";
  };

  const getEliminar = (venta) => {
    setEliminar(
      <div className="container contenedor-producto">
        <h2>
          Venta # {ventaModal.id} - {ventaModal.n_comprador}
        </h2>
        <form name="forma" method="GET" onSubmit={eliminarVenta}>
          <div className="contenedor-informacion">
            <div className="contenedor-venta1">
              <label className="subtitulos">PRODUCTO</label>
              <div className="elemento">
                <label>Código de la venta</label>
                <input
                  id="id"
                  type="number"
                  name="id"
                  value={ventaModal.id}
                  readOnly
                />
              </div>

              <div className="elemento">
                  <label>Id del producto</label>
                  <input
                    id="id_producto"
                    type="number"
                    name="id_producto"
                    value={venta.id_producto}
                    readOnly
                  />
                </div>

              <div className="elemento">
                  <label>Fecha</label>
                  <input
                    type="text"
                    name="fecha"
                    value={venta.fecha}
                    readOnly
                  />
                </div>

              <div className="elemento">
                <label>Nombre producto</label>
                <input type="text" name="n_producto" value={ventaModal.n_producto} readOnly />
              </div>

              <div className="elemento">
                <label>Valor por unidad</label>
                <input type="number" name="precio_unitario" value={ventaModal.precio_unitario} readOnly/>
              </div>

              <div className="elemento">
                <label>Cantidad</label>
                <input type="number" name="cantidad" value={ventaModal.cantidad} readOnly />
              </div>

              <div className="elemento">
                <label>Total a pagar</label>
                <input type="text" name="total" value={ventaModal.total} readOnly/>
              </div>
            </div>
            <div className="contenedor-lista-venta2">
              <label className="subtitulos">CLIENTE</label>

              <div className="elemento">
                  <label>Id del cliente</label>
                  <input
                    id="id_comprador"
                    type="number"
                    name="id_comprador"
                    value={venta.id_comprador}
                    readOnly
                  />
                </div>

              <div className="elemento">
                <label>Nombre cliente</label>
                <input type="text" name="n_comprador" value={ventaModal.n_comprador} readOnly/>
              </div>

              <div className="elemento">
                <label>Apellido cliente</label>
                <input type="text" name="a_comprador" value={ventaModal.a_comprador} readOnly/>
              </div>

              <label className="subtitulos">VENDEDOR</label>

              <div className="elemento">
                  <label>Id del vendedor</label>
                  <input
                    id="id_vendedor"
                    type="number"
                    name="id_vendedor"
                    value={venta.id_vendedor}
                    readOnly
                  />
                </div>

              <div className="elemento">
                <label>Nombre vendedor</label>
                <input type="text" name="n_vendedor" value={ventaModal.n_vendedor} readOnly/>
              </div>

              <div className="elemento">
                <label>Apellido vendedor</label>
                <input type="text" name="a_vendedor" value={ventaModal.a_vendedor} readOnly/>
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

  const filtrar = async () => {
    const terminoBusqueda = document.getElementById("buscar").value;
    let exite = false;

    const response = await fetch("http://localhost:3001/get-ventas");
    const jsonResponse = await response.json();
    arregloVentas = jsonResponse.data;

    for (const venta of arregloVentas) {
      if (
        venta.id == terminoBusqueda ||
        venta.n_comprador.toLowerCase() == terminoBusqueda.toString().toLowerCase()
      ) {
        document.location.href = "#" + venta.id + venta.n_comprador;
        exite = true;
      }
    }
    if (!exite) {
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
          <i>
            <FaSearch />
          </i>
          <input
            type="search"
            className="buscar-venta"
            id="buscar"
            placeholder="Buscar venta"
          />
          <span className="btn-buscar" onClick={filtrar}>
            Buscar
          </span>
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
            <ModalHeader>¿Está seguro que desea eliminar la venta?</ModalHeader>
            <ModalBody>{eliminar}</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={abrirEliminacion}>
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
