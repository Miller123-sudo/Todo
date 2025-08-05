const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Config dotenv file
dotenv.config({ path: "./config.env" });

const app = require("./app");

// Connecting to the local mongo db, it require connection string, which is must be stored in config.env file
mongoose
  .connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connection Successfull!");
  });

// Creating the server, which host on the local IP Server.
const port = process.env.PORT || 2022;

server = app.listen(port, () => {
  console.log(`App listining on port ${port}`);
});

// This will wait for any unhandle rejection exception happen, if so then it will logged the exception and
// then crash the application.
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message, err);
  server.close(() => {
    process.exit(1);
  });
});
