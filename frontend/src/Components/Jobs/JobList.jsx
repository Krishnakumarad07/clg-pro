import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './JobList.css';

const JobList = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleConfirmLogout = () => {
        // Add logout logic here
        navigate("/");
        setShowLogoutModal(false);
    };

    const handleCancelLogout = () => {
        setShowLogoutModal(false);
    };

    const jobs = Array(16).fill({
        title: 'Software Engineer',
        location: 'Madurai',
        salary: '2.9LPA to 3.6LPA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus'
    });

    return (
        <>
            <div className="nav-jobs">
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
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-list-items1'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <a href="#footer-job">  <li className='nav-list-items1'>
                        About
                        </li></a>
                        <li className='nav-list-items1' onClick={handleLogoutClick}>
                <Link to='#'>Logout</Link>
              </li>
                    </ul>
                </nav>
                <hr />

                
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

            <main className='job-container'>
                {jobs.map((job, index) => (
                    <div className="job-list" key={index}>
                        <div className="job-dis-cont">
                            <div className="img-back">
                                <img src="backdrop.png" alt="backdrop" />
                            </div>
                            <h2 className="job-title">{job.title}</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Location: </td>
                                        <td>{job.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Salary:</td>
                                        <td>{job.salary}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>{job.description}</p>
                            <button className="btn">Apply now</button>
                        </div>
                    </div>
                ))}
            </main>
            <footer id='footer' className="footer">
                    <div id='footer-job'className="footer-info">
                        <div className="about">
                            <a href='#home'>  <h3>About Company</h3>
                                <p>Contact Us</p>
                                <p>Terms & Condition</p>
                                <p>Privacy & Policy</p>
                                <p>Candidate Listing</p>
                            </a>
                        </div>
                        
                        <div className="can-support">
                            <a href='#home'> <h3>For Candidates</h3>
                                <p>Upload Resume </p>
                                <p>Save JobList</p>
                                <p>Candidate Dashboard</p>
                                <p>Browse Jobs</p></a>

                        </div>
                        <div id='ab-img'>
                            <img src="about1.png" alt="" />
                        </div>

                        <div className="emp">
                            <a href="#home"> <h3>For Employers</h3>
                                <p>Post A Job</p>
                                <p>Job Package</p>
                                <p>Employee Dashboard</p></a>

                        </div>
                        {/* <div id='ab-img'>
                            <img src="about.png" alt="" />
                        </div> */}
                        <div className="support">
                            <h3>Support</h3>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faInstagram} />

                        </div>

                    </div>
                    <p id='last-line'>&copy; {new Date().getFullYear()} __@Recruit. All rights reserved.</p>
                </footer>
        </>
    );
};

export default JobList;
