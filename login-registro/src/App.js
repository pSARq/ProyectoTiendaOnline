//import logo from './logo.svg';
//import './App.css';
import React, { Fragment } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import FooterComponent from './shared/components/footer/FooterComponent';
import InformeUsuariosPage from './home/InformeUsuariosPage';
import ListadeUsuariosPage from './home/listadeUsuariosPage';
import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';

//andersso hernandez//

//https://www.youtube.com/watch?v=ZwSwp8iRk2E

function App() {
//  const {isAuthenticated} = useAuth0();
  //const validateUserRole = () =>{}
  return (

    <Router>
        <NavbarComponent/>
          
      <Switch>
        
        <Route path="/register" exact><RegisterPage/></Route>
        <Route path="/login" exact><LoginPage/></Route>

        <Route path="/Registrodeusuarios" exact><InformeUsuariosPage/></Route>
        <Route path="/listadeusuarios" exact><ListadeUsuariosPage/></Route>
          
        <Route path="/forbiden" exact><ForbidenComponent /></Route>


      </Switch>
      <div>
      <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
