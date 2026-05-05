const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  eventId: String,
  userId: String,
  qrCode: String,
  isUsed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Ticket", ticketSchema);