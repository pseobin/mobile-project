import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import img1 from '../assets/images/logo.png';
// import { FaBars } from "react-icons/fa";

function Header() {

  const [isSwitched, setIsSwitced] = useState(false); //햄버거 메뉴 열림(true)/닫힘(false)
  const [isSwitched2, setIsSwitced2] = useState(false);
  const navHandler = (e) => {
    e.preventDefault();
    setIsSwitced(!isSwitched);  //메뉴 토글
    setIsSwitced2(!isSwitched2);
  };

  const closeHandler = () => {
    setIsSwitced(false);  //메뉴 닫힘
    setIsSwitced2(false); 
  };



    return (
      <header>
       <div className="header_inner"> 
          <h1><NavLink to="/" ><img src={img1} alt="로고명" /></NavLink></h1>
          <nav className={ isSwitched ? 'show' : 'hide' } onClick={closeHandler}>
              <ul>
                  <li><NavLink to="/About">About</NavLink></li>
                  <li><NavLink to="/Product">Product</NavLink></li>
                  <li><NavLink to="/Character">Character</NavLink></li>
                  <li><NavLink to="/Recruit">Recruit</NavLink></li>
                  <li><NavLink to="/Service">Service center</NavLink></li>
              </ul>
            </nav>
            <button className={isSwitched2 ? "mn_open" : ""}  onClick={navHandler}>
              <span></span>
            </button>
         </div>
       </header>
    );
  }

  export default Header;