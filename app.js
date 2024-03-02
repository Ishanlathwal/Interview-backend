const express = require("express");
const globalErrorHAndler = require("./Error_Handler/Error-Controller");
const AppError = require("./Error_Handler/Error-Handeling_Class");
const cors = require("cors");

///////////////////////////////////////////////
const app = express();

app.use(cors());

app.use(express.json());

// route imports
const component1Route = require("./Routes/component1Routes");
const component2Route = require("./Routes/component2Routes");
const component3Route = require("./Routes/component3Routes");
// const payment = require("./routes/PaymentsRoutes");

app.use("/api/v1", component1Route);
app.use("/api/v1", component2Route);
app.use("/api/v1", component3Route);

// 1) invalid url

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// 2) Global error handler
app.use(globalErrorHAndler);
module.exports = app;
