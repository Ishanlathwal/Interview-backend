// Import the mongoose library
const mongoose = require("mongoose");

// Define the schema for the hit count document
const hitCountSchema2 = new mongoose.Schema({
  endpoint: {
    type: String,
    enum: ["createData2", "updateData2"],
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

// Create a mongoose model based on the hit count schema
const HitCount = mongoose.model("HitCount2", hitCountSchema2);

module.exports = HitCount;
