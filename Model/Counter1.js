// Import the mongoose library

const mongoose = require("mongoose");

// Define the schema for the hit count document
const hitCountSchema1 = new mongoose.Schema({
  endpoint: {
    type: String,
    enum: ["createData1", "updateData1"],
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

// Create a mongoose model based on the hit count schema
const HitCount = mongoose.model("HitCount1", hitCountSchema1);

module.exports = HitCount;
