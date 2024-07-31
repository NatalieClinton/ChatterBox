const mongoose = require('mongoose');
const User = require('./models/user-model');
const Thought = require('./models/thoughts-model');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/chatterboxDB')
  .then(() => {
    console.log('MongoDB Connected');

    // Example data
    const users = [
      { username: 'lernantino', email: 'lernantino@gmail.com' },
      { username: 'john_doe', email: 'john.doe@example.com' }
    ];

    const thoughts = [
      { thoughtText: 'Here\'s a cool thought...', username: 'lernantino' },
      { thoughtText: 'Another interesting thought...', username: 'john_doe' }
    ];

  // Perform operations on the database
    return User.deleteMany({})
      .then(() => User.insertMany(users))
      .then(() => Thought.deleteMany({}))
      .then(() => Thought.insertMany(thoughts))
      .then(() => console.log('Example data inserted'))
      .catch(err => console.error(err))
      .finally(() => mongoose.connection.close());
  })
  .catch(err => console.error(err));
