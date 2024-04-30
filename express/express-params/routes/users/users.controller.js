const { UserModel } = require("./users.model");

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

    const newUser = new UserModel({
      name,
      email,
      age,
      password,
    });
    await newUser.save();

    return res
      .status(200)
      .json({ message: "Signup Successfully", data: newUser });
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

module.exports = { createUser, getAllUsers, getUserById };

// Database interactios are time consuming
