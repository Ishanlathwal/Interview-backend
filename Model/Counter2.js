const mongoose = require("mongoose");

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

const HitCount = mongoose.model("HitCount2", hitCountSchema2);

module.exports = HitCount;
