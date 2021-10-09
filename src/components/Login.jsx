import * as fs from 'fs-web';
import React, {useCallback, useState} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../layouts/css/login.css'

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    //const query = new URLSearchParams(location.search);    
    const abreviaturaEmpresa = new URLSearchParams(location.search).get("abr");
    const [datosUsuario, guardarDatosUsuario] = useState({
        usuario: '',
        contrasenia: '',
        abreviaturaEmpresa: abreviaturaEmpresa != null && abreviaturaEmpresa != '' ? abreviaturaEmpresa : '',
    });


    const guardarEstado = e => {
        guardarDatosUsuario({
            ...datosUsuario,
            [e.target.name] : e.target.value,
        });
    };

    const handleOnClick = e => {
        e.preventDefault();
        console.log('datos ',usuario,' ',contraseña);
        if(usuario.trim() !== '' && contraseña.trim() !== ''){
            history.push(`/Inicio?abr=${abreviaturaEmpresa}`);
        }else{
            alert('campos vacios. Ingrese sus credenciales');
        }
    };

    return (
        <>            
            {abreviaturaEmpresa != null ? (
                <form className="contenedor" onSubmit={() => handleOnClick()}>
                    <div className="fondoPantalla"> 

                    </div>
                    <div className="Login">
                        <div className="mb-4 p-3">
                            <img alt="Logo Sorttime" className="img-fluid" src={require(`../layouts/img/logo${abreviaturaEmpresa}.png`)} />
                        </div>
                        <div className="form-floating mb-1">
                            <input type="number" className="form-control" id="TXT_sUsuario" name="usuario" placeholder="Usuario" onChange={e => guardarEstado(e)} value={datosUsuario.usuario} />
                            <label htmlFor="TXT_sUsuario">Usuario</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="TXT_sContrasena" name="contrasenia" placeholder="Contraseña" onChange={e => guardarEstado(e) } value={datosUsuario.contrasenia} />
                            <label htmlFor="TXT_sContrasena">Contraseña</label>
                        </div>

                        <div className="form-floating mb-4">
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </div>
                        <div className="form-floating mb-4">
                            <div className="row">
                                <Link to="/OlvidoContraseña" className="text-center">
                                    <a>¿Olvidaste tu contraseña ?</a>
                                </Link>
                                {/* <div className="col-auto">
                                    <Link to="/">
                                        <a>¿Quieres Cambiar tu contraseña ?</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="contenedor">
                    <div className="jumbotron">
                        <h2 className="display-4">Error - Empresa no tiene portal disponible</h2>
                        <p className="lead">Por favor verifique la abreviatura agregada e intente nuevamente. </p>
                    </div>
                </div>
            )}            
        </>
    );
}
 
export default Login;