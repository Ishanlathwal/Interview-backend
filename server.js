const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log(err.stack);
  console.log("Uncaught Exception Sync Method");

  process.exit(1);
});

// Db connection
const connectDatabase = require("./connectDb/dbConnection");

//config
port = 2000;
const server = app.listen(port, () =>
  console.log(`app is running on port${port}`),
);
//// final error catching
process.on("unhandledRejection", (err) => {
  console.log(err.stack);
  console.log("Unhandled Rejection Async Method");

  server.close(() => {
    process.exit(1);
  });
});
