// Import the mongoose library
const mongoose = require("mongoose");

// Define the schema for the hit count document
const hitCountSchema3 = new mongoose.Schema({
  endpoint: {
    type: String,
    enum: ["createData3", "updateData3"],
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

// Create a mongoose model based on the hit count schema
const HitCount = mongoose.model("HitCount3", hitCountSchema3);

module.exports = HitCount;
