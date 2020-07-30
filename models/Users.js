const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  fullname: {
    type: String,
    unique: true,
    
  },

  username: {
    type: String,
    unique: true,  
  },

  phonenumber: {
    type: String,
    unique: true,
  },

  password: {
    required: true,
    type: String,
  },

});

module.exports = mongoose.model('User', userSchema);