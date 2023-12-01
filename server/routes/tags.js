```javascript
const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

// Get all tags
router.get('/', tagController.getTags);

// Get a single tag
router.get('/:id', tagController.getTag);

// Admin routes
router.use(auth);
router.use(authorization);

// Create a new tag
router.post('/', tagController.createTag);

// Update a tag
router.put('/:id', tagController.updateTag);

// Delete a tag
router.delete('/:id', tagController.deleteTag);

module.exports = router;
```