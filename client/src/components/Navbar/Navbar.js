import React from "react";
import { BiMenu } from "react-icons/bi";
import "./styles.css";

function Navbar({ opacity }) {
  return (
    <div className={`Navbar ${opacity ? "opacity-0" : "opacity-1"}`}>
      <nav>
        <button>
          <BiMenu />
        </button>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
