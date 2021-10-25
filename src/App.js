import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetalleVenta from "./detalle/detalleVenta";
import RegistrarVentas from "./registrar/registrarVentas";
import ConfirmacionVenta from "./confirmacion/confirmacionVenta";
import Acceso from "./acceso/Acceso";
import Registrarme from "./registrarme/Registrarme";
import Barra from "./barraNavegacion/Barra";

function App() {
  return (
    <div>
      <Router>
        <Barra></Barra>
        <Switch>
          <Route path="/" exact>
            <RegistrarVentas></RegistrarVentas>
          </Route>

          <Route path="/venta-exitosa" exact>
            <ConfirmacionVenta></ConfirmacionVenta>
          </Route>
          
          <Route path="/detalle" exact>
            <DetalleVenta></DetalleVenta>
          </Route>
          
          <Route path="/registro" exact>
            <Registrarme></Registrarme>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
