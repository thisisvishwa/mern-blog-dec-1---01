```javascript
const Tag = require('../models/Tag');

// Get all tags
exports.getTags = async (req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single tag
exports.getTag = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);
        if (tag == null) {
            return res.status(404).json({ message: 'Cannot find tag' });
        }
        res.tag = tag;
        res.status(200).json(res.tag);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new tag
exports.createTag = async (req, res) => {
    const tag = new Tag({
        name: req.body.name
    });

    try {
        const newTag = await tag.save();
        res.status(201).json(newTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a tag
exports.updateTag = async (req, res) => {
    if (req.body.name != null) {
        res.tag.name = req.body.name;
    }

    try {
        const updatedTag = await res.tag.save();
        res.status(200).json(updatedTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a tag
exports.deleteTag = async (req, res) => {
    try {
        await res.tag.remove();
        res.status(200).json({ message: 'Deleted Tag' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```