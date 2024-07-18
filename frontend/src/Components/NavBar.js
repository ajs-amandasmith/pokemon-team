import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex bg-sky-600">
      <div className="text-white p-1">
        <NavLink to="/">
          Home
        </NavLink>
      </div>
      <div className="text-white p-1">
        <NavLink to="/team">
          Team
        </NavLink>
      </div>
      <div className="text-white p-1">
        <NavLink to="favorites">
          Favorites
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;