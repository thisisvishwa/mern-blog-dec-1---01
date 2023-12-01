```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentManagement = () => {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetchPosts();
        fetchCategories();
        fetchTags();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
    };

    const fetchCategories = async () => {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
    };

    const fetchTags = async () => {
        const response = await axios.get('/api/tags');
        setTags(response.data);
    };

    const deletePost = async (id) => {
        await axios.delete(`/api/posts/${id}`);
        fetchPosts();
    };

    const deleteCategory = async (id) => {
        await axios.delete(`/api/categories/${id}`);
        fetchCategories();
    };

    const deleteTag = async (id) => {
        await axios.delete(`/api/tags/${id}`);
        fetchTags();
    };

    return (
        <div id="content-management">
            <h2>Content Management</h2>
            <div>
                <h3>Posts</h3>
                {posts.map(post => (
                    <div key={post._id}>
                        <h4>{post.title}</h4>
                        <button onClick={() => deletePost(post._id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Categories</h3>
                {categories.map(category => (
                    <div key={category._id}>
                        <h4>{category.name}</h4>
                        <button onClick={() => deleteCategory(category._id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Tags</h3>
                {tags.map(tag => (
                    <div key={tag._id}>
                        <h4>{tag.name}</h4>
                        <button onClick={() => deleteTag(tag._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentManagement;
```