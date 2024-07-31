const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
      }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
      }]
      }, {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      });
  
  // Virtual for friend count
  userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;