const express = require("express");
const app = express();
const connectDb = require("./db.js");
const StudentModel = require("./user/user.model.js");
var cors = require('cors')

 
app.use(cors())

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

app.post("/student/signup", async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;

  const isUserAlreadyExist = await StudentModel.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(400).json({ message: "User already exists" });
  }

  const studentData = await new StudentModel({
    name,
    email,
    password,
    phoneNumber,
  });

  await studentData.save();

  res.json({
    message: "Signup complted successfully",
    data: studentData,
  });
});



app.post("/student/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  const user = await StudentModel.find({ email });
  console.log("user", user);
  if (user.length === 0) {
    return res.status(404).json({ message: "Login failed" });
  }

  if (password !== user[0].password) {
    return res.status(404).json({ message: "Login failed" });
  }

  res.json({
    message: "login complted successfully",
    data: user,
  });
});



connectDb().then(() => {
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
});
