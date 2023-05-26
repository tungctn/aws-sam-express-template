const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const appRouter = require("./routes/index.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", appRouter);
appRouter.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
