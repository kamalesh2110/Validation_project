import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="NavbarContainer">
      <Link to="/">Home</Link>
      <Link to="/email">Email validation</Link>
      <Link to="/phone">Number validation</Link>
    </div>
  );
}
