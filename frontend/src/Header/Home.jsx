import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="container">
                <header className="header">
                    {/* <div className="logo">Smart<span>Recruiter</span></div> */}
                    <img id="logo" src="/logo3.png" alt="" />
                    <nav className="navbar">
                        <a href="#jobs">Jobs</a>
                        <a href="#dashboard">Dashboard</a>
                        {/* <a className="login-btn" to='login'>Login</a> */}
                        <Link to="/loginpage">Login</Link>

                    </nav>
                </header>
                <main className="main-content">
                    <h1 id='h1tag'>Get Your <span className="highlight">Dream Job</span> Today!</h1>
                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur adipisi eius aut mollitia quasi nisi voluptatem similique, tempore totam, odit repellendus non. Dolores eos animi recusandae.
                    </p>
                    {/* <a className="apply-btn" >Apply Now</a> */}
                    <Link id='link-id' to="/sign">Apply Now</Link>
                </main>
                <div className='img'>
                    <figure className="image-container">
                        <img id='pic' src="/bgimg.png" alt="Illustration" />
                    </figure>
                </div>

            </div>

            <div className='container-2'>

                <div className="box">
                    <div className="box-header">
                        <div className="vacancies-section">
                            <h1 id='heading'>Most Popular Vacancies</h1>
                            <div className="vacancies-list">
                                <div>
                                    <p>Anesthesiologists</p>
                                    <p id='one'>45,904 Open Positions</p>
                                </div>
                                <div>
                                    <p>Software Developer</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>IT Manager</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Surgeons</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Data Scientist</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Research Analysis</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Gynecologists</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Financial Manager</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                {/* <div>
                                    <p>Maxillofacial Surgeons</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Orthodontists</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>Management Analysis</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div>
                                <div>
                                    <p>IT Manager</p>
                                    <p id='one'>50,364 Open Positions</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="job-portal-banner">
                            <h2>How Job Portal Works</h2>
                            <p>
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                                cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>

                            <div className="job-portal-stats">
                                <div className="stat-item">
                                    <h3>12</h3>
                                    <p id='one'>Offices worldwide</p>
                                </div>
                                <div className="stat-item">
                                    <h3>300+</h3>
                                    <p id='one'>Full-time colleagues</p>
                                </div>
                                <div className="stat-item">
                                    <h3>40</h3>
                                    <p id='one'>Hours per week</p>
                                </div>
                                <div className="stat-item">
                                    <h3>Unlimited</h3>
                                    <p id='one'>Paid time off</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='container-3'>
                <div className="about-page" id='aboutpage'>
                    <header className="header1">
                        <h1 className="title">About Us</h1>
                        <p className="subtitle">Empowering Your Career Journey</p>
                    </header>

                    <section className="introduction">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="section-description">
                            At Recruit , we are dedicated to bridging the gap between talented professionals and top employers.
                            Our mission is to provide innovative recruitment solutions that help organizations find the best talent while
                            offering job seekers access to exciting career opportunities.
                        </p>
                    </section>

                    <section className="our-values">
                        <h2 className="section-title">Our Core Values</h2>
                        <div className="values-container">
                            <div className="value-item">
                                <h3 className="value-title">Integrity</h3>
                                <p className="value-description">
                                    We operate with honesty and transparency in all our interactions.
                                </p>
                            </div>
                            <div className="value-item">
                                <h3 className="value-title">Innovation</h3>
                                <p className="value-description">
                                    We embrace creativity and new technologies to stay ahead in the recruitment industry.
                                </p>
                            </div>
                            <div className="value-item">
                                <h3 className="value-title">Excellence</h3>
                                <p className="value-description">
                                    We strive for excellence in everything we do, aiming to exceed expectations.
                                </p>
                            </div>
                            <div className="value-item">
                                <h3 className="value-title">Customer Focus</h3>
                                <p className="value-description">
                                    We put our clients' needs first and work diligently to achieve their goals.
                                </p>
                            </div>
                        </div>
                    </section>

                    <footer className="footer">
                        <p>&copy; {new Date().getFullYear()} __@Recruit. All rights reserved.</p>
                    </footer>
                </div>

            </div>



        </>
    );
}
export default Home;