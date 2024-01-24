

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{position:"sticky",top:"3"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><i className="fa-solid fa-house"></i></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/WeatherApp">Weather <i class="fa-solid fa-cloud-bolt"></i></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/NewsApp">NewsApp <i className="fa-solid fa-radio"></i></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Dr-FullCalander">DrAPPointment <i className="fa-solid fa-notes-medical"></i></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Employee-management-app">Employee-Manage <i className="fa-solid fa-users"></i></Link>
          </li>
          
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Services">Services</Link>
          </li> */}
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search "  aria-label="Search"/>
        <button class="btn btn-success " type="submit">Search <i className="fa-brands fa-searchengin"></i></button>
      </form>
      </div>
    </div>
  </nav>
  
    </>
  );
};
  
export default Navbar;