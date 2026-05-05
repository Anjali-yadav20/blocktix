const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://kafeefa312_db_user:d4InOzWm5w58xiHT@ac-jrwfscn-shard-00-00.ctcbbiq.mongodb.net:27017,ac-jrwfscn-shard-00-01.ctcbbiq.mongodb.net:27017,ac-jrwfscn-shard-00-02.ctcbbiq.mongodb.net:27017/ticketDB?ssl=true&replicaSet=atlas-jked9u-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => console.log("Server running on port 5000"));


//create Event
const Event = require("./models/Event");

app.post("/create-event", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//Buy Ticket
const Ticket = require("./models/Ticket");
const QRCode = require("qrcode");
const { v4: uuidv4 } = require("uuid");

app.post("/buy-ticket", async (req, res) => {
  try {
    const uniqueId = uuidv4();

    const qrImage = await QRCode.toDataURL(uniqueId);

    const ticket = await Ticket.create({
      eventId: req.body.eventId,
      userId: req.body.userId,
      qrCode: uniqueId
    });

    res.json({ ticket, qrImage });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//Scan Ticket
app.post("/scan", async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ qrCode: req.body.qr });

    if (!ticket) {
      return res.json({ status: "INVALID" });
    }

    if (ticket.isUsed) {
      return res.json({ status: "ALREADY_USED" });
    }

    ticket.isUsed = true;
    await ticket.save();

    res.json({ status: "VALID" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});