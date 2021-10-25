// // // import { useAuth0 } from "@auth0/auth0-react";
// import React, { Fragment, useState, useEffect } from "react";
// import { Redirect } from "react-router";
// // import "./style.css";
// // import { Link } from "react-router-dom";
// // import Acceso from "../acceso/Acceso";

// function RegistrarVentas() {
//   function fAgrega() {
//     document.getElementById("pedido").value =
//       document.getElementById("Text").value;
//   }

//   const [validUser, setValidUser] = useState(false);
//   const { user, isAuthenticated } = useAuth0();
//   const { loginWithRedirect } = useAuth0();

//   const [products, setProducts] = useState([]);

//   const agregarPedido = (evento) => {
//     const fecha = document.getElementById("fecha").value;
//     const pedido = document.getElementById("pedido").value;
//     const n_vendedor = document.getElementById("n_vendedor").value;
//     const n_comprador = document.getElementById("n_comprador").value;
//     const a_comprador = document.getElementById("a_comprador").value;
//     const d_comprador = document.getElementById("d_comprador").value;
//     const pedidos = {
//       fecha: fecha,
//       pedido: pedido,
//       n_vendedor: n_vendedor,
//       n_comprador: n_comprador,
//       a_comprador: a_comprador,
//       d_comprador: d_comprador,
//     };
//     fetch("http://localhost:5000/hacer-pedido", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(pedidos),
//     });
//   };

//   const getProducts = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/get-products");
//       const jsonResponse = await response.json();
//       const responseProducts = jsonResponse.data;
//       const listProducts = responseProducts.map((product) => (
//         <div class="form-check">
//           <input class="form-check-input" type="checkbox" />

//           <label class="form-check-label" for="flexCheckDefault">
//             <span>{product.idProducto}</span>&nbsp;&nbsp;
//             <span>{product.nombre}</span>&nbsp;&nbsp;
//             <input type="number" className="camp-num" id="cantidad" />
//             &nbsp;&nbsp;
//           </label>
//         </div>
//       ));

//       setProducts(listProducts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const validateUserRole = async () => {
//     const response = await fetch(
//       `http://localhost:5000/get-user?email=${user.email}`
//     );
//     const jsonResponse = await response.json();
//     return jsonResponse;
//   };
//   const grantAccess = async () => {
//     let userData;
//     if (isAuthenticated) {
//       userData = await validateUserRole();
//     } else {
//       if (!verifySesion()) {
//         loginWithRedirect();
//       }

//       setValidUser(false);
//       return;
//     }

//     if (userData) {
//       if (userData.role == "admin" || userData.role == "vendedor") {
//         setValidUser(true);
//         localStorage.setItem("state", userData.role);
//         await getProducts();
//       } else {
//         localStorage.setItem("state", userData.role);
//         setValidUser(false);
//       }
//     } else {
//       setValidUser(false);
//     }
//     //console.log("Valid user: " + validUser)
//   };
//   const verifySesion = () => {
//     const cookies = document.cookie;
//     let state = false;
//     if (cookies.includes("auth0")) {
//       state = true;
//     }
//     return state;
//   };
//   useEffect(() => {
//     grantAccess();
//   }, [isAuthenticated, validUser]);

//   return (
//     <Fragment>
//       {validUser ? (
//         <body className="body-r">
//           <nav className="navbar navbar-light bg-light barr-a">
//             <div class="container-fluid">
//               <a className="navbar-brand" href="/">
//                 Registro de ventas
//               </a>
//             </div>
//           </nav>
//           <br />
//           <h4>
//             <div className="container">
//               <form
//                 name="forma"
//                 method="post"
//                 target="_black"
//                 onSubmit={agregarPedido}
//               >
//                 <div className="row caja-r">
//                   <div className="col-12 col-lg-6">
//                     <thead>
//                       <tr>
//                         <th scope="col">Id </th>
//                         <th scope="col">Nombre</th>

//                         <th scope="col">Cantidad</th>
//                       </tr>
//                     </thead>

//                     {products}

//                     {/* &nbsp;&nbsp; ID &nbsp;<input type="number" className="camp-num" id="" />
//                                     <br />
//                                     <br />
//                                     Cantidad<input type="number" className="camp-num" id="" />
//                                     <br />
//                                     <br />

//                                     <input type="submit" value="Agregar" className="boton-r" />
//                                     <br />
//                                     <br />
//                                     <br />
//                                     <table id="listado" class='hide '  >
//                                         <tr class="barr-a ">

//                                             <th>Id </th>

//                                             <th>Producto</th>


//                                             <th>Cantidad</th>

//                                             <th>Precio unitario</th>

//                                             <th>Subtotal</th>

//                                         </tr>
//                                         <tr >
//                                             <td></td>


//                                             <td>(borrador)</td>


//                                             <td>(borrador)</td>

//                                             <td>(borrador)</td>

//                                             <td>(borrador)</td>
//                                         </tr>

//     </table>
//                                <label>Total a pagar</label><input type="text" name="Total a pagar" disabled="disabled"></input>
//                                 <br />
//     <br />
//                                 <Link to="/venta-exitosa" class ="btn boton-r" onClick={calculate}>Enviar</Link>&nbsp; &nbsp; &nbsp; <Link to="/" class ="btn boton-r" >Crear nueva venta</Link>
//     */}
//                   </div>

//                   <div class="col-12 col-lg-6">
//                     &nbsp;&nbsp; Vendedor:&nbsp;&nbsp;
//                     <input
//                       type="text"
//                       name="n_vendedor"
//                       id="n_vendedor"
//                       value={user.name}
//                       disabled="disabled"
//                     ></input>
//                     <input type="text" name="pedido" id="pedido" />
//                     {products}
//                     <br />
//                     &nbsp;&nbsp;Fecha venta
//                     <input type="date" name="fecha" id="fecha" />
//                     <br />
//                     <br />
//                     <br />
//                     <center>Datos del cliente</center>
//                     <br />
//                     <p>
//                       &nbsp;&nbsp;Nombres:&nbsp;&nbsp;
//                       <input type="text" name="n_comprador" id="n_comprador" />
//                     </p>
//                     <p>
//                       &nbsp;&nbsp;Apellidos:&nbsp;&nbsp;
//                       <input type="text" name="a_comprador" id="a_comprador" />
//                     </p>
//                     <p>
//                       &nbsp;&nbsp;Documento:&nbsp;&nbsp;
//                       <input
//                         type="number"
//                         name="d_comprador"
//                         id="d_comprador"
//                       />
//                     </p>
//                     <input
//                       className="btn boton-r"
//                       onClick={() =>
//                         alert("El pedido se ha realizado con exito")
//                       }
//                       type="submit"
//                       href="/pedidos-realizados"
//                       value="Hacer pedido"
//                     />
//                     &nbsp;&nbsp;{" "}
//                     <input
//                       className="btn boton-r"
//                       type="reset"
//                       value="Nuevo pedido"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </h4>
//           <br />
//           <br />
//           <br />
//           <br />
//         </body>
//       ) : (
//         <Acceso></Acceso>
//       )}
//     </Fragment>
//   );
// }

// export default RegistrarVentas;
