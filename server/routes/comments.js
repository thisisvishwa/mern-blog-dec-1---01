```javascript
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

// Get all comments for a post
router.get('/:postId', auth, commentController.getComments);

// Create a new comment
router.post('/:postId', auth, commentController.createComment);

// Update a comment
router.put('/:commentId', [auth, authorization], commentController.updateComment);

// Delete a comment
router.delete('/:commentId', [auth, authorization], commentController.deleteComment);

module.exports = router;
```