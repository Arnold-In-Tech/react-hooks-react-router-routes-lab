import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    {/*{code here}*/}
    <NavLink
    to="/" exact style={{}} activeStyle={{}}
    >
      Home
    </NavLink>
    <NavLink
    to="/movies" exact style={{}} activeStyle={{}}
    >
      Movies
    </NavLink>
    <NavLink
    to="/directors" exact style={{}} activeStyle={{}}
    >
      Directors
    </NavLink>
    <NavLink
    to="/actors" exact style={{}} activeStyle={{}}
    >
      Actors
    </NavLink>
  </div>);
}

export default NavBar;
