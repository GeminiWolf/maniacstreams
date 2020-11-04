import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";
import searchbtn from "../../img/Search-ico.svg";

const Nav = (props) => {
  const [isNavBack, setNavBack] = useState(false);
  const [isActive, setActive] = useState('trending');
  const [isOpen, setOpen] = useState(false)

  const onNavChange = () => {
    if (window.scrollY > 10) {
      setNavBack(true)
    }
    else {
      setNavBack(false)
    }
  }

  return (
    <div className={`nav-container ${isNavBack ? 'nav-change' : ''}`} onScroll={onNavChange}>
      <div
        className={`nav-hamburger ${isOpen ? 'nav-open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="img-logo">
        <h1>MainacStreams</h1>
      </div>
      <div className="nav-wrapper">
        <ul className={`navigation ${isOpen ? 'nav-slide' : ''}`}>
          <Link to="/" className='left-margin nav-mobile'>
            <li
              className={`nav-links left-margin ${isActive === 'trending' ? 'nav-active' : ''}`}
              onClick={() => setActive('trending')}
            >
              TRENDING
            </li>
          </Link>
          <Link to="/series" className='nav-mobile' onClick={() => setOpen(!isOpen)}>
            <li
              className={`nav-links ${isActive === 'series' ? 'nav-active' : ''}`}
              onClick={() => setActive('series')}
            >
              SERIES
            </li>
          </Link>
          {/* <Link to="/watching" className='nav-mobile' onClick={() => setOpen(!isOpen)}> */}
          <li
            className={`nav-links ${isActive === 'watching' ? 'nav-active' : ''}`}
            onClick={() => setActive('watching')}
          >
            WATCHING
            </li>
          {/* </Link> */}
          <div className='search-container'>
            <form action="" className="search-form" onSubmit={props.handleSubmit}>
              <input placeholder="Search" type="text" onChange={props.handleChange} />
              <button type="submit">
                <Link>
                  <img className="search-ico" alt="s" src={searchbtn} />
                </Link>
              </button>
            </form>
          </div>
        </ul>
      </div>
      <Link to='/profile' style={{ marginTop: 'auto', marginBottom: 'auto' }} >
        <div className="profile-nav-container" onClick={() => setActive('profile')}>
          <img src={require(`../../img/profile2.svg`)} alt="" className="profile-nav-btn" />
        </div>
      </Link>
    </div>
  );
}

export default Nav;