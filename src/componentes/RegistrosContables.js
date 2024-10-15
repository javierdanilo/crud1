/**me quedé en el minuto  1:12:37 justo en la seccion de insertar empleado */
import React from 'react';
import { Link } from "react-router-dom";
import apiRegistrosContables from "../servicios/apiRegistrosContables";






class Listar extends React.Component {
        constructor(props){
        super(props);
        this.state = { 
            datosCargados:false,
            empleados:[]
        }
    }


    borrarRegistros=(IdRegistroContable)=> {
        console.log(IdRegistroContable);
        
        fetch(apiRegistrosContables+"/?borrar="+IdRegistroContable)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.cargarDatos();
            
        
        })
        .catch(console.log)
        
    }
   


    cargarDatos(){
        fetch(apiRegistrosContables)
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
    
<h4>Conciliación</h4>


            <table className="table table-sm table-hover">
            <thead>
                <tr>
                    <th>ID Registro Contable</th>
                    <th>Tipo de registro</th>
                    <th>Tipo de documento</th>
                    <th>Número de documento</th>
                    <th>Fecha de transacción</th>
                    <th>Descripción</th>
                    <th>Monto</th>
                    <th>Moneda</th>

                  
                </tr>
            </thead>
            <tbody>

            {empleados.map(

                (empleado)=>(

            
                <tr key={empleado.IdRegistroContable}>
                    <td>{empleado.IdRegistroContable}</td>
                    <td>{empleado.TipoRegistro}</td>
                    <td>{empleado.TipoDocumento}</td>
                    <td>{empleado.NumeroDocumento}</td>
                    <td>{empleado.FechaTransaccion}</td>
                    <td>{empleado.Descripcion}</td>
                    <td>{empleado.Monto}</td>
                    <td>{empleado.Moneda}</td>

                    
                    <td>
 <div>
<button type="button" className="btn btn-danger" 
                            onClick={
                            ()=>this.borrarRegistros(empleado.IdRegistroContable)}
                            
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



