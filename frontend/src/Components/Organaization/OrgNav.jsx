import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OrgNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faBars, faGears,faSquarePlus, faUser, faListCheck } from '@fortawesome/free-solid-svg-icons';

const OrgNav = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    navigate("/orglogin");
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
            <p>Welcome to Our Job Portal, <span>Recruit...</span></p>
            
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
                <Link to='/orghome'>Home</Link>
              </li>
              <li className='nav-list-items1'>
                <Link to='/jobs'>Jobs</Link>
              </li>
              <li className='nav-list-items1'>
                <Link to=''>About</Link>
              </li>
              <li className='nav-list-items1' onClick={handleLogoutClick}>
                Logout
              </li>
            </ul>
          </nav>
        </header>
        <hr />
        <aside>
          <div className="org-nav-side">
            <ul className="org-nav-links">
              <li id='link'>
                <FontAwesomeIcon icon={faUser} />
                <Link to=''>Profile</Link>
              </li>
              <li id='link'>
              <FontAwesomeIcon icon={faSquarePlus} />
                <Link to=''>Add Jobs</Link>
              </li>
              <li id='link'>
              <FontAwesomeIcon icon={faListCheck} />
                <Link to=''>Manage Jobs</Link>
              </li>
              <li id='link'>
                <FontAwesomeIcon icon={faBars} />
                <Link to=''>Applications</Link>
              </li>
              <li id='link'>
                <FontAwesomeIcon icon={faGears} />
                <Link to=''>Settings</Link>
              </li>
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

export default OrgNav;
