import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logo green.jpg';
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/" className="text-white"><img style={{ height: '66px' }} src={logo} alt="" /></Link>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse topnav " id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto mb-2 mx-5 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link custom-nav-style ms-3 active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-style ms-3" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-style ms-3" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-style ms-3" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              {
                loggedInUser.name ? <img style={{ height: '50px', borderRadius: "50%" }} src={loggedInUser.photoURL} alt={loggedInUser.name} /> : <button className="btn login-btn w-100">
                  <Link className='custom-nav-style' to="/login">Login</Link>
                </button>
              }

            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;