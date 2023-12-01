```javascript
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

// Get all posts
router.get('/', postController.getPosts);

// Get a single post
router.get('/:id', postController.getPost);

// Create a new post
router.post('/', auth, authorization, postController.createPost);

// Update a post
router.put('/:id', auth, authorization, postController.updatePost);

// Delete a post
router.delete('/:id', auth, authorization, postController.deletePost);

module.exports = router;
```