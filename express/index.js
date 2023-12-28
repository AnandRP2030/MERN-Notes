const express = require("express");
const app = express();
const { connectDb } = require("./db.js");
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});
app.get("/name", (req, res) => {
  res.status(201).json({ message: "Anand" });
});

app.get("/profile", (req, res) => {
  res.status(404).json({ message: "Profile not found" });
});

app.post("/add-book", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Please provide title and author" });
  }

  res
    .status(201)
    .json({ message: "Book added successfully", book: { title, author } });
});

const PORT = 8000;


connectDb().then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });

})
