/**me quedé en el minuto  1:12:37 justo en la seccion de insertar empleado */
import React from 'react';
import { Link } from "react-router-dom";
import apiReportePagos from "../servicios/apireporte";






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
        
        fetch(apiReportePagos+"/?borrar="+IdPago)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.cargarDatos();
            
        
        })
        .catch(console.log)
        
    }
   


    cargarDatos(){
        fetch(apiReportePagos)
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

            <div className="card-body">
    
<h4>Reporte de pagos</h4>
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
                    <th>Texto</th>
                  
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
                    <td>{empleado.Texto}</td>
                    
                    <td>

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



