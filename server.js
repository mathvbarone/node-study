const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Start App
const app = express();
app.use(express.json());
app.use(cors());
// Start DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
requireDir("./src/models/");

app.use("/api", require("./src/routes"));

app.listen(3001);
