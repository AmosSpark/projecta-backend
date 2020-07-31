const mongoose = require("mongoose");

// added new before mongoose.Schema - dunno if it's important tho
const userSchema = new mongoose.Schema({
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
    type: String,
    required: true,
    select: false, // hide password on GET request
  },
});

module.exports = mongoose.model("User", userSchema);
