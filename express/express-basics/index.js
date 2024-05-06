const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const {userRoutes} = require('./routes/user.routes');

// inbuilt middleware
app.use(express.json());
app.use('/user', userRoutes);
// app.use('/product', userRoutes);


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



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
