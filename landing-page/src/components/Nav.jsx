import React from "react";
import logo from "./../images/logo.png";
import "./../index.css";

export const Nav = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex flex-row gap-4">
        <li>Why Open Enterprise</li>
        <li>Features</li>
        <li>Contribute</li>
        <li>Request eary access</li>
      </ul>
    </nav>
  );
};
