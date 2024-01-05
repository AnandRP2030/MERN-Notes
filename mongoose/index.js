const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const UserModel = require('./schema.js');

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Database is connected")
}

main();

app.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

app.post('/add', async (req, res) =>  {
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    place: req.body.place
  })
  await user.save();
  res.send({user});
})

app.listen(port, () => {
  console.log(`server running on port 3000 `);
});
