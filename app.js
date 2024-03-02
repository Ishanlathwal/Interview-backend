// Import necessary modules

const express = require("express");
const globalErrorHAndler = require("./Error_Handler/Error-Controller");
const AppError = require("./Error_Handler/Error-Handeling_Class");
const cors = require("cors");

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(express.json());

// Import route handlers
const component1Route = require("./Routes/component1Routes");
const component2Route = require("./Routes/component2Routes");
const component3Route = require("./Routes/component3Routes");

// Define routes for each component
app.use("/api/v1", component1Route);
app.use("/api/v1", component2Route);
app.use("/api/v1", component3Route);

// Handle requests for invalid URLs
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHAndler);
module.exports = app;
