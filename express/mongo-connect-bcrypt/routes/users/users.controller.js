const { UserModel } = require("./users.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    if (!name || !email || !age || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const isUserAleradyExist = await UserModel.findOne({ email });
    if (isUserAleradyExist) {
      return res.status(400).json({ message: "Email id already taken" });
    }

    bcrypt.hash(password, saltRounds, async function (err, hashedPassword) {
      if (err) {
        console.log("Error on hasing data", err);
        return res.status(400).json({
          message: "Error on hashing password please try again later.",
        });
      }

      const newUser = new UserModel({
        name,
        email,
        age,
        password: hashedPassword,
      });
      await newUser.save();

      return res
        .status(200)
        .json({ message: "Signup Successfully", data: newUser });
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email & password" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Please check your email id and password." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password); // true /false
    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ message: "Please check your email id and password." });
    }
    return res.status(200).json({ message: "Login Successfull", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res
      .status(200)
      .json({ message: "All users fetched successfully ", data: users });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "user fetched successfully.", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser, createUser, getAllUsers, getUserById };

// Database interactios are time consuming
