import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginPage from './login/loginPage';
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
          <Route path="/" exact><USpage></USpage></Route>
        </Switch>
        <FooterComponent/>


      </Router>

    </div>
  );
}

export default App;
