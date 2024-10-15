 
import './App.css';
import Listar from "./componentes/Listar";
import RegistrosContables from "./componentes/RegistrosContables";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import EditarAprobador3 from "./componentes/EditarAprobador3";
import ListarAprobador1 from "./componentes/ListarAprobador1"
import ListarAprobador2 from "./componentes/ListarAprobador2"
import OrdenCompra from "./componentes/OrdenCompra"
import Cotizacion from "./componentes/Cotizacion"
import Login from './componentes/Login';
import { Route, BrowserRouter as Router, Routes, Switch} from "react-router-dom";
import { Link } from "react-router-dom";
import Proveedores from "./componentes/Proveedores"
import EditarCotizacion from "./componentes/EditarCotizacion"
import ListarAprobador3 from "./componentes/ListarAprobador3"
//import './Diseño/Diseño.css'
import apiRegistroContable from './servicios/apiRegistrosContables';


import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Login from './componentes/Login';
import Registrate from './componentes/Registrate';


function App() {
  return (
    <Router>
   <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center" >

        <div class="nav"  className="nav navbar-nav">

        <img class="navbar-brand" src='/LogoUmg.png' width={150} />

      
    
        <Link className="nav-item nav-link active" to={"/"}>Login<span className="sr-only"></span></Link>

         <Link className="nav-item nav-link active" to={"/"}>Gestión de pagos<span className="sr-only"></span></Link>

         <Link className="nav-item nav-link" to={"/ListarAprobador1"}>Aprobación de pagos</Link> 

         <Link className="nav-item nav-link" to={"/ListarAprobador2"}>Reporte de pagos</Link> 

         <Link className="nav-item nav-link" to={"/ListarAprobador3"}>Registro de Ingresos/Egresos</Link> 

         <Link className="nav-item nav-link" to={"/RegistrosContables"}>Reporte de registros contables</Link> 

       
         



        </div>
    </nav>
  
    <div className="container">
      
      <br></br>
  

      <Route exact path="/" component={Login}></Route>
     <Route exact path="/" component={Listar}></Route>
     
     <Route  path="/crear" component={Crear}></Route>
     <Route  path="/editar/:id" component={Editar}></Route>

     <Route  path="/ListarAprobador1" component={ListarAprobador1}></Route>
    
     <Route  path="/ListarAprobador2" component={ListarAprobador2}></Route>

     <Route  path="/Cotizacion" component={Cotizacion}></Route>

     <Route  path="/Proveedores" component={Proveedores}></Route>

     <Route  path="/EditarCotizacion/:id" component={EditarCotizacion}></Route>

     <Route  path="/ListarAprobador3" component={ListarAprobador3}></Route>

     <Route  path="/OrdenCompra" component={OrdenCompra}></Route>

     <Route  path="/EditarAprobador3/:id" component={EditarAprobador3}></Route>
    
     <Route exact path="/RegistrosContables" component={RegistrosContables}></Route>

    
    </div>
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registrate" component={Registrate} />
        {/* Otras rutas que puedas tener */}
        <Route path="/" component={Login} /> {/* Ruta predeterminada */}
      </Switch>
   </Router>
  );
}


export default App;
