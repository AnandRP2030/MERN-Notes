const mongoose = require("mongoose");
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

    // newTeacher is a instance of TeacherModel
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
      return res.status(404).json({ message: "User not found" });
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

const allTeachers = async (req, res) => {
  try {
    let allTeachers = await TeacherModel.find();
    return res.status(200).json({ message: "All teachers", data: allTeachers });
  } catch (error) {
    console.error("Error on get all teachers");
    return res.status(500).json({ message: "Server error", error });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const id = req.params.id;

    const isIdValid = mongoose.Types.ObjectId.isValid(id);
    if (!isIdValid) {
      return res.status(400).json({ message: "Id is not valid" });
    }
    let teacher = await TeacherModel.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    return res.status(200).json({ message: "Teacher found", data: teacher });
  } catch (error) {
    console.error("Error on get teacher by id");
    return res.status(500).json({ message: "Server error", error });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const { password} = req.body;
   
    const isIdValid = mongoose.Types.ObjectId.isValid(id);
    if (!isIdValid) {
      return res.status(400).json({ message: "Id is not valid" });
    }
    const teacher = await TeacherModel.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    if (password) {
      teacher.password = password;
    }
    await teacher.save();
    return res.status(200).json({ message: "Teacher updated", data: teacher });
  } catch (error) {
    console.error("Error on update teacher");
    return res.status(500).json({ message: "Server error", error });
  } 
};

module.exports = {
  createTeacher,
  loginTeacher,
  allTeachers,
  getTeacherById,
};
