import React from 'react';
import Productos from './Productoss/Productos';
import ListaProductos from './Lista-productos/ListaProductos';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
