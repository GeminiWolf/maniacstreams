import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";
import searchbtn from "../../img/Search-ico.svg";

const Nav = (props) => {
  const [isNavBack, setNavBack] = useState(false);
  const [isActive, setActive] = useState('home');

  const onNavChange = () => {
    if (window.scrollY > 10) {
      setNavBack(true)
    }
    else {
      setNavBack(false)
    }
  }

  // const active = (set) => {
  //   setActive(set)
  // }

  return (
    <div className={`nav-container ${isNavBack ? 'nav-change' : ''}`} onScroll={onNavChange}>
      <div className="img-logo">
        <h1>MainacStreams</h1>
      </div>
      <ul className="navigation">
        <Link to="/">
          <li
            className={`nav-links ${isActive === 'home' ? 'nav-active' : ''}`}
            onClick={() => setActive('home')}
          >
            POPULAR
            </li>
        </Link>
        <Link to="/trending">
          <li
            className={`nav-links ${isActive === 'trending' ? 'nav-active' : ''}`}
            onClick={() => setActive('trending')}
          >
            TRENDING
            </li>
        </Link>
        <Link to="/latest">
          <li
            className={`nav-links ${isActive === 'latest' ? 'nav-active' : ''}`}
            onClick={() => setActive('latest')}
          >
            LATEST
            </li>
        </Link>
        <Link to="/toprated">
          <li
            className={`nav-links ${isActive === 'toprated' ? 'nav-active' : ''}`}
            onClick={() => setActive('toprated')}
          >
            TOP RATED
            </li>
        </Link>
      </ul>
      <div className='search-container'>
        <form action="" className="search-form" onSubmit={props.handleSubmit}>
          <input placeholder="Search" type="text" onChange={props.handleChange} />
          <button type="submit"><img className="search-ico" alt="s" src={searchbtn} /></button>
        </form>
      </div>
    </div>
  );
}

export default Nav;