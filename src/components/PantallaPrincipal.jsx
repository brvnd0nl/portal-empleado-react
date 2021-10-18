import React, {useState} from 'react';
import Header from './Header';
import '../layouts/css/pantallaPrinipal.css';

const PantallaPrincipal = props => {
    const {datosUsuario} = props;
    const {usuario, contrasenia} = datosUsuario;
    const [mostrarMenu, guardarMostrarMenu] = useState(false);
    return (
        <>
            <Header mostrarMenu={mostrarMenu} guardarMostrarMenu={guardarMostrarMenu} />
            <div className={!mostrarMenu ? ("container mt-5") : ("container")}>
		<div className="row">
		    <div className="col d-flex justify-content-start">
			<img id="imgLogo" name="imgLogo" alt="Logo Portal" className="img-responsive" />
		    </div>
		    <div className="col d-flex justify-content-end">
			<h3 className="">Portal Virtual Colaboradores</h3>
		    </div>
		</div>
		<div className="row d-flex justify-content-between mt-5">
		    <div className="col">
			<div className="mb-3">
			    <label htmlFor="idTrabajador" className="form-label">Identificación</label>
			    <input type="text" readOnly className="form-control-plaintext" name="idTrabajador" id="idTrabajador" />
			</div>
		    </div>
		    <div className="col">
			<div className="mb-3">
			    <label htmlFor="nombreTrabajador" className="form-label">Nombre</label>	
			    <input type="text" readOnly className="form-control-plaintext" id="nombreTrabajador" name="nombreTrabajador" />
			</div>
		    </div>
		</div>
		<hr />
		<div className="row d-flex justify-content-between">
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="cliente" className="col-sm-2 col-form-label">Cliente</label>
			    <div className="col-sm-10">
			     <input type="text" readOnly className="form-control-plaintext" name="cliente" id="cliente" />
			    </div>
			</div>
		    </div>
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="nombreEps" className="col-sm-2 col-form-label">EPS</label>
			    <div className="col-sm-10">
				 <input type="text" readOnly className="form-control-plaintext" id="nombreEps" name="nombreEps" />
			    </div>
			</div>
		    </div>
		</div>
		<div className="row d-flex justify-content-between">
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="contrato" className="col-sm-2 col-form-label">Contrato</label>
			    <div className="col-sm-10">
				    <select className="form-select">
					 <option selected value=""></option>
					 <option value="1">One</option>
				    </select>
			    </div>
			</div>
		    </div>
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="nombreAfp" className="col-sm-2 col-form-label">AFP</label>
			    <div className="col-sm-10">
				 <input type="text" readOnly className="form-control-plaintext" id="nombreAfp" name="nombreAfp" />
			    </div>
			</div>
		    </div>
		</div>
		<div className="row d-flex justify-content-between">
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="fechaIngreso" className="col-sm-2 col-form-label">Fecha Ingreso</label>
			    <div className="col-sm-10">
				 <input type="date" readOnly className="form-control-plaintext" id="fechaIngreso" name="fechaIngreso" />
			    </div>
			</div>
		    </div>
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="nombreCcf" className="col-sm-2 col-form-label">CCF</label>
			    <div className="col-sm-10">
				 <input type="text" readOnly className="form-control-plaintext" id="nombreCcf" name="nombreCcf" />
			    </div>
			</div>
		    </div>
		</div>
		<div className="row d-flex justify-content-between">
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="fechaRetiro" className="col-sm-2 col-form-label">Fecha Retiro</label>
			    <div className="col-sm-10">
				 <input type="date" readOnly className="form-control-plaintext" id="fechaRetiro" name="fechaRetiro" />
			    </div>
			</div>
		    </div>
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="nombreArl" className="col-sm-2 col-form-label">ARL</label>
			    <div className="col-sm-10">
				 <input type="text" readOnly className="form-control-plaintext" id="nombreArl" name="nombreArl" />
			    </div>
			</div>
		    </div>
		</div>
		<div className="row d-flex justify-content-between">
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="nombreBanco" className="col-sm-2 col-form-label">Banco</label>
			    <div className="col-sm-10">
				 <input type="text" readOnly className="form-control-plaintext" id="nombreBanco" name="nombreBanco" />
			    </div>
			</div>
		    </div>
		    <div className="col">
			<div className="mb-3 row">
			    <label htmlFor="numCuentaBanco" className="col-sm-2 col-form-label">N° Cuenta</label>
			    <div className="col-sm-10">
				 <input type="text" readOnly className="form-control-plaintext" id="numCuentaBanco" name="numCuentaBanco" />
			    </div>
			</div>
		    </div>
		</div>
		<hr />
		<div className="row d-flex justify-content-around m-3">
		    <div className="col-12 col-sm-3 text-center d-grid gap-2 mb-2">
			<input id="btnCertificadoLaboral" name="btnCertificadoLaboral" className="btn btn-secondary" type="button" value="Certificado Laboral"/>
		    </div>
		    <div className="col-12 col-sm-3 text-center d-grid gap-2 mb-2">
			<input id="btnCertificadoIngRet" name="btnCertificadoIngRet" className="btn btn-secondary" type="button" value="Certificados Ing. y Retencion"/>
		    </div>
		    <div className="col-12 col-sm-3 text-center d-grid gap-2 mb-2">		
			<input id="btnVolantesPago" name="btnVolantesPago" className="btn btn-secondary" type="button" value="Volantes de pago"/>	    
		    </div>	
		    <div className="col-12 col-sm-3 text-center d-grid gap-2 mb-2">	
			<input id="btnGenerarSS" name="btnGenerarSS" className="btn btn-secondary" type="button" value="Aportes S.S"/>	
		    </div>
		</div>
	    </div>
        </>
    );
}
 
export default PantallaPrincipal;
