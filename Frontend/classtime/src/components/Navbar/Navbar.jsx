import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar_main">
      <Link to={"/"} className="Logo">
        <img
          src="https://logopond.com/logos/9fbc6ba08986a80180e56fb781e9d8a3.png"
          alt="Logo"
        />
      </Link>
      <Link to={"/admin"} className="admin_But">
        <button>Admin Login</button>
      </Link>
    </div>
  );
};
