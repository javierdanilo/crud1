/**me quedé en el minuto  1:12:37 justo en la seccion de insertar empleado */
import React from 'react';
import { Link } from "react-router-dom";
import apic from '../servicios/apicotizacion';

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
        
        fetch(apic+"/?borrar="+IdSolped)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.cargarDatos();
        
        })
        .catch(console.log)
        
    }

    aprobarRegistros=(IdSolped)=> {
        console.log(IdSolped);
        
        fetch(apic+"/?cotizado="+IdSolped)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.cargarDatos();
        
        })
        .catch(console.log)
        
    }


    cargarDatos(){
        fetch(apic)
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
    
<h4>Lista de cotizaciones</h4>
            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>

                  
                </tr>
            </thead>
            <tbody>

            {empleados.map(

                (empleado)=>(

            
                <tr key={empleado.IdPago}>
                    <td>{empleado.IdPago}</td>

                    
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-warning" 
                            to={"/EditarCotizacion/"+empleado.IdSolped}
                            
                            
                            >Proveedores</Link>



                            <button type="button" className="btn btn-danger" 
                            onClick={()=>this.borrarRegistros(empleado.IdSolped)}
                            
                            >Cancelar</button>
                       

                           

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
/*
<button type="button" className="btn btn-success" 
onClick={()=>this.aprobarRegistros(empleado.IdSolped)}

>Aprobar</button> Linea 135*/

