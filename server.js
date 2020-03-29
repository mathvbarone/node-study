const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Start App
const app = express();

// Start DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
requireDir("./src/models/");

const Product = mongoose.model("Product");

// First route
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build blabla",
    url: "http://matheusbarone.com"
  });

  res.send("Hello World");
});

app.listen(3001);
