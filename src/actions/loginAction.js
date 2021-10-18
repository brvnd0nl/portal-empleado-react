import React from 'react';


export const validarDatosCache = (abreviaturaEmpresa, datosUsuario, guardarDatosUsuario) => {
        const datos = localStorage.getItem("SS_objDatosUsuario");
        if(datos != null){            
            if(datosUsuario.usuario == '') guardarDatosUsuario(JSON.parse(datos));  
            if(!abreviaturaEmpresa){                
                abreviaturaEmpresa = datosUsuario.abreviaturaEmpresa;                
                validarDatosCache(abreviaturaEmpresa, datosUsuario, guardarDatosUsuario);
                return;
            }          
            if(abreviaturaEmpresa ===  datosUsuario.abreviaturaEmpresa){
		history.push(`/Inicio?abr=${abreviaturaEmpresa}`);
            }
        }else{
            if(abreviaturaEmpresa){
                guardarDatosUsuario({
                    ...datosUsuario,
                    abreviaturaEmpresa,
                });
            }
        }
    };

