const express = require('express');
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getVerifyToken,
  verifyUser
} = require('../controllers/userController.js');
const protect  = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', registerUser);
router.get("/verify/:token", verifyUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/verify-token', protect, getVerifyToken);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports=router;
