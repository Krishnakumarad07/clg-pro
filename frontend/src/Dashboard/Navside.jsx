import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navside = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };
  const navigate = useNavigate();
  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    navigate("/loginpage")
    console.log("User logged out");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <div className="co">
        <header>
          <div id='home' className="welcome-line">
            <p>Welcome Our Job Portal, <span>Recruit...</span></p>

            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <nav className='navbar1'>
            <img id='pro-icon1' src="pro-logo.png" alt="logo" />
            <h1>Recruit</h1>

            <ul className='navbar-list1'>
              <li className='nav-list-items1'>
                <Link to='/'>Home</Link>
              </li>
              <li className='nav-list-items1'>
                <Link to='/jobs'>Jobs</Link>
              </li>
              <li className='nav-list-items1'>
                <Link to='/'>About</Link>
              </li>
              <li className='nav-list-items1' onClick={handleLogoutClick}>
                <Link to='#'>Logout</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr />

        <aside>
          <div className="nav-side">
            <ul className="nav-links">
              <a href=""><li id='link'>
                <Link to='/profile'>Profile</Link>
              </li></a>
              <a href=""> <li id='link'>
                <Link to=''>Status</Link>
              </li></a>
              <a href="">  <li id='link'>
                <Link to=''>Apply Jobs</Link>
              </li></a>
              <a href=""> <li id='link'>
                <Link to=''>Settings</Link>
              </li></a>
            </ul>
          </div>
        </aside>


        {showLogoutModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Confirm Logout</h3>
              <p>Are you sure you want to logout?</p>
              <button id='yes' onClick={handleConfirmLogout}>Yes</button>
              <button onClick={handleCancelLogout}>No</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navside;
