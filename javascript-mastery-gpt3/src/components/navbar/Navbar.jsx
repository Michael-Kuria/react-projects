import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { ReactDOM } from "react";

const Links = () => {
  return (
    <>
      <p>
        <a href="#">Home</a>
      </p>
      <p>
        <a href="#">What is GPT?</a>
      </p>
      <p>
        <a href="#">Open AI</a>
      </p>
      <p>
        <a href="#">Case Studies</a>
      </p>
      <p>
        <a href="#">Library</a>
      </p>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gpt3__navbar">
      <div className="gpt3__navbar--left">
        <div className="gpt3__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links">
          <Links />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu-container scale-up-center">
            <div className="gpt3__navbar-menu-links">
              <Links />
            </div>
            <div className="gpt3__navbar-menu-sign">
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
