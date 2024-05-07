const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dummy user data array
let users = [];

// Route to serve the login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Route to serve the signup page
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

// Route to handle user signup
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    // Create new user
    const newUser = { username, email, password };
    users.push(newUser);
    res.status(201).send('User created successfully');
});

// Route to handle user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Find user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).send('User not found');
    }
    // Check password
    if (user.password !== password) {
        return res.status(401).send('Incorrect password');
    }
    // Successful login
    res.send('Login successful');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
