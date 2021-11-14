import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router';
import ForbidenComponent from '../shared/components/forbiden/ForbidenComponent';
import { Link } from 'react-router-dom';
import apiBseUrl from '../shared/utils/Api';


function InformeUsuario() {
  const [elementos, setElementos] = useState([]);
  const [validUser, setValidUser] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const getElementos = async () => {
  
    try {
    const response = await fetch(`${apiBseUrl}/get-listadeusuario`);
      
      const jsonResponse = await response.json();
      //console.log(jsonResponse)
      const responseElementos = jsonResponse.data; /*para traer toda la tabla*/
      
      /*para traer toda la tabla*/ 
       const listElementos = responseElementos.map((elementos) =>
        <tr>
          <th scope="row">{elementos.id}</th>
          <td>{elementos.nombre}</td>
          <td>{elementos.apellido}</td>
          <td>{elementos.email}</td>
          <td>{elementos.cedula}</td>
          <td>{elementos.contraseña}</td>
          <td>{elementos.rol}</td>
          <td>{elementos.estado}</td>
          {/* <td><Link to="/editaruarios" ><input type="button" class="btn btn-success"  value="EDITAR"/></Link></td> */}
          
        </tr>
      ); 
 
      

      setElementos([listElementos])
    }
    catch (error) {
      console.log(error)
    }
  }


  const validateUserRole = async () => {
    const response = await fetch(`${apiBseUrl}/get-listadeusuario?email=${user.email}`);
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
      if(!verifySesion()){
       loginWithRedirect();
      }
      setValidUser(false);
      return;
    }
    if (userData) {
      if (userData.rol != "invited") {
        setValidUser(true);
        localStorage.setItem("state", userData.rol);
        await getElementos();
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
  const verifySesion = () =>{
    const cookies = document.cookie;
    let state = false;
    if(cookies.includes('auth0')){
      state = true;
    }
    return state;
  }
  useEffect(() => {
    grantAccess();
    //getElementos();

  }, [isAuthenticated, validUser]);
  //if(grantAccess()){

    function genera_tabla() {

    }
  return (

    <div className="container">
      {validUser ? <div>

        <div><p> INFORME USUARIO</p></div>
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
              {/* <th scope="col">ACCION</th> */}
            </tr>
          </thead>
          <tbody>
            {elementos}
          </tbody>
        </table>

      </div> : <ForbidenComponent />}
    </div>
  )
}
/*else{
    return <ForbidenComponent/>
}
}*/
export default InformeUsuario
