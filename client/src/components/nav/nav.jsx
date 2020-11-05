import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
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

  const onPickNav = (s) => {
    setActive(s)
    setOpen(false)
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
              onClick={() => onPickNav('trending')}
            >
              TRENDING
            </li>
          </Link>
          <Link to="/movies" className='nav-mobile' onClick={() => setOpen(!isOpen)}>
            <li
              className={`nav-links ${isActive === 'movies' ? 'nav-active' : ''}`}
              onClick={() => onPickNav('movies')}
            >
              MOVIES
            </li>
          </Link>
          <Link to="/series" className='nav-mobile' onClick={() => setOpen(!isOpen)}>
            <li
              className={`nav-links ${isActive === 'series' ? 'nav-active' : ''}`}
              onClick={() => onPickNav('series')}
            >
              SERIES
            </li>
          </Link>
          <Link to="/watching" className='nav-mobile' onClick={() => setOpen(!isOpen)}>
            <li
              className={`nav-links ${isActive === 'watching' ? 'nav-active' : ''}`}
              onClick={() => onPickNav('watching')}
            >
              WATCHING
            </li>
          </Link>
          <div className='search-container'>
            <form className="search-form" onSubmit={props.handleSubmit}>
              <input placeholder="Search" type="text" name='search' onChange={props.handleChange} />
              <button type="submit">
                <img className="search-ico" alt="s" src={searchbtn} onClick={() => setOpen(!isOpen)} />
              </button>
            </form>
          </div>
        </ul>
      </div>
      <Link to='/profile' style={{ marginTop: 'auto', marginBottom: 'auto' }} >
        <div className="profile-nav-container" onClick={() => onPickNav('profile')}>
          {/* <img src={require('../../img/profile2.svg')} alt="p" className="profile-nav-btn" /> */}
          <FontAwesomeIcon icon={faUser} className="profile-nav-btn" size='5x' />
        </div>
      </Link>
    </div >
  );
}

export default Nav;