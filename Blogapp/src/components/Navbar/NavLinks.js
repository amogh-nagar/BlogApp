import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useSelector((state) => state.auth);


  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Blogs
        </NavLink>
      </li>
     
      {auth.islogin && (
        <li>
          <NavLink to="/Posts/new">ADD Post</NavLink>
        </li>
      )}
      {!auth.islogin && (
        <li>
          <NavLink to="/login">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.islogin && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
