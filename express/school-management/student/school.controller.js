const { StudentModel } = require("./school.model");
const mongoose = require("mongoose");
const createNewStudent = async (req, res) => {
  try {
    console.log("req.body", req.body)
    const { name, age, email,  gender, password} = req.body;
    if (!name || !age || !email || !gender || !password) {
      return res.status(400).send("All fields are required");
    }


    if (!(gender === "Male" || gender === "Female" || gender === "Other")) {
        return res.status(400).json({message: "invalid gender"});
    }

    const ageToNumber = parseInt(age);
    const isEmailAlreadyExist = await StudentModel.findOne({ email }); // {}

    if (isEmailAlreadyExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const newStudent = new StudentModel({
      name,
      age: ageToNumber,
      gender,
      password,
      email,
    });
    // save 
    await newStudent.save();
    return res
      .status(200)
      .json({ message: "new student created", data: newStudent });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    // allStudents [] format
    const allStudnets = await StudentModel.find();
    if (allStudnets.length === 0) {
      return res.status(404).send({ message: "No students found" });
    }
    return res
      .status(200)
      .json({ message: "All students data found", data: allStudnets });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid student id" });
    }
    const student = await StudentModel.findById(id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    return res.status(200).json({ message: "Student found", data: student });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}

const updateStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid student id");
    }
    const student = await StudentModel.findById(id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    const { name, age, email } = req.body;
    let obj  = {};
    if (name) {
      obj.name = name;
    }

    if (age) {
      obj.age = age;
    }
    if (email) {
      obj.email = email;
    }
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      id,
     obj,
      { new: true }
    );
    return res.status(200).json({
      message: "Student details updated successfully",
      data: updatedStudent,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid student id");
    }
    const student = await StudentModel.findById(id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    await StudentModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
module.exports = {
  createNewStudent,
  updateStudentById,
  getAllStudents,
  deleteStudentById,
  getStudentById
};
