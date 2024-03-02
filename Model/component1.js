const mongoose = require("mongoose");

const component1Schema = new mongoose.Schema({
  component1: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Component1", component1Schema);
