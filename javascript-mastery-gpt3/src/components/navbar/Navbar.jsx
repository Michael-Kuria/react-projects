import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../../assets/logo.svg";
import { ReactDOM } from "react";

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
