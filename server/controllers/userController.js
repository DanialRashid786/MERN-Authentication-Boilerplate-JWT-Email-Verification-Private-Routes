const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');
const generateToken = require('../utils/generateToken.js');
const TempUser = require("../models/tempUserModel.js");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail.js");

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

// @desc Register user and send verification email
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  const tempUserExists = await TempUser.findOne({ email });

  if (userExists || tempUserExists) {
    res.status(400);
    throw new Error("User already exists or pending verification");
  }

  // Generate verification token
  const verificationToken = crypto.randomBytes(32).toString("hex");

  const tempUser = await TempUser.create({
    name,
    email,
    password,
    verificationToken,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000), // Set expiry to 5 minutes
  });

  // Send email with verification link
  const verificationUrl = `${process.env.ORIGIN}/verify/${verificationToken}`;
  await sendEmail(email, "Verify your account", `Click here to verify: ${verificationUrl}`);

  res.status(201).json({ message: "Verification email sent. Check your inbox." });
});



// @desc Verify user and move to permanent DB
// @route GET /api/users/verify/:token
// @access Public
const verifyUser = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const tempUser = await TempUser.findOne({ verificationToken: token });

  if (!tempUser) {
    res.status(400);
    throw new Error("Invalid or expired token");
  }

  // Move user from TempUser to User collection
  const user = await User.create({
    name: tempUser.name,
    email: tempUser.email,
    password: tempUser.password,
  });

  // Remove temp user
  await TempUser.deleteOne({ _id: tempUser._id });

  res.status(200).json({ message: "Account verified successfully. You can now log in." });
});


const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only in production
    // sameSite: 'None', // Required for cross-origin cookies
    expires: new Date(0),
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getVerifyToken=(req, res) => {
  res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
};


module.exports={
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getVerifyToken,
  verifyUser,
};
