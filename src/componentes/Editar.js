//Video me quedé en el minuto 2horas : 03minutos
import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api";

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            datosCargados:false,
            empleado:[]

         }
    }
    cambioValor = (e) =>{
        const  state = this.state.empleado;
        state[e.target.name]=e.target.value;
        this.setState({empleado:state});
    }


 


    enviarDatos = (e) =>{
        
     

        e.preventDefault();
        console.log("El formulario fue enviado...");
        const{IdPago,OrdenCompra,Proveedor,Monto,Texto,FechaIngreso,FechaEstimadaPago,Estado,Moneda} = this.state.empleado;
        

        var datosEnviar = {IdPago:IdPago,OrdenCompra:OrdenCompra,Proveedor:Proveedor,Monto:Monto,Texto:Texto,FechaIngreso:FechaIngreso,FechaEstimadaPago:FechaEstimadaPago,Estado:Estado,Moneda:Moneda}
        console.log(datosEnviar.FechaEstimadaPago)
        fetch(Api+"?actualizar=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar)
         
            

        })
      
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            console.log(JSON.stringify(datosEnviar)  );
            this.props.history.push("/");
        
        
        })
        .catch(console.log)

    }

    componentDidMount(){

 

   console.log("holaapp"+this.props.match.params.id);

   fetch(Api+"/?consultar="+this.props.match.params.id)
   .then(respuesta=>respuesta.json())
   .then((datosRespuesta)=>{
       
       
       console.log(datosRespuesta);
       this.setState({datosCargados:true, 
                empleado:datosRespuesta[0]
            })
   
   })
   .catch(console.log)

    }

  
    
    

    render() { 
        const{datosCargados, empleado}=this.state

          
        // Construcción de  fecha
        const f = new Date();
        const FechaMinima = (f.getFullYear()+ "-" + (f.getMonth() +1) + "-" + f.getDate());
        console.log(FechaMinima );
       
        if(!datosCargados){
            return(<div>Cargando información...</div>);
        }
        else{

        return ( <div className="card">
            <div className="card-header">
            Editar Pago
            </div>
            <div className="card-body">

                <form onSubmit={this.enviarDatos}>

                <div>
                <label htmlFor="">Correlativo pago:</label>
                <input style={{width: "100px", margin:"15px 100px 10px 0px"}} type="text" readOnly className="form-control" value={empleado.IdPago} onChange={this.cambioValor} name="IdPago" id="IdPago" aria-describedby="helpId" placeholder=""/>
                <small id="helpId" className="form-text text-muted"></small>

                <label class="Centro5" htmlFor="">Orden de compra:</label>
                <input style={{width: "100px",margin:"-50px 100px 10px 360px"}} required type="text" readOnly name="OrdenCompra" onChange={this.cambioValor} value={empleado.OrdenCompra} id="OrdenCompra" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted"></small>

                <label htmlFor="">Proveedor:</label>
                <input  style={{width: "250px",margin:"15px 100px 10px 0px"}} type="text" readOnly name="Proveedor_Sugerido" onChange={this.cambioValor} value={empleado.Proveedor} id="nomProveedor_Sugeridobre" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted"></small>
      
                <label class="Centro6" htmlFor="">Monto:</label>
                <input style={{width: "100px",margin:"-50px 100px 10px 360px"}} required readOnly type="text" name="Centro_Costo" id="Centro_Costo" onChange={this.cambioValor} value={empleado.Monto} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted"></small>
      
                <label class="Centro7" htmlFor="">Moneda:</label>
                <input  style={{width: "100px",float:"right",margin:"-143px 450px 0 1px"}} required readOnly type="text" name="Cuenta_Contable" id="Cuenta_Contable" onChange={this.cambioValor} value={empleado.Moneda} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted"></small>
        
                </div>

                <div>
                <label htmlFor="">Fecha estimada de pago:</label>
                <input  style={{width: "250px",margin:"0px 100px 25px 0px"}} required type="date" name="FechaEstimadaPago" min={FechaMinima} onChange={this.cambioValor} value={empleado.FechaEstimadaPago} id="FechaEstimadaPago" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted"></small>
                </div>



            
                <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-success">Actualizar pago <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                          </svg></button>
                          
                    <Link to={"/"} type="button" className="btn btn-danger">Cancelar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                          </svg></Link>
                </div>
                

                </form>




            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div> );
        }
    }
}
 
export default Editar;

