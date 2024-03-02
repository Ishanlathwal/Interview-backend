const mongoose = require("mongoose");

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
  createData1: Number,
  updateData1: Number,
});

const HitCount = mongoose.model("HitCount1", hitCountSchema1);

module.exports = HitCount;
