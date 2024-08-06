const express = require('express');
const router = express.Router();
const UserDB = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'fallbackkey';

// Route to handle user registration (sign-up)
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await UserDB.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new UserDB({
            username,
            email,
            password,  // Store the plain text password
        });
        const user = await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
        );

        res.json({
            message: 'User created successfully',
            token,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to handle user login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await UserDB.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if the password matches
        if (user.password !== password) {  // Compare plain text passwords
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
        );

        res.json({
            message: 'Login successful',
            token,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
