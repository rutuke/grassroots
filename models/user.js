var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
   name: String,
   location: String,
   age: Number,
   bio: String
});

module.exports = mongoose.model("User", userSchema);

