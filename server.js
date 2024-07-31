const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const thoughtRoutes = require('./routes/thoughts');

const app = express();
const port = process.env.PORT || 5000;

// Routes
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/chatterboxDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
  .catch(err => console.error(err));
