import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import '../App.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

const NavBar = () => {
    return (
      <div id="navbar">
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/coding" className="link">Coding</Link>
          <Link to="/creative" className="link">Creative</Link>
          <Link to="/about" className="link">About</Link>
        </nav>
      </div>
    );
  }

  export default NavBar;