const mongoose = require("mongoose");

const component2Schema = new mongoose.Schema({
  component2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Component2", component2Schema);
