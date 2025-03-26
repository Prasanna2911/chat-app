const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("This is our server");
});

const PORT = process.env.PORT || 3000;
app.listen(5000, console.log(`server started on ${PORT}`));
