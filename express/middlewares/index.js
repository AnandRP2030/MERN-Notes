const express = require("express");
const { validateEmail } = require("./middlewares/validateEmail");
const { validatePassword } = require("./middlewares/validatePassword");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1 style="color: red"> working </h1>');
});

const emailFromDb = "abc@gmail.com";
const passwordFromDb = "123456"
// create a middleware
app.post("/login", validateEmail, validatePassword, (req, res) => {
    const {email, password} = req.body;
    if (emailFromDb === email && password === passwordFromDb) {
        return res.status(200).json({message: "Login success"})
    }
    return res.status(404).json({error: "Please check your email & password"})
});

app.listen(3400, () => {
  console.log("Server on: http://localhost:3400");
});
