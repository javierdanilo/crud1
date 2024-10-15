/**me quedé en el minuto  1:12:37 justo en la seccion de insertar empleado */
import React from 'react';
import { Link } from "react-router-dom";
import apriprov from "../servicios/apiproveedores";

class Listar extends React.Component {
        constructor(props){
        super(props);
        this.state = { 
            datosCargados:false,
            empleados:[]
        }
    }

    borrarRegistros=(IdSolped)=> {
        console.log(IdSolped);
        
        fetch(apriprov+"/?borrar="+IdSolped)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.cargarDatos();
        
        })
        .catch(console.log)
        
    }


    cargarDatos(){
        fetch(apriprov)
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
            <Link className="btn btn-success" to={"/crear"}>Crear nueva solped</Link>
            </div>
            <div className="card-body">
    
<h4>Lista de solped</h4>
            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Monto estimado</th>
                    <th>Área</th>
                    <th>Proveedor sugerido</th>
                    <th>Centro de costo</th>
                    <th>Cuenta contable</th>
                    <th>Comentario</th>
                    <th>Estado</th>
                  
                </tr>
            </thead>
            <tbody>

            {empleados.map(

                (empleado)=>(

            
                <tr key={empleado.IdSolped}>
                    <td>{empleado.IdSolped}</td>
                    <td>{empleado.Descripcion_Necesidad}</td>
                    <td>{empleado.Cantidad}</td>
                    <td>{empleado.Monto}</td>
                    <td>{empleado.Area}</td>
                    <td>{empleado.Proveedor_Sugerido}</td>
                    <td>{empleado.Centro_Costo}</td>
                    <td>{empleado.Cuenta_Contable}</td>
                    <td>{empleado.Comentario}</td>
                    <td>{empleado.Estado}</td>
                    
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-warning" 
                            to={"/editar/"+empleado.IdSolped}
                            
                            
                            >Editar</Link>



                            <button type="button" className="btn btn-danger" 
                            onClick={()=>this.borrarRegistros(empleado.IdSolped)}
                            
                            >Borrar</button>
                       
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