const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../Controller/controller');

const { verifyToken, authorizeRoles } = require('../Middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/users',
  verifyToken,
  authorizeRoles('admin'),
  getAllUsers
);

module.exports = router;