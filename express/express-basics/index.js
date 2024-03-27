const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
let db = [
  {
    id: 1,
    name: "Anand",
    email: "anand@gmail.com",
    password: "12341234",
  },
  {
    id: 2,
    name: "Deeja",
    email: "deeja@gmail.com",
    password: "12341234",
  },
];

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = db.find((user) => {
      return user.email === email;
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Email id or password is wrong." });
    }

    // rest of
    if (user.password !== password) {
      return res
        .status(404)
        .json({ message: "Email id or password is wrong." });
    }

    delete user.password;

    console.log("user", user);
    return res.status(200).json({ message: "Login Successfull", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

app.post("/signup", (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    // data store here
    res.status(201).json({ message: "Signup successful", data: req.body });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/user", (req, res) => {
  try {
    const { id } = req.query;
    console.log("id", req.query);
    const user = db.find((user) => user.id === parseInt(id));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User found", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
