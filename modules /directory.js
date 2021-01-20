const mongoose = require("mongoose");
//path to mongodb
const mongoPath ="mongodb+srv://cluster0.eorpq.mongodb.net/Transaction"

const Schema = mongoose.Schema;

const directorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name"
    },
    value: {
      type: Number,
      required: "Employee ID"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Directory = mongoose.model("directory", directorySchema);

module.exports = Directory;
