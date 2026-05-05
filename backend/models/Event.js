const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  price: Number,
  maxSeats: Number,
});

module.exports = mongoose.model("Event", eventSchema);