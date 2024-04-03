import React from 'react';
import logo from './Images/logo.png';
import MobileDropDown from './MobileDropdown';

function Navbar() {
  return (
    <nav id="navbar" className="navbar-expand-lg" style={{ backgroundColor: "rgba(255,255,255,0.83)" }}>
      <div>
        <div className="container-fluid row">
          <div className="col-xl-1 col-1">
            <img className="logo-img" src={logo} height="100px" width="100px" alt="newlogo" />
          </div>
          <div className="col-xl-8 col-8 header-x header-mobile">
            <a className="navbar-brand header text-wrap" href="/">
              Dr Rahul Astro Homeopathic & Research Center
            </a>
          </div>
          <div className='col-xl-3 '>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mt-3">
                <li className="nav-item">
                  <a className="nav-link active m-3 font-weight-bold" aria-current="page" href="/">
                    <h5> Home </h5>
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link m-3 font-weight-bold" href="#doc">
                    <h5>About </h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link m-3 font-weight-bold" href="#foot">
                    <h5>Contact Us </h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex col-xl-3 col-1 ">
            <MobileDropDown />
          </div>
        </div> 
      </div>
    </nav>
  );
}

export default Navbar;
