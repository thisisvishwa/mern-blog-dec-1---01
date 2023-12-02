```javascript
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

// Get all categories
router.get('/', categoryController.getCategories);

// Get a single category
router.get('/:id', categoryController.getCategory);

// Create a new category
router.post('/', auth, authorization, categoryController.createCategory);

// Update a category
router.put('/:id', auth, authorization, categoryController.updateCategory);

// Delete a category
router.delete('/:id', auth, authorization, categoryController.deleteCategory);

module.exports = router;
```