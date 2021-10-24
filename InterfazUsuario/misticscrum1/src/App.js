import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./login/loginPage";
import RegisterPage from "./Register/RegisterPage";
import Forbiden from "./shared/forbiden/forbiden";
import NavbarComponent from "./shared/navbar/navbarComponent";
import UsuariosPage from "./usuarios/usuariosPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  

  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Switch>
        <Route path="/" exact>
          <UsuariosPage></UsuariosPage>
        </Route>
        <Route path="/register" exact>
          <RegisterPage></RegisterPage>
        </Route>
        <Route path="/login" exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path="/forbiden" excact>
          <Forbiden></Forbiden>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
