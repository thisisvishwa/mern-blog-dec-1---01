```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

// Register a new user
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// User logout
router.post('/logout', auth, userController.logoutUser);

// Get user profile
router.get('/profile', auth, userController.getUser);

// Update user profile
router.put('/profile', auth, userController.updateUser);

// Delete user
router.delete('/:id', [auth, authorization], userController.deleteUser);

module.exports = router;
```