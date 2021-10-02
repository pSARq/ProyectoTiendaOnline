import React from 'react';
import LoginPage from './login/loginPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UsuariosPage from './Usuarios/UsuariosPage';
import NavbarComponet from './shared/components/navbar/navbarComponent';
import Perfil from './Usuarios/Perfil';
import FooterComponent from './shared/components/footer/footerComponent';



function App() {
  return (
    <div>
      <Router>
        <NavbarComponet />
        <Switch>
          <Route path="/" exact><h1>Home</h1></Route>
          <Route path="/login" exact><LoginPage /></Route>
          <Route path="/usuarios" exact><UsuariosPage /></Route>
          <Route path="/perfil" exact><Perfil /></Route>
        </Switch>
        <FooterComponent/>


      </Router>

    </div>
  );
}

export default App;
