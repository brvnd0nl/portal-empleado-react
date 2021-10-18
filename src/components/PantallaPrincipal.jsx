import React from 'react';
import Header from './Header';

const PantallaPrincipal = props => {
    const {datosUsuario} = props;
    const {usuario, contrasenia} = datosUsuario;
    return (
        <>
            <Header />
            <div className="container">
		<div className="row d-flex justify-content-between mt-5">
		    <div className="col-auto">
			<div className="mb-3 row">
			    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
			    <div className="col-sm-10">
				 <input type="text" className="form-control-plaintext" id="staticEmail" />
			    </div>
			</div>
		    </div>
		    <div className="col-auto">
			<div className="mb-3 row">
			    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
			    <div className="col-sm-10">
				 <input type="text" className="form-control-plaintext" id="staticEmail" />
			    </div>
			</div>
		    </div>
		</div>
            </div>
        </>
    );
}
 
export default PantallaPrincipal;
