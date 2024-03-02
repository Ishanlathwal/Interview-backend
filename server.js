// Imports
const app = require("./app");

// Handle uncaught exceptions

process.on("uncaughtException", (err) => {
  console.log(err.stack);
  console.log("Uncaught Exception Sync Method");

  process.exit(1);
});

// Db connection
const connectDatabase = require("./connectDb/dbConnection");

// Start the server and log a message

const server = app.listen(process.env.PORT, () =>
  console.log(`app is running on port${process.env.PORT}`),
);
// Handle unhandled rejections

process.on("unhandledRejection", (err) => {
  console.log(err.stack);

  // Close the server and exit the process with a failure code

  server.close(() => {
    process.exit(1);
  });
});
