/**me quedé en el minuto  1:12:37 justo en la seccion de insertar empleado */
import React from 'react';
import { Link } from "react-router-dom";
import apioc from '../servicios/apioc';

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
        
        fetch(apioc+"/?borrar="+IdSolped)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.cargarDatos();
        
        })
        .catch(console.log)
        
    }

    aprobarRegistros=(IdSolped)=> {
        console.log(IdSolped);
        
        fetch(apioc+"/?aprobar3="+IdSolped)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.cargarDatos();
        
        })
        .catch(console.log)
        
    }


    cargarDatos(){
        fetch(apioc)
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
    
<h4>Reporte de ordenes de compra</h4>

            <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Monto Final</th>
                    <th>Área</th>
                    <th>Proveedor sugerido</th>
                    <th>Centro de costo</th>
                    <th>Cuenta contable</th>
                    <th>Comentario</th>
                    <th>Estado</th>
                    <th>Proveedor Ganador</th>
                  
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
                    <td>{empleado.Descripcion}</td>
                    <td>{empleado.ProveedorGanador}</td>
                    
                    
                    
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

/*
                        <div className="btn-group"  role="group" aria-label="">
                   
                            <button type="button"  className="btn btn-outline-success"
                            onClick={()=>this.aprobarRegistros(empleado.IdSolped)}
                            
                            >Descargar PDF</button>

                        </div>

*/