const express = require("express");
const app = express();

// basic route
app.get("/", (req, res) => {
  res.send("helo world");
});

app.get("/home", (req, res) => {
  const id = req.query.id;
  console.log(req.query);
  res.send(`Data from id: ${id}`);
});

app.listen(6001, () => {
  console.log("server running on 6000");
});
