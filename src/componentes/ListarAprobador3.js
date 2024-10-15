import React from 'react';
import {Link, NavLink} from "react-router-dom";
import apiRegistrosContables from "../servicios/apiRegistrosContables";




class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TipoRegistro:"",
            TipoDocumento:"",
            NumeroDocumento:"",
            FechaTransaccion:"",
            Descripcion:"",
            Monto:"",
            Moneda:"",
            errores:[]


        }
    }
    cambioValor = (e) =>{
        const  state = this.state;
        state[e.target.name]=e.target.value;
        this.setState({state,errores:[]});

    }

    verificarError(elemento){

        return this.state.errores.indexOf(elemento) !==-1;

    }


    enviarDatos = (e) =>{

        e.preventDefault();
        console.log("El formulario fue enviado...");
        const{TipoRegistro,TipoDocumento,NumeroDocumento,FechaTransaccion,Descripcion,Monto,Moneda} = this.state;

        var errores = []
        if(!TipoRegistro)errores.push("TipoRegistro");

        this.setState({errores:errores})
        if(errores.length>0) return false;

        
        var datosEnviar = {TipoRegistro:TipoRegistro,TipoDocumento:TipoDocumento,NumeroDocumento:NumeroDocumento,FechaTransaccion:FechaTransaccion,Descripcion:Descripcion,Monto:Monto,Moneda:Moneda}
        
        
        fetch(apiRegistrosContables+"?insertar=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar)

        
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            
            console.log(datosRespuesta);
            this.props.history.push("/");
        
        
        })
        .catch(console.log)

    }


    render() { 

        const{TipoRegistro,TipoDocumento,NumeroDocumento,FechaTransaccion,Descripcion,Monto,Moneda} = this.state;


             // Construcción de  fecha
             const f = new Date();
             const FechaMinima = (f.getFullYear()+ "-" + (f.getMonth() +1) + "-" + f.getDate());
             console.log(FechaMinima );

        return ( 
            <div className="card">
                <div className="card-header">
                    Registros contables
                </div>
                <div className="card-body">



    
          
                <form onSubmit={this.enviarDatos}>


                
                <div >
                <label htmlFor="">Tipo de registro:</label>
                      <input style={{width: "150px", margin:"15px 100px 10px 0px"}} required type="text" name="TipoRegistro" id="TipoRegistro" onChange={this.cambioValor} value={TipoRegistro} 
                      
                      className={((this.verificarError("error_TipoRegistro"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingreso/Egreso</small>


                      <label class="Centro8" htmlFor="">Tipo de documento:</label>
                      <input style={{width: "250px",margin:"-50px 100px 10px 360px"}}   required type="text" name="TipoDocumento"  id="TipoDocumento" onChange={this.cambioValor} value={TipoDocumento} 
                      className={((this.verificarError("error_TipoDocumento"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese Moneda</small>

                      <label htmlFor="">Número de documento:</label>
                      <input style={{width: "250px", margin:"15px 100px 10px 0px"}} required  type="Number" min="1"  name="NumeroDocumento" id="NumeroDocumento" onChange={this.cambioValor} value={NumeroDocumento} 
                      className={((this.verificarError("error_Proveedor"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese proveedor</small>

                      <div  className="form-group">
                      <label class="Centro9"  htmlFor="">Fecha de transacción:</label>
                      <input style={{width: "250px",margin:"-50px 100px 10px 360px"}}  type="date" name="FechaTransaccion" id="FechaTransaccion" onChange={this.cambioValor} value={FechaTransaccion} 
                      className={((this.verificarError("errore_FechaTransaccion"))?"is-invalid":"")+" form-control"} aria-describedby="helpId" />


                      <div  className="form-group">
                      <label class="Centro10" htmlFor="">Descripción:</label>
                      <input style={{width: "250px",float:"right",margin:"-143px 163px 0 1px"}}  type="text"  name="Descripcion" id="Descripcion" min={FechaMinima} onChange={this.cambioValor} value={Descripcion} 
                      className={((this.verificarError("error_FechaIngreso"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback"></small>
                    </div>

                    
                    


                </div>
           


                </div>


                <div  className="form-group">
                      <label required htmlFor="">Monto:</label>
                      <input style={{width: "150px"}} required min="1" type="number"  name="Monto" id="Monto" onChange={this.cambioValor} value={Monto} 
                      className={((this.verificarError("error_monto"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese moneda</small>

                      <label required htmlFor="">Moneda:</label>
                      <input style={{width: "100px"}} required min="1" type="text" name="Moneda" id="Moneda" onChange={this.cambioValor} value={Moneda} 
                      className={((this.verificarError("error_monto"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese moneda</small>

  

                </div>






                   
    


<br></br>
                    <div className="btn-group" role="group" aria-label="">
                       
            
                    
                        <button type="submit" className="btn btn-success">Agregar nuevo registro contable <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5v-13Z"/>
  <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V16Zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V0ZM9 1h2v4H9V1Z"/>
</svg></button>

          
                        <Link to={"/"} type="button" className="btn btn-danger">Cancelar<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                          </svg></Link>
                    </div>

                </form>
             

                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
          );
    }
}
 
export default Crear;