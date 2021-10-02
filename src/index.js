import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './layouts/css/index.css';

ReactDOM.render(
    <>
        <Router>
            <App />
        </Router>
    </>
, document.getElementById('app'));