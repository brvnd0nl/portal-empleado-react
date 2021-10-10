import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Login from './Login';
import PantallaPrincipal from './PantallaPrincipal';
import CambioContraseña from './CambioContraseña';
import OlvidoContraseña from './OlvidoContraseña';

const App = () => {

    const [datosUsuario, guardarDatosUsuario] = useState({
        usuario: '',
        contrasenia: '',
        abreviaturaEmpresa: '',
    });    

    const {usuario} = datosUsuario; 

    useEffect(() =>{
        debugger;
        try{
            if(usuario == ''){
                const datos = localStorage.getItem("SS_objDatosUsuario");
                if(datos != null){
                    guardarDatosUsuario(datos);
                }
            }
        }catch (err){
    
        }
    },[]);       

    return (
        <>
            <Helmet>
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href={require('../layouts/icons/favicon-13.png')} />
            </Helmet>
            <Switch>
                <Route path="/CambioContraseña">
                    <CambioContraseña datosUsuario={datosUsuario} guardarDatosUsuario={guardarDatosUsuario} />
                </Route>
                <Route path="/OlvidoContraseña">
                    <OlvidoContraseña datosUsuario={datosUsuario} guardarDatosUsuario={guardarDatosUsuario} />
                </Route>
                <Route path="/Inicio" render={matchProps =>{
                    if(usuario === ''){
                        return (<Redirect to='/' />);
                    }else{
                        return (<PantallaPrincipal {...matchProps} datosUsuario={datosUsuario} guardarDatosUsuario={guardarDatosUsuario} />);
                    }
                }} />
                <Route path="/">
                    <Login datosUsuario={datosUsuario} guardarDatosUsuario={guardarDatosUsuario} />
                </Route>
            </Switch>            
        </>
    );
}
 
export default App;