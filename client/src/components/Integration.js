```javascript
import React from 'react';
import axios from 'axios';

class Integration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            categories: [],
            tags: [],
            users: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const posts = await axios.get('/api/posts');
            const comments = await axios.get('/api/comments');
            const categories = await axios.get('/api/categories');
            const tags = await axios.get('/api/tags');
            const users = await axios.get('/api/users');

            this.setState({
                posts: posts.data,
                comments: comments.data,
                categories: categories.data,
                tags: tags.data,
                users: users.data
            });
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    render() {
        const { posts, comments, categories, tags, users } = this.state;

        return (
            <div id="integration-settings">
                <h2>Integration Settings</h2>
                <p>Total Posts: {posts.length}</p>
                <p>Total Comments: {comments.length}</p>
                <p>Total Categories: {categories.length}</p>
                <p>Total Tags: {tags.length}</p>
                <p>Total Users: {users.length}</p>
            </div>
        );
    }
}

export default Integration;
```