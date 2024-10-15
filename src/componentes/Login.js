import React from 'react';
import apilogin from '../servicios/apilogin';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      contrasenia: ''
    };
  }
  enviarDatos = (e) => {
    e.preventDefault();
    const { correo, contrasenia } = this.state;
    var datosEnviar = { correo: correo, contrasenia: contrasenia };

    fetch(`${apilogin}?consultar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosEnviar)
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success === 1) {
            // Autenticación exitosa
            window.location.href = '/'; // Redirige a la página principal
        } else {
            alert(data.message); // Muestra mensaje de error
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

cambioValor = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
};

render() {
    const { correo, contrasenia } = this.state;

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper bg-primary">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="card col-lg-4 mx-auto">
                            <div className="card-body px-5 py-5">
                                <h3 className="card-title text-left mb-3">Login</h3>
                                <form onSubmit={this.enviarDatos}>
                                    <div className="form-group">
                                        <label>E-mail *</label>
                                        <input
                                            type="text"
                                            id="correo"
                                            name="correo"
                                            value={correo}
                                            onChange={this.cambioValor}
                                            className="form-control p_input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Contraseña *</label>
                                        <input
                                            type="password"
                                            id="contrasenia"
                                            name="contrasenia"
                                            value={contrasenia}
                                            onChange={this.cambioValor}
                                            className="form-control p_input"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block enter-btn">
                                            Login
                                        </button>
                                    </div>
                                    <p className="sign-up">
                                    No tienes una cuenta? <Link to="/registrate">Regístrate</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


}

export default Login;
