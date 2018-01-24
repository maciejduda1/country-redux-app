import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/countries">Countries</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/continents">Continents</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;