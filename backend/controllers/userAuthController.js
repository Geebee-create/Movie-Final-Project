const UserModel = require('../models/User');

// General controller function for user login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // To find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // To check if the provided password matches the user's password
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // If login successful, send a success message
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function for user registering 
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // To check if user with the provided email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // To create a new user document
        const newUser = await UserModel.create({ name, email, password });

        // To send a success message once registered.
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { login, register };