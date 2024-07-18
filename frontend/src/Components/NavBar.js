import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/team">
        Team
      </NavLink>
      <NavLink to="favorites">
        Favorites
      </NavLink>
    </div>
  )
}

export default NavBar;