import React, { useState } from "react";
import { Link, Redirect, useHistory, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./nav.css";
import searchbtn from "../../img/Search-ico.svg";
// import Search from "../search/search";

const Nav = (props) => {
  const [isNavBack, setNavBack] = useState(false);
  const [isActive, setActive] = useState('trending');
  const [isSearch, setIsSearch] = useState('');
  const [isOpen, setOpen] = useState(false)

  let history = useHistory()

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

  const searchange = (e) => {
    setIsSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${isSearch}`)
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
              className={`nav-links  ${isActive === 'watching' ? 'nav-active' : ''}`}
              onClick={() => onPickNav('watching')}
            >
              WATCHING
            </li>
          </Link>
        </ul>
      </div>
      <div onSubmit={handleSubmit} style={{ marginTop: 'auto', marginBottom: 'auto', }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "row", alignSelf: 'center', backgroundColor: 'lightgrey', padding: 2, borderRadius: 50 }}>
          <input name='terms' type="text" placeholder='Search...' onChange={searchange} className='nav-searh-input' />
          <button className='nav-search-button' type='submit' >
            <img className="nav-search-ico" alt="s" src={searchbtn} />
          </button>
        </form>
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