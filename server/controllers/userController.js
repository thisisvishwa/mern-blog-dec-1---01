```javascript
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hashedPassword,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (req.body.password) {
            user.password = await bcrypt.hash(req.body.password, 10);
        }
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted User' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user == null) {
        return res.status(400).json({ message: 'Cannot find user' });
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.generateToken(user._id);
            res.json({ token: token });
        } else {
            res.json({ message: 'Not Allowed' });
        }
    } catch {
        res.status(500).json({ message: 'Error login' });
    }
};

exports.logoutUser = (req, res) => {
    res.json({ token: null });
};
```