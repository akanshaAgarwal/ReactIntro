import React, { Component } from "react";

// we can either write props in argument
// or we can do argument destructuring
// for that we choose the variables we are interested in
function NavBar({ totalCounters }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Active Counters :
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
