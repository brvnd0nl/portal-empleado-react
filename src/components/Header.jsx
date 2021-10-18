import React from 'react';

const Header = props => {
    
    const {mostrarMenu} = props;

    return (
        <>
	    {mostrarMenu ? 
		(<div>
		    <p>Esto es el header</p>
		    <p>Hola ASASAS</p>
		</div>) 
	    : null}
                    
        </>
    );
}
 
export default Header;
