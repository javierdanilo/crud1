/**me quedé en el minuto  1:12:37 justo en la seccion de insertar empleado */
import React from 'react';
import { Link } from "react-router-dom";
import api1 from "../servicios/api";






class Listar extends React.Component {
        constructor(props){
        super(props);
        this.state = { 
            datosCargados:false,
            empleados:[]
        }
    }


    borrarRegistros=(IdPago)=> {
        console.log(IdPago);
        
        fetch(api1+"/?borrar="+IdPago)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.cargarDatos();
            
        
        })
        .catch(console.log)
        
    }
   


    cargarDatos(){
        fetch(api1)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.setState({datosCargados:true, empleados:datosRespuesta})
        
        })
        .catch(console.log)

    }


    componentDidMount(){
        this.cargarDatos();
    
    }



    render() { 
        const{datosCargados, empleados}=this.state

        if(!datosCargados){
            return(<div>Cargando información...</div>);
        }
        else{

        return (
        
        <div className="card">
            <div className="card-header">
            <Link className="btn btn-success" to={"/crear"}>Crear nueva solicitud de pago</Link>
            </div>
            <div className="card-body">
    
<h4>Lista de pagos</h4>
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Orden de compra</th>
                    <th>Proveedor</th>
                    <th>Monto</th>
                    <th>Moneda</th>
                    <th>Fecha de ingreso</th>
                    <th>Fecha estimada de pago</th>
                    <th>Estado</th>
                  
                </tr>
            </thead>
            <tbody>

            {empleados.map(

                (empleado)=>(

            
                <tr key={empleado.IdPago}>
                    <td>{empleado.IdPago}</td>
                    <td>{empleado.OrdenCompra}</td>
                    <td>{empleado.Proveedor}</td>
                    <td>{empleado.Monto}</td>
                    <td>{empleado.Moneda}</td>
                    <td>{empleado.FechaIngreso}</td>
                    <td>{empleado.FechaEstimadaPago}</td>
                    <td>{empleado.Estado}</td>
                    
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-warning" 
                            to={"/editar/"+empleado.IdPago}
                            
                            
                            
                            >Editar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                          </svg></Link>


                        

                            <button type="button" className="btn btn-danger" 
                            onClick={
                            ()=>this.borrarRegistros(empleado.IdPago)}
                            
                            >Anular <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                          </svg>
                          
                          </button>
                          

                         



                       
                        </div>
                    </td>
                </tr>
                    )

                    )}
        
            </tbody>
        </table>


            </div>
            <div className="card-footer text-muted">
                
            </div>
           
        </div>
        

            );
        }
    }
}
 
export default Listar;



