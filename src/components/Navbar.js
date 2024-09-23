import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Fleet Management</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">Vehicles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-vehicle">Add Vehicle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trips">Trips</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
