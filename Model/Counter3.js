const mongoose = require("mongoose");

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

const HitCount = mongoose.model("HitCount3", hitCountSchema3);

module.exports = HitCount;
