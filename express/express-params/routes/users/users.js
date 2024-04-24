const express = require("express");
const userRoutes = express.Router();

let users = ["abc", "def", "ghi"];


userRoutes.get("/get-user", (req, res) => {
  try {
    res.status(200).json({ message: "All users ", data: users });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
userRoutes.get("/login", (req, res) => {
  try {
    res.status(200).json({ message: "All users ", data: users });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

userRoutes.get("/:id", (req, res) => {  
  try {
    const id = req.params.id;
    let user = users[id];
    if (!user) {
        return res.status(404).json({message: "user not found"})
    }
    return res.status(200).json({ message: "User found", data: users[id] });   
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  } 
});

module.exports = {userRoutes}