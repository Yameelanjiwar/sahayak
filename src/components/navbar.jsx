import React from "react";
import { Link } from "react-router-dom";
import { HandHelping } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <div className="nav-inner">
        {" "}
        <Link to="/" className="brand">
          {" "}
          <span className="brand-mark">
            {" "}
            <HandHelping size={20} />{" "}
          </span>{" "}
          <span>SAHAYAK</span>{" "}
        </Link>
        ```
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/workers">Workers</Link>
          <Link to="/bookings">My Bookings</Link>
          <Link to="/login" className="nav-login-btn">
            Login
          </Link>
        </div>
        <button className="mobile-menu">☰</button>
      </div>
    </nav>
  );
}

export default Navbar;
