const mongoose = require("mongoose");

const component3Schema = new mongoose.Schema({
  component3: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Component3", component3Schema);
