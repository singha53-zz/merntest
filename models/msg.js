const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
  msg: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Msg = mongoose.model("Msg", msgSchema);

module.exports = Msg;