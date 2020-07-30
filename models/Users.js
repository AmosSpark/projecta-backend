const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
  fullName: {
    type: String,
    unique: true,
  },
  userName: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);