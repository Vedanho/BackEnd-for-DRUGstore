const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  money: Number,
  recipe: Boolean
});

const User = mongoose.model("User", userSchema);

module.exports = User;
