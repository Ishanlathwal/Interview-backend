const mongoose = require("mongoose");

const connectDatabase = async () => {
  mongoose
    .connect("mongodb://localhost:27017/interview")
    .then((data) =>
      console.log(`Database connected with server ${data.connection.port}`),
    );
};
connectDatabase();
module.exports = connectDatabase;
