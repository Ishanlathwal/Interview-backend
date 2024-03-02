// Import the mongoose library
const mongoose = require("mongoose");

// Define a schema for the Component1 collection
const component1Schema = new mongoose.Schema({
  component1: {
    type: String,
    required: true,
  },
});

// Create a model for the Component1 collection using the schema
// The first argument is the name of the model, and the second argument is the schema

module.exports = mongoose.model("Component1", component1Schema);
