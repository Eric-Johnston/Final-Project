import React from 'react';
import './Header.css';

const Header = props => (
  <header className="row split">
    <h3>MoviezTVSource</h3>

    <nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="test.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./client/test.html">
              Link
            </a>
          </li>
    
        </ul>
    
      </div>
    </nav>
  </header>
);

export default Header;