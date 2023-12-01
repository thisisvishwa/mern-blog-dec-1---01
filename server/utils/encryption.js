```javascript
const bcrypt = require('bcrypt');

const encryptData = async (data) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const encryptedData = await bcrypt.hash(data, salt);
        return encryptedData;
    } catch (error) {
        console.error(error);
    }
};

const compareData = async (data, encryptedData) => {
    try {
        const isMatch = await bcrypt.compare(data, encryptedData);
        return isMatch;
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    encryptData,
    compareData
};
```