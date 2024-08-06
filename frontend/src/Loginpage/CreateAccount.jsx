import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';
import axios from 'axios';

const CreateAccount = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = form;
    

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Make the POST request
        axios.post('http://localhost:8081/auth/signup', { username, email, password })
            .then(res => {
                console.log('Response:', res.data);
                localStorage.setItem('token', res.data.token);
                alert('Account created successfully!');
            })
            .catch(err => {
                console.error('Error:', err.response ? err.response.data : err.message);
                alert('Failed to create account. Please try again.');
            });
    };

    return (
        <>
            <div className="signup-page">
                <div className="form-container">
                    <img id="logo1" className="img1" src="/logo3.png" alt="" />
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit} method='post'>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="Type Here"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Type Here"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Type Here"
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                    <p id="lastline">
                        Already have an account? <Link to="/loginpage">Login Now</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
