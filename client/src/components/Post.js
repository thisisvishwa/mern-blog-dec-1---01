```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ match }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/api/posts/${match.params.id}`);
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        {post.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div>
        {post.categories.map(category => (
          <span key={category}>{category}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
```