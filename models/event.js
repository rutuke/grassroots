var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
   name: String,
   location: String,
   image: String,
   date: String,
   info: String
});

module.exports = mongoose.model("Event", eventSchema);

