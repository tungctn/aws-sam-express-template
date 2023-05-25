const app = require("./app");
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.listen(port);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });
console.log(`listening on http://localhost:${port}`);
