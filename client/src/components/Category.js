```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get('/api/categories');
            setCategories(res.data);
        };

        fetchCategories();
    }, []);

    return (
        <div id="category-list">
            <h2>Categories</h2>
            {categories.map(category => (
                <div key={category._id}>
                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Category;
```