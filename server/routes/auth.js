const express = require('express');
const router  = express.Router();
const {registerUser, loginUser, verifyOtp} = require('../controllers/authController');
const {session} = require ('../middleware/auth')

router.post('/register',registerUser);
router.post('/login',session,loginUser);
router.post('/verify-otp',verifyOtp);

module.exports = router;