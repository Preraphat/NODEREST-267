require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.gpt("/", (req, res) => {
  res.send("Hello Word!");
});

app.listen(port, () => {
  console.log("Example app listening at http:\\localhost:${port}");
});
