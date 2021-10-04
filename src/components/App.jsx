import React from 'react';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './Login';
import PantallaPrincipal from './PantallaPrincipal';
import CambioContraseña from './CambioContraseña';
import OlvidoContraseña from './OlvidoContraseña';

const App = () => {
    return (
        <>
            <Helmet>
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href={require('../layouts/icons/favicon-13.png')} />
            </Helmet>
            <Switch>
                <Route path="/CambioContraseña" component={CambioContraseña} />
                <Route path="/OlvidoContraseña" component={OlvidoContraseña} />
                <Route path="/Inicio" component={PantallaPrincipal} />
                <Route path="/" component={Login} />
            </Switch>            
        </>
    );
}
 
export default App;