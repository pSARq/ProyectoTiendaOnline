import React, { Fragment, useState, useEffect } from "react";
import "./EstiloListaProductos.css";
//import "../productos/productosStyles.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaSearch } from "react-icons/fa";

function ListaElemetos() {
  const [mostrarM, setMostrarM] = useState(false);
  const [mostrarE, setMostrarE] = useState(false);
  const [productos, setProductos] = useState([]);
  const [ventana, setVentana] = useState();
  const [eliminar, setEliminar] = useState();
  let arregloProductos = [];
  let productoModal = [];

  // actualiza los productos

  const actualizarProducto = (evento) => {
    const id = document.getElementById("floatingidusuario").value;
    const name = document.getElementById("floatingfirstName").value;
    const lastname = document.getElementById("floatinglastName").value;
    const email = document.getElementById("floatingemail").value;
    const IDnumber = document.getElementById("floatingIDnumber").value;
    const password = document.getElementById("floatingPassword").value;
    const rol = document.getElementById("floatingRol").value;
    const state = document.getElementById("floatingState").value;

    
    const producto = {
      
      id: id,
      nombre: name,
      apellido: lastname,
      email: email,
      cedula: IDnumber,
      contraseña: password,
      rol: rol,
      estado: state,
    };

    console.log(producto);
    fetch("http://localhost:3001/update-editarusuario", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(producto),
    });

    evento.preventDefault();
    window.location.href = ("");
  };

  //Abre el modal que es la ventana emergente

  const abrirModal = (producto) => {
    if (mostrarM) {
      setMostrarM(false);
    } else {
      setMostrarM(true);
    }
    productoModal = producto;
    getVentana(productoModal);
  };

  //abre la eliminacion

  const abrirEliminacion = (producto) => {
    if (mostrarE) {
      setMostrarE(false);
    } else {
      setMostrarE(true);
    }
    productoModal = producto;
    getEliminar(producto);
  };

  // Llama los productos desde la base de datos y crea las ventanas en donde se muestran

  const getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-listadeusuario");
      const jsonResponse = await response.json();
      const responseProductos = jsonResponse.data;
      const listProductos = responseProductos.map((producto) => (
        <div className="contenedor-lista-informacion">
          <a href={"Buscarusuarios#" + producto.id + producto.nombre}>
            {producto.id} - {producto.nombre}
          </a>


          <div className="contenedor-lista-submenu" id={producto.id + producto.nombre}>
            <div className="contenedor-lista-interno-productos">

              <div className="contenedor-lista-producto1">
                desde1
                <div className="elemento">
                  <div class="form-floating mb-3">
                    <input type="text" name="ID" class="form-control" id="floatingidusuario" placeholder="Id usuario"
                      disabled="disabled" value={producto.id} readOnly />
                    <label for="floatingFName">Id ususario</label>
                  </div>
                </div>

                <div className="elemento">
                  <div class="form-floating mb-3">
                    <input type="text" name="nombre" class="form-control" id="floatingfirstName" placeholder="First name"
                      value={producto.nombre} readOnly />
                    <label for="floatingFName">First name</label>
                  </div>
                </div>


                <div className="elemento">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatinglastName" placeholder="Last name"
                      value={producto.apellido} readOnly />
                    <label for="floatingLName">Last name</label>
                  </div>
                </div>

                <div className="elemento">
                  <div class="form-floating mb-3">
                    <input type="email" name="email" class="form-control" id="floatingemail" placeholder="name@example.com"
                      value={producto.email} readOnly />
                    <label for="floatingemail">Email address</label>
                  </div>
                </div>

                <div className="elemento">
                  <div class="form-floating mb-3">
                    <input type="text" name="cedula" class="form-control" id="floatingIDnumber" placeholder="IDnumber"
                      value={producto.cedula} readOnly />
                    <label for="floatingID">ID number</label>
                  </div>
                </div>

                <div className="elemento">
                  <div class="form-floating mb-3">
                    <input type="password" name="contraseña" class="form-control" id="floatingPassword" placeholder="Password"
                      value={producto.contraseña} readOnly />
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>


                <div className="elemento">
                  <div class="form-floating">
                    <select class="form-select" name="rol" id="floatingRol" aria-label="Floating label select example" value={producto.rol} readOnly>
                      <option selected>Open this select menu</option>
                      <option value="1">Vendedor</option>
                      <option value="2">Adimistrador</option>
                    </select>
                    <label for="floatingState">Estado</label>
                  </div>
                </div>


                <div className="elemento">
                  <div class="form-floating">
                    <select class="form-select" name="estado" id="floatingState" aria-label="Floating label select example" value={producto.estado} readOnly>
                      <option selected>Open this select menu</option>
                      <option value="1">Autorizado</option>
                      <option value="2">No autorizado</option>
                    </select>
                    <label for="floatingState">Estado</label>
                  </div>
                </div>

              </div>
              aqyu1
              <div className="contenedor-producto2">


                <p>esta es otra caja</p>


              </div>
            </div>

            <Button color="success" onClick={() => abrirModal(producto)}>
              Actualizar informacion
            </Button>

            <Button color="btn btn-danger" onClick={() => abrirEliminacion(producto)} >
              Eliminar Usuario
            </Button>
          </div >
        </div >
      ));
      setProductos(listProductos);
      console.log(jsonResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Modal del codigo de actualizar -------------------

  const getVentana = () => {
    setVentana(
      <div className="container contenedor-producto">
        <h2>
          Usuario # {productoModal.id} - {productoModal.nombre}
        </h2>
        <form name="forma" method="GET" onSubmit={actualizarProducto}>
          <div className="contenedor-informacion">
            <div className="contenedor-producto1">

              desde
              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="ID" class="form-control" id="floatingidusuario" placeholder="Id usuario"
                    disabled="disabled" value={productoModal.id} readOnly />
                  <label for="floatingFName">Id ususario</label>
                </div>
              </div>

              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="nombre" class="form-control" id="floatingfirstName" placeholder="First name"
                    required="true" />
                  <label for="floatingFName">First name</label>
                </div>
              </div>

              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="apellido" class="form-control" id="floatinglastName" placeholder="Last name"
                    required="true" />
                  <label for="floatingLName">Last name</label>
                </div>
              </div>

              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="email" name="email" class="form-control" id="floatingemail" placeholder="name@example.com"
                    required="true" />
                  <label for="floatingemail">Email address</label>
                </div>
              </div>


              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="cedula" class="form-control" id="floatingIDnumber" placeholder="IDnumber"
                    required="true" />
                  <label for="floatingIDnumber">ID number</label>
                </div>
              </div>


              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="password" name="contraseña" class="form-control" id="floatingPassword" placeholder="Password"
                    required="true" />
                  <label for="floatingPassword">Password</label>
                </div>
              </div>



              <div className="elemento">
                <div class="form-floating">
                  <select class="form-select" name="rol" id="floatingRol" aria-label="Floating label select example" >
                    <option selected>Open this select menu</option>
                    <option value="1">Vendedor</option>
                    <option value="2">Administrador</option>
                  </select>
                  <label for="floatingRol">Rol</label>
                </div>
              </div>


              <div className="elemento">
                <div class="form-floating">
                  <select class="form-select" name="estado" id="floatingState" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Autorizado</option>
                    <option value="2">No autorizado</option>
                  </select>
                  <label for="floatingState">Estado</label>
                </div>
              </div>
              aqui
            </div>

            <div className="contenedor-producto2">


              <p>esta es otra caja</p>


            </div>
          </div>

          <div className="btn-informacion-producto">
            <input
              onClick={() => alert("Usuario actualizado con exito")}
              type="submit"
              value="Guardar cambios"
            />
          </div>
        </form>
      </div>
    );
  };


  // Envia la sentencia para eliminar el producto desde la base de datos

  const eliminarProducto = (evento) => {
    const id = document.getElementById("floatingidusuario").value;
    
    const producto = {
      id: id
    };
    console.log(producto);

    fetch("http://localhost:3001/delete-eliminarusuario", {
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

  //Modal de codigo de eliminar

  const getEliminar = (producto) => {
    setEliminar(
      <div className="container contenedor-producto">
        <h2>
          Usuario # {productoModal.id} - {productoModal.nombre}
        </h2>
        <form name="forma" method="GET" onSubmit={eliminarProducto}>
          <div className="contenedor-informacion">
            <div className="contenedor-producto1">


              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="ID" class="form-control" id="floatingidusuario" placeholder="Id usuario"
                    disabled="disabled" value={productoModal.id}
                    readOnly />
                  <label for="floatingidusuario">Id ususario</label>
                </div>
              </div>

              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="nombre" class="form-control" id="floatingfirstName" placeholder="First name"
                    required="true" value={productoModal.nombre}
                    readOnly />
                  <label for="floatingFName">First name</label>
                </div>
              </div>

              <div className="elemento">
              <div class="form-floating mb-3">
                <input type="text" name="apellido" class="form-control" id="floatinglastName" placeholder="Last name"
                  value={productoModal.apellido}
                  readOnly />
                <label for="floatingLName">Last name</label>
              </div>
              </div>

              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="email" name="email" class="form-control" id="floatingemail" placeholder="name@example.com"
                    value={productoModal.email} readOnly />
                  <label for="floatingemail">Email address</label>
                </div>
              </div>


              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="text" name="cedula" class="form-control" id="floatingIDnumber" placeholder="IDnumber"
                    value={productoModal.cedula} readOnly />
                  <label for="floatingID">ID number</label>
                </div>
              </div>


              <div className="elemento">
                <div class="form-floating mb-3">
                  <input type="password" name="contraseña" class="form-control" id="floatingPassword" placeholder="Password"
                    value={productoModal.contraseña} readOnly />
                  <label for="floatingPassword">Password</label>
                </div>
              </div>


              <div className="elemento">
                <div class="form-floating">
                  <select class="form-select" name="rol" id="floatingRol" aria-label="Floating label select example" placeholder="Rol"
                    value={productoModal.rol} readOnly >
                    <option selected>Open this select menu</option>
                    <option value="1">Vendedor</option>
                    <option value="2">Administrador</option>
                  </select>
                  <label for="floatingRol">Rol</label>
                </div>
              </div>

              <div className="elemento">
                <div class="form-floating">
                  <select class="form-select" name="estado" id="floatingState" aria-label="Floating label select example" placeholder="state"
                    value={productoModal.rol} readOnly >
                    <option selected>Open this select menu</option>
                    <option value="1">Autorizado</option>
                    <option value="2">No autorizado</option>
                  </select>
                  <label for="floatingRol">Rol</label>
                </div>
              </div>

            </div>
 
            <div className="contenedor-producto2">
            <p>esta es otra caja eliminar</p>

            </div>
          </div>

          <div className="btn-eliminar">
            <input

              onClick={() => alert("Usuario eliminado con exito")}
              className="btn btn-danger"
              type="submit"
              
              value="Eliminar Usuario"

            />
          </div>
        </form>
      </div>
    );
  };

  //Funcionalidad para hacer llamados desde la barra de busqueda

  const filtrar = async () => {
    const terminoBusqueda = document.getElementById("buscar").value;
    let exite = false;

    const response = await fetch("http://localhost:3001/get-listadeusuario");
    const jsonResponse = await response.json();
    arregloProductos = jsonResponse.data;

    for (const producto of arregloProductos) {
      if (producto.id == terminoBusqueda || producto.nombre.toLowerCase() == terminoBusqueda.toString().toLowerCase()) {
        document.location.href = "#" + producto.id + producto.nombre;
        exite = true;
      }
    }
    if (!exite) {
      alert("Producto no exite");
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Fragment>
      <div className="contenedor-lista-producto">
        <h2>Lista de Usuario</h2>
        {/* codigo de la barra de busqueda */}
        <div className="contenedor-lista-buscar">
          <i><FaSearch /></i>
          <input type="search" className="buscar-producto" id="buscar" placeholder="Buscar usuario" />
          <span className="btn-buscar" onClick={filtrar}>Buscar</span>
        </div>

        {/* mostrar las filas */}

        {productos}

        {/* Codigo del modal */}

        <div hidden={mostrarM}>
          <Modal className="modal-lg" isOpen={mostrarM}>
            <ModalHeader>Actualizar Usuario</ModalHeader> {/*----++++++++++++++-*/}
            <ModalBody>{ventana}</ModalBody>
            <ModalFooter>
              <Button color="btn btn-danger" onClick={abrirModal}>
                Salir
              </Button>
            </ModalFooter>
          </Modal>

          <Modal className="modal-lg" isOpen={mostrarE}>
            <ModalHeader>
              ¿Está seguro que desea eliminar el Usuario?
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

export default ListaElemetos;