import React, { useState } from 'react';
import './Profile.css';
import Navside from './Navside.jsx';

const Profile = () => {
    const [showProPage, setShowProPage] = useState(false);
    const [profileImage, setProfileImage] = useState("Recruitment.jpeg");

    const handleEditClick = () => {
        setShowProPage(true);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Navside />
            <div className="pro-display">
                <div className="pro-pic">
                    <img src={profileImage} alt="user-pic" />
                </div>
                <div className="information">
                    <h2>Details</h2>
                    <table id='table'>
                        <tr id='row'>
                            <td id='col'>Name :</td>
                            <td>UserName</td>
                        </tr>
                        <tr>
                            <td>Role :</td>
                            <td>Candidate</td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td>abcd@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Location :</td>
                            <td>City Name</td>
                        </tr>
                        <tr>
                            <td>Gender :</td>
                            <td>M/F</td>
                        </tr>
                    </table>
                </div>
                <button id="edit"  onClick={handleEditClick} >Edit</button>
            </div>

            {/* Conditionally render the pro-page section */}
            {showProPage && (
                <div className="pro-page">
                    <div className="profile-page">
                        <div className="header">
                            <div className="profile-info">
                                <img id='pic' src={profileImage} alt="Profile" />
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                    style={{ display: 'none' }} 
                                    id="imageUpload"
                                />
                                <label htmlFor="imageUpload">
                                    <button id='edit1' >Edit</button>
                                </label>
                            </div>
                        </div>

                        <div className="account-settings">
                            <form>
                                <div className="form-row">
                                    <label>UserName</label>
                                    <input type="text" id='in-ty' placeholder="UserName" />
                                </div>
                                <div className="form-row">
                                    <label>Email address</label>
                                    <input type="text" id='in-ty' placeholder='email@gmail.com' />
                                </div>
                                <div className="form-row">
                                    <label>Location</label>
                                    <input type="text" id='in-ty' placeholder='CityName' />
                                </div>
                                <div className="form-row">
                                    <label>State</label>
                                    <input type="text" id='in-ty' placeholder='StateName' />
                                </div>
                                <button id='update' type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
