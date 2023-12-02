```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const fetchComments = async () => {
        const response = await axios.get(`/api/posts/${postId}/comments`);
        setComments(response.data);
    };

    const addComment = async () => {
        if (comment) {
            const newComment = { text: comment, postId };
            await axios.post('/api/comments', newComment);
            setComment('');
            fetchComments();
        }
    };

    return (
        <div id="comment-section">
            <h3>Comments</h3>
            {comments.map((comment, index) => (
                <div key={index}>
                    <p>{comment.text}</p>
                </div>
            ))}
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={addComment}>Submit</button>
        </div>
    );
};

export default Comment;
```