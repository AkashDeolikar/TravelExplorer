// const User = require('../models/userModel');
// const jwt = require('jsonwebtoken');

// //JWT token
// const generateToken = (user) => {
//     return jwt.sign(
//         { id: user._id, email: user.email, role: user.role },
//         process.env.JWT_SECRET || 'secret123',
//         { expiresIn: '7d' }
//     );
// }

// //Register new user
// exports.registerUser = async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: 'User already exists' });

//         const user = await User.create({ name, email, password });
//         const token = generateToken(user);

//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             token
//         });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }

// //Login User

// exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//         const isMatch = await user.matchPassword(password);
//         if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//         const token = generateToken(user);
//         res.json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             token
//         });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }

// //Get current user (for protected routes)
// exports.getMe = async( req, res) => {
//     res.json(req.json);
// }
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Generate token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  const user = req.user;
  res.json(user);
};
