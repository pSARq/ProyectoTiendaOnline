import React from 'react';
import Productos from './Productoss/Productos';
import ListaProductos from './Lista-productos/ListaProductos';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RegistrarVentas from './Ventas/gestionarVenta';
import ListaVentas from './Lista-Ventas/ListaVentas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Productos" exact>
          <Productos />
        </Route>

        <Route path="/ListaProductos" exact>
          <ListaProductos />
        </Route>

        <Route path="/RegistrarVenta" exact>
          <RegistrarVentas />
        </Route>

        <Route path="/ListaVentas" exact>
          <ListaVentas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
