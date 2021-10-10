import React from 'react';
import Header from './Header';

const PantallaPrincipal = props => {
    const {datosUsuario, guardarDatosUsuario} = props;
    const {usuario, contrasenia} = datosUsuario;
    return (
        <>
            <Header />
            <div className="container">
                
            </div>
        </>
    );
}
 
export default PantallaPrincipal;