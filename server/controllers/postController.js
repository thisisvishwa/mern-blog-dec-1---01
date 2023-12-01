```javascript
const Post = require('../models/Post');

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single post
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
        res.post = post;
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        tags: req.body.tags
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    if (req.body.title != null) {
        res.post.title = req.body.title;
    }
    if (req.body.content != null) {
        res.post.content = req.body.content;
    }
    if (req.body.category != null) {
        res.post.category = req.body.category;
    }
    if (req.body.tags != null) {
        res.post.tags = req.body.tags;
    }

    try {
        const updatedPost = await res.post.save();
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        await res.post.remove();
        res.status(200).json({ message: 'Deleted Post' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```