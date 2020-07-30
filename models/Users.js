const mongoose = require('mongoose');

const Schema = mongoose.Schema;

UserSchema = new Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
    },
  password: {
    required: true,
    type: String,
  }
});

mongoose.model('users', userSchema);