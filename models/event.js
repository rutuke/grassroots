var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
   name: String,
   image: String,
   location: String,
   date: String,
   info: String
});

module.exports = mongoose.model("Event", eventSchema);

