const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log(err.stack);
  console.log("Uncaught Exception Sync Method");

  process.exit(1);
});

// Db connection
const connectDatabase = require("./connectDb/dbConnection");

//config

const server = app.listen(process.env.PORT, () =>
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
