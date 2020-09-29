import React from "react";
import "./nav.css";
import searchbtn from "../../img/Search-ico.svg";

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="fixed-nav">
        <div className="img-logo">
          <h1>MainacStreams</h1>
        </div>
        <ul className="navigation">
          <li className="nav-links">POPULAR</li>
          <li className="nav-links">TRENDING</li>
          <li className="nav-links">LATEST</li>
          <li className="nav-links">TOP RATED</li>
        </ul>
        <form action="" className="search-container" onSubmit={props.handleSubmit}>
          <input placeholder="Search" type="text" onChange={props.handleChange} />
          <button type="submit"><img className="search-ico" alt="s" src={searchbtn} /></button>
        </form>
      </div>
    </div>
  );
}

export default Nav;