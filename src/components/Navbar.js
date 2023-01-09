import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../App.module.css';
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
