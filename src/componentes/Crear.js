import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Api from "../servicios/api";




class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OrdenCompra:"",
            Proveedor:"",
            Monto:"",
            Texto:"",
            FechaIngreso:"",
            FechaEstimadaPago:"",
            Estado:"",
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
        const{OrdenCompra,Proveedor,Monto,Texto,FechaIngreso,FechaEstimadaPago,Estado,Moneda} = this.state;

        var errores = []
        if(!OrdenCompra)errores.push("OrdenCompra");

        this.setState({errores:errores})
        if(errores.length>0) return false;

        
        var datosEnviar = {OrdenCompra:OrdenCompra,Proveedor:Proveedor,Monto:Monto,Texto:Texto,FechaIngreso:FechaIngreso,FechaEstimadaPago:FechaEstimadaPago,Estado:Estado,Moneda:Moneda}
        
        
        fetch(Api+"?insertar=1",{
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

        const{OrdenCompra,Proveedor,Monto,Texto,FechaIngreso,FechaEstimadaPago,Estado,Moneda} = this.state;


             // Construcción de  fecha
             const f = new Date();
             const FechaMinima = (f.getFullYear()+ "-" + (f.getMonth() +1) + "-" + f.getDate());
             console.log(FechaMinima );

        return ( 
            <div className="card">
                <div className="card-header">
                    Creación de pago
                </div>
                <div className="card-body">



    
          
                <form onSubmit={this.enviarDatos}>


                
                <div >
                      <label htmlFor="">Orden de compra:</label>
                      <input style={{width: "150px", margin:"15px 100px 10px 0px"}} required type="text" name="OrdenCompra" id="OrdenCompra" onChange={this.cambioValor} value={OrdenCompra} 
                      className={((this.verificarError("error_OrdenCompra"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese orden de compra asociada al pago</small>

                      <label class="Centro1" htmlFor="">Moneda:</label>
                      <input style={{width: "250px",margin:"-50px 100px 10px 360px"}}   required type="text" name="Moneda"  id="Moneda" onChange={this.cambioValor} value={Moneda} 
                      className={((this.verificarError("error_Moneda"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese Moneda</small>

                      <label htmlFor="">Proveedor:</label>
                      <input style={{width: "250px", margin:"15px 100px 10px 0px"}} required  type="text" name="Proveedor" id="Proveedor" onChange={this.cambioValor} value={Proveedor} 
                      className={((this.verificarError("error_Proveedor"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese proveedor</small>

                      <div  className="form-group">
                      <label class="Centro2"  htmlFor="">Texto:</label>
                      <input style={{width: "250px",margin:"-50px 100px 10px 360px"}} required type="text" name="Texto" id="Texto" onChange={this.cambioValor} value={Texto} 
                      className={((this.verificarError("error_Texto"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese Texto</small>

                      <div  className="form-group">
                      <label class="Centro3" htmlFor="">Fecha de ingreso:</label>
                      <input style={{width: "250px",float:"right",margin:"-143px 163px 0 1px"}}  type="date"  name="FechaIngreso" id="FechaIngreso" min={FechaMinima} onChange={this.cambioValor} value={FechaIngreso} 
                      className={((this.verificarError("error_FechaIngreso"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback"></small>
                    </div>

                    <div  className="form-group">
                      <label class="Centro4" htmlFor="">Fecha de pago:</label>
                      <input style={{width: "250px",float:"right",margin:"-60px 163px 0 1px"}}  required type="date" name="FechaEstimadaPago" min={FechaMinima} id="FechaEstimadaPago" onChange={this.cambioValor} value={FechaEstimadaPago} 
                      className={((this.verificarError("error_FechaEstimadaPago"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese FechaEstimadaPago</small>
                    </div>


                </div>
           


                </div>


                <div  className="form-group">
                      <label required htmlFor="">Monto:</label>
                      <input style={{width: "150px"}} required min="1" type="number" name="Monto" id="Monto" onChange={this.cambioValor} value={Monto} 
                      className={((this.verificarError("error_monto"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="invalid-feedback">Ingrese moneda</small>
                </div>


                <div   className="form-group">

                </div>





                   
    


<br></br>
                    <div className="btn-group" role="group" aria-label="">
                       
            
                    
                        <button type="submit" className="btn btn-success">Agregar nueva solicitud de pago <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy-fill" viewBox="0 0 16 16">
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