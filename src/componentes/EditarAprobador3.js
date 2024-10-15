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
        const{IdSolped,Descripcion_Necesidad,Cantidad,Monto,Area,Proveedor_Sugerido,Centro_Costo,Cuenta_Contable,Comentario,Estado}=this.state.empleado;


        var datosEnviar = {IdSolped:IdSolped, Descripcion_Necesidad:Descripcion_Necesidad,Cantidad:Cantidad,Monto:Monto,Area:Area,Proveedor_Sugerido:Proveedor_Sugerido,Centro_Costo:Centro_Costo,Cuenta_Contable:Cuenta_Contable,Comentario:Comentario,Estado}

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

        if(!datosCargados){
            return(<div>Cargando información...</div>);
        }
        else{

        return ( <div className="card">
            <div className="card-header">
            Editar solped cotizada
            </div>
            <div className="card-body">
                
                
                
              

                <form onSubmit={this.enviarDatos}>

                

                <div className="form-group">
                  <label htmlFor="">Correlativo Solped:</label>
                  <input type="text" readOnly className="form-control" value={empleado.IdSolped} onChange={this.cambioValor} name="IdSolped" id="IdSolped" aria-describedby="helpId" placeholder=""/>
                  <small id="helpId" className="form-text text-muted">No solped</small>
                </div>

                <div className="form-group">
                <label htmlFor="">Descripción de Necesidad:</label>
                <input required readOnly type="text" name="Descripcion_Necesidad" onChange={this.cambioValor} value={empleado.Descripcion_Necesidad} id="Descripcion_Necesidad" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese descripción de necesidad</small>
                </div>

                <div className="form-group">
                <label htmlFor="">Cantidad:</label>
                <input required readOnly type="number" min="1" name="Cantidad" id="Cantidad" onChange={this.cambioValor} value={empleado.Cantidad} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese cantidad</small>
                </div>
                <div className="form-group">
                <label htmlFor="">Monto estimado:</label>
                <input  type="number" readOnly min="1" name="Monto" onChange={this.cambioValor} value={empleado.Monto} id="Monto" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese monto</small>
                </div>

                <div className="form-group">
                <label htmlFor="">Área:</label>
                <input required readOnly type="text" name="Area" id="Area" onChange={this.cambioValor} value={empleado.Area} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese área</small>
                </div>
                <div className="form-group">
                <label htmlFor="">Proveedor Sugerido:</label>
                <input  type="text" readOnly name="Proveedor_Sugerido" onChange={this.cambioValor} value={empleado.Proveedor_Sugerido} id="nomProveedor_Sugeridobre" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese proveedor</small>
                </div>

                <div className="form-group">
                <label htmlFor="">Centro de Costo:</label>
                <input required type="text" name="Centro_Costo" id="Centro_Costo" onChange={this.cambioValor} value={empleado.Centro_Costo} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese centro de costo</small>
                </div>

                <div className="form-group">
                <label htmlFor="">Cuenta Contable:</label>
                <input required type="text" name="Cuenta_Contable" id="Cuenta_Contable" onChange={this.cambioValor} value={empleado.Cuenta_Contable} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese cuenta contable</small>
                </div>
                <div className="form-group">
                <label htmlFor="">Comentario:</label>
                <input  type="text" name="Comentario" onChange={this.cambioValor} value={empleado.Comentario} id="Comentario" className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Ingrese comentario</small>
                </div>
           

                <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-success">Actualizar solped</button>
                    <Link to={"/"} type="button" className="btn btn-primary">Cancelar</Link>
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

