//import logo from './logo.svg';
//import './App.css';
import React, { Fragment } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarComponent from './shared/components/navbar/NavbarComponent';
import FooterComponent from './shared/components/footer/FooterComponent';

import LoginPage from './login/LoginPage';

import RegisterPage from './usuarios/RegisterPage';
import BuscarUsuariosPage from './home/buscarUsuariosPage';
import ListadeUsuariosPage from './home/listadeUsuariosPage';
import EditarusuarioPage from './usuarios/EditarusuarioPage';

import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';

import ProductosPage from './productos/ProductosPage';
import BuscarProductosPage from './home/buscarProductosPage';
import ListaProductos from './home/ListaProductos';

//import VentasPage from './ventas/VentasPage';



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
        <Route path="/buscarusuarios" exact><BuscarUsuariosPage/></Route>
        <Route path="/listadeusuarios" exact><ListadeUsuariosPage/></Route>
        <Route path="/editaruarios" exact><EditarusuarioPage/></Route> 
        

        <Route path="/Productos" exact><ProductosPage/> </Route>
        <Route path="/BuscarProductos" exact><BuscarProductosPage/></Route>
        <Route path="/listadeproductos" exact><ListaProductos/></Route>

        {/* <Route path="/Ventas" exact><VentasPage/> </Route> */}
        





        <Route path="/forbiden" exact><ForbidenComponent /></Route>


      </Switch>
      <div>
      <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
