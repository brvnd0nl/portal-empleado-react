import * as fs from 'fs-web';
import React, {useCallback, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../layouts/css/login.css'

const Login = () => {
    const history = useHistory();
    const [usuario, guardarUsuario] = useState('');
    const [contraseña, guardarContraseña] = useState('');

    const handleOnClick = useCallback(e => {
        e.preventDefault();
        console.log('datos ',usuario,' ',contraseña);
        if(usuario.trim() !== '' && contraseña.trim() !== ''){
            history.push('/Inicio');
        }else{
            alert('campos vacios. Ingrese sus credenciales');
        }
    }, [history]);
    function fileExists(abrEmpresa) {
        /* var path = `../layouts/img/logo${abrEmpresa}.png`;
        debugger;
        fs.readdir(require(path))
        .then(function(){
            return true;
        })
        .catch(function(e){
            console.log(e);
            return false;
        }); */

        return true;
    }

    const validarIngreso = () => {

    };

    return (
        <>            
            {fileExists("APL") ? (
                <div className="contenedor">
                    <div className="fondoPantalla"> 

                    </div>
                    <div className="Login">
                        <div className="mb-4 p-3">
                            <img alt="Logo Sorttime" className="img-fluid" src={require('../layouts/img/logoAPL.png')} />
                        </div>
                        <div className="form-floating mb-1">
                            <input type="number" className="form-control" id="TXT_sUsuario" placeholder="Usuario" onChange={e => {
                                console.log('guardando u... ', e.target.value)
                                guardarUsuario(e.target.value)} } value={usuario} />
                            <label htmlFor="TXT_sUsuario">Usuario</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="TXT_sContrasena" placeholder="Contraseña" onChange={e => {
                                console.log('guardando c... ', e.target.value)
                                guardarContraseña(e.target.value)} } value={contraseña} />
                            <label htmlFor="TXT_sContrasena">Contraseña</label>
                        </div>

                        <div className="form-floating mb-4">
                            <button type="submit" className="btn btn-primary" onClick={e => handleOnClick(e)}>Ingresar</button>
                        </div>
                        <div className="form-floating mb-4">
                            <div className="row">
                                <div className="col-auto">
                                    <Link to="/OlvidoContraseña">
                                        <a className="text-center">¿Olvidaste tu contraseña ?</a>
                                    </Link>
                                </div>
                                {/* <div className="col-auto">
                                    <Link to="/">
                                        <a>¿Quieres Cambiar tu contraseña ?</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
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