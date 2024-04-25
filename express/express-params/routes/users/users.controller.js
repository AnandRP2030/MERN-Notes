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

module.exports = { createUser, getAllUsers };

// Database interactios are time consuming
