import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/css/login.css'

const Login = () => {
    return (
        <>
            <div className="contenedor">
                <div className="fondoPantalla"> 

                </div>
                <div className="Login">
                    <div className="mb-4 p-3">
                        {/* <img alt="Logo Sorttime" className="img-fluid" src={require('./layout/img/sorttime_color.png')} /> */}
                    </div>
                    <div className="form-floating mb-1">
                        <input type="number" class="form-control" id="TXT_sUsuario" placeholder="Usuario" />
                        <label for="floatingInput">Usuario</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="password" class="form-control" id="TXT_sContrasena" placeholder="Contraseña" />
                        <label for="TXT_sContrasena">Contraseña</label>
                    </div>

                    <div className="form-floating mb-4">
                        <Link to="">
                            <button type="button" className="btn btn-primary">Ingresar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Login;