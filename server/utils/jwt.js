```javascript
const jwt = require('jsonwebtoken');

const generateToken = (userId, role, expiresIn = '1h') => {
  const payload = {
    userId,
    role,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.error('Error in token verification:', err);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
```