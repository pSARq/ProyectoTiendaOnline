import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router';
import ForbidenComponent from '../shared/components/forbiden/ForbidenComponent';
import { Link } from 'react-router-dom';
import apiBseUrl from '../shared/utils/Api';
/*rema main*/

function InformeUsuario() {
  
  const [elementos, setElementos] = useState([]);
  const [validUser, setValidUser] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const [data, setdata] = useState({ buscar: '' });
  
 const getElementos = async () => {
    
    try {
      //const response = await fetch(`http://localhost:3001/get-registrodeusuario?email=${user.email}`);
      // const response = await fetch(`${apiBseUrl}/get-registrodeusuario?email=${user.email}`);
      const response = await fetch(`${apiBseUrl}/get-buscarusuario?email=${user.email}`);
      //const response = await fetch(`http://localhost:3001/get-registrodeusuario`);
      const jsonResponse = await response.json();
      // console.log(jsonResponse)
      const responseElementos = jsonResponse;
      const listElementos = (
        <tr>
          <th scope="row">{responseElementos.id}</th>
          <td>{responseElementos.nombre}</td>
          <td>{responseElementos.apellido}</td>
          <td>{responseElementos.email}</td>
          <td>{responseElementos.cedula}</td>
          <td>{responseElementos.contraseña}</td>
          <td>{responseElementos.rol}</td>
          <td>{responseElementos.estado}</td>
        </tr>);


      setElementos([listElementos])
    }
    catch (error) {
      console.log(error)
    }
  }

// -----funcion buscar

const getElementos1 = async () => {
    
  try {
    const elemento = document.querySelector("buscar");
    const response = await fetch(`${apiBseUrl}/get-buscarusuario?elemento=${elemento}`);
    //const response = await fetch(`http://localhost:3001/get-registrodeusuario`);
    const jsonResponse = await response.json();
    // console.log(jsonResponse)
    const responseElementos = jsonResponse;
    const listElementos = (
      <tr>
        <th scope="row">{responseElementos.id}</th>
        <td>{responseElementos.nombre}</td>
        <td>{responseElementos.apellido}</td>
        <td>{responseElementos.email}</td>
        <td>{responseElementos.cedula}</td>
        <td>{responseElementos.contraseña}</td>
        <td>{responseElementos.rol}</td>
        <td>{responseElementos.estado}</td>
      </tr>);


    setElementos([listElementos])
  }
  catch (error) {
    console.log(error)
  }
}

//-----fin funcion buscar

  const validateUserRole = async () => {
    // const response = await fetch(`http://localhost:3001/get-registrodeusuario?email=${user.email}`);
    const response = await fetch(`http://localhost:3001/get-buscarusuario?email=${user.email}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  const grantAccess = async () => {
    let userData;
    if (isAuthenticated) {
      userData = await validateUserRole();
    }
    else {
      /*       window.localStorage.href ="https://dev-mpgxhejy.us.auth0.com/u/login?state=hKFo2SBCSGFyWWNPMmJuYlpsTnFPbmxocHh2NkRVOTRXQ0hrR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDJZZFF6bnp1UWxaNG1Wc3JoeGtsQUJ3NU9SSk92RlNGo2NpZNkgM3puQmJwcGJNUmZKeFlkblJLUThmMXljZ0xEck5XbHk" */
      if (!verifySesion()) {
        loginWithRedirect();
      }
      setValidUser(false);
      return;
    }
    if (userData) {
      if (userData.rol != "invited") {
        setValidUser(true);
        localStorage.setItem("state", userData.rol);
        // await getElementos();
      }
      else {
        localStorage.setItem("state", userData.rol);
        setValidUser(false);
      }
    }
    else {
      setValidUser(false);
    }
  }
  const verifySesion = () => {
    const cookies = document.cookie;
    let state = false;
    if (cookies.includes('auth0')) {
      state = true;
    }
    return state;
  }
  useEffect(() => {
    grantAccess();
    //getElementos();
    //la linea anterior hace que getElemento  se ejecute de forma automatica

  }, [isAuthenticated, validUser]);
  //if(grantAccess()){
  return (

    <div className="container">
      {validUser ?
        <div>

          <div><p> BUSACAR USUARIO</p></div>
          {/*--------------------------------------------------------------------------*/}

          <div class="row">
            {/* <div class="col-lg-6"> */}
            <div class="input-group">
              <div class="form-outline">
                <input type="search" 
                class="form-control" 
                name="buscar"
                id="buscar" 
                /* onChange={(dataname) => setdata(dataname.target.value)} *//>

              </div>
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button" onClick={getElementos1}>Buscar</button>
              </span>
              <h3>{Date.buscar}</h3>
              {/* </div> */}
            </div>
          </div>
         

          {/* <div class="input-group">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">Search</label> 
              </div>
              <span class="input-group-btn">
            <button type="button" class="btn btn-primary">Buscar
              <i class="fas fa-search"></i> 
            </button>
            </span>
            
          </div> */}

          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">APELLIDO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">CEDULA</th>
                <th scope="col">CONTRASEÑA</th>
                <th scope="col">ROL</th>
                <th scope="col">ESTADO</th>
                <th scope="col">EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {elementos}
            </tbody>
          </table>



          {/* const jsonResponse = document.getElementById('datos');
   console.log(jsonResponse)
 */}



        </div> : <ForbidenComponent />}
      {/* <h1>{data.buscar}</h1> */}
    </div>


  )
}

export default InformeUsuario;
