```javascript
import React, { useContext } from 'react';
import { UserContext } from '../App';

const Authorization = () => {
    const { user } = useContext(UserContext);

    return (
        <div id="authorization-settings">
            {user && user.role === 'admin' ? (
                <div>
                    <h2>Admin Panel</h2>
                    <p>Welcome, {user.username}! You have full access to manage the blog.</p>
                </div>
            ) : (
                <div>
                    <h2>User Panel</h2>
                    <p>Welcome, {user.username}! You can create and manage your own posts.</p>
                </div>
            )}
        </div>
    );
};

export default Authorization;
```