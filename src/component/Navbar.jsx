import React from 'react';
import Login from './Login';
import { Link} from "react-router-dom";

 
function Navbar() {

  return (
      <React.Fragment>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Eventing</Link>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
        <Login />
        </ul>
    </nav>
    </React.Fragment>

  );
}

export default Navbar;