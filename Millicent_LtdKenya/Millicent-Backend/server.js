const express = require('express');
const connectDB = require('./config/db');
const securityMiddleware = require('./middleware/security');
const app = express();

// Connect Database
connectDB();

// Apply security middleware
securityMiddleware(app);

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/volunteers', require('./routes/volunteers'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));