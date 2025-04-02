const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on ${PORT}`));
