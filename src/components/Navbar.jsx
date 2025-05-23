import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import NotificationIcon from "./NotificationIcon";
import ProfileIcon from "./ProfileIcon";
import "../assets/styles/Navbar.css";

const Navbar = () => { 
  const navigate = useNavigate();

  return ( 
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
        <img src="/images/BINLOGO1.png" alt="Logo" className="logo-image" />
          <span className="logo-text"></span>
          <div className="nav-links">
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button onClick={() => navigate("/monitor")}>Monitor</button>
          <button onClick={() => navigate("/insights")}>Insights</button>
          <button onClick={() => navigate("/reports")}>Reports</button>
        </div>
        </div>
      </div>
      
      <div className="navbar-right">
        <NotificationIcon />
        <ProfileIcon />
      </div>
    </nav>
  );
};

export default Navbar; 