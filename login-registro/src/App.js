//import logo from './logo.svg';
//import './App.css';
import React, { Fragment } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarComponent from './shared/components/navbar/NavbarComponent';
import FooterComponent from './shared/components/footer/FooterComponent';

import LoginPage from './login/LoginPage';

import RegisterPage from './register/RegisterPage';
import BuscarUsuariosPage from './home/buscarUsuariosPage';
import ListadeUsuariosPage from './home/listadeUsuariosPage';

import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';

import ProductosPage from './productos/ProductosPage';
import BuscarProductosPage from './lista-productos/buscarProductosPage';
import ListaProductos from './home/ListaProductos';



//andersso hernandez//

//https://www.youtube.com/watch?v=ZwSwp8iRk2E

function App() {
//  const {isAuthenticated} = useAuth0();
  //const validateUserRole = () =>{}
  return (

    <Router>
        <NavbarComponent/>
          
      <Switch>
        
        
        <Route path="/login" exact><LoginPage/></Route>

        <Route path="/register" exact><RegisterPage/></Route>
        {/* <Route path="/Registrodeusuarios" exact><InformeUsuariosPage/></Route> */}
        <Route path="/buscarusuarios" exact><BuscarUsuariosPage/></Route>
        <Route path="/listadeusuarios" exact><ListadeUsuariosPage/></Route>

        <Route path="/Productos" exact><ProductosPage/> </Route>
        <Route path="/BuscarProductos" exact><BuscarProductosPage/></Route>
        <Route path="/listadeproductos" exact><ListaProductos/></Route>

          
        <Route path="/forbiden" exact><ForbidenComponent /></Route>


      </Switch>
      <div>
      <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
