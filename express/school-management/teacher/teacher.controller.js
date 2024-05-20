const { TeacherModel } = require("./teacher.model");

const createTeacher = async (req, res) => {
  try {
    const { name, email, password, salary, gender } = req.body;
    if (!name || !salary || !email || !password || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const isTeacherExist = await TeacherModel.findOne({ Email: email });
    if (isTeacherExist) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newTeacher = new TeacherModel({
      fullName: name,
      salary,
      gender,
      Email: email,
      password,
    });

    await newTeacher.save();
    return res
      .status(200)
      .json({ message: "new teacher created", data: newTeacher });
  } catch (error) {
    console.error("Error on teacher registration");
    return res.status(500).json({ message: "Server error", error });
  }
};

const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const teacher = await TeacherModel.findOne({ Email: email });

    if (!teacher) {
      return res.status(400).json({ message: "User not found" });
    }

    if (teacher.password !== password) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error on teacheer login");
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createTeacher,
  loginTeacher,
};
