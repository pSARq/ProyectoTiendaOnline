import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import DetalleVenta from './detalle/detalleVenta';
import RegistrarVentas from './registrar/registrarVentas';
import ConfirmacionVenta from './confirmacion/confirmacionVenta';




function App() {
  return (
    <div >

      <Router>
        
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

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
