require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173/', // Your frontend URL
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

// Middleware
app.use(cors()); // Allows frontend-backend communication
app.use(express.json()); // Parses JSON requests

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Test Route
app.get('/', (req, res) => {
  res.send('Charity Backend is Running!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});