const mongoose = require("mongoose");

// added new before mongoose.Schema - dunno if it's important tho
const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // refrence the model and not "users"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectsSchema);
