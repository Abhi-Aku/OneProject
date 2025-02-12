const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
    
    // jwt authorization middleware
const authenticateToken = (req, res, next) => {
const token= req.headers.authorization.split(' ')[1]; 
if(!token) return res.status(401).json({message: 'Unauthorized access'});
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
} catch (err) {
    res.status(400).json({message: 'Invalid token'});
 }};

//  Genert token
const generateAccessToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1h'});
};


// Create schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);
// Create a new user with hashed password
app.post('/Users', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        const payload = { 
            user:  {
                id: user._id, 
                name: user.name, 
                email: user.email
            }
         };
        const token = generateAccessToken(payload);
        console.log(token);
        res.status(201).json({ message: 'User created successfully', user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login user
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
