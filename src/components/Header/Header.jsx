import React, { useState } from 'react'
import '../Header/header.scss'
import { Link } from 'react-router-dom';

import logo from '../../assets/tmovie.png';


const Header = () => {

  const [header,setHeader] = useState(false)


  const changeBackground = () => {
      if(window.scrollY >= 80) {
        setHeader(true);
      } else {
        setHeader(false)
      }
  } 

  window.addEventListener('scroll',changeBackground)


  return (
    <header className={header ? 'header active' : 'header'}>
      <div className="header-wrap  d-flex align-items-center justify-content-between  ">
        <div className="logo">
          <img width={50} src={logo} alt="" />
          <Link to="/">Sunny Town</Link>
        </div>
        <ul className="header-nav list-unstyled d-flex">
          <li className="nav-items"><Link to="/">Home</Link></li>
          <li className="nav-items"><Link to="/movies">Movies</Link></li>
          <li className="nav-items"><Link to="/tvseries">TV Series</Link></li>
        </ul>
      </div>
    </header >
  )
}

export default Header