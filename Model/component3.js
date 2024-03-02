// Import the mongoose library
const mongoose = require("mongoose");

// Define a schema for the Component3 collection

const component3Schema = new mongoose.Schema({
  component3: {
    type: String,
    required: true,
  },
});
// Create a model for the Component3 collection using the schema
// The first argument is the name of the model, and the second argument is the schema

module.exports = mongoose.model("Component3", component3Schema);
