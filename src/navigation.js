import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Nav1() {

    return (
    <nav>
        <h3>Logo</h3>
       {/* <NavLink to="/">Home</NavLink> */}
        <ul className="nav-links">
        <Link to="/">
            <li>Home</li> </Link>
          <Link to="/Shop">
            <li>Shop</li> </Link>
            <Link to="/About">
            <li>About</li></Link>
        </ul>
    </nav>
  );
}

export default Nav1;