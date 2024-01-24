// Navbars.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NewsNavbars = () => {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{position:"sticky",top:"6"}}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          AAJ TAK KE SAMACHAR
        </Link>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/NewsApp">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/Sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/Entertainments">
                Entertainments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/LocalNews">
                Local News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/Politics">
                Politics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NewsNavbars;
