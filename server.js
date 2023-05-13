const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/usersReact', 
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('MongoDB connection error:', error));

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use('/users', userRouter);

// Start the server
app.listen(9999, () => {
  console.log('Server started on port 9999');
});
