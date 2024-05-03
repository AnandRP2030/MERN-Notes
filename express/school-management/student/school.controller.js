const { StudentModel } = require("./school.model");

const createNewStudent = async (req, res) => {
  try {
    const { name, age, email , joiningDate} = req.body;
    if (!name || !age || !email) {
      return res.status(400).send("All fields are required");
    }
    console.log("body", req.body)
    const isEmailAlreadyExist = await StudentModel.findOne({ email });

    if (isEmailAlreadyExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const newStudent = new StudentModel({
      name,
      age,
      joiningDate,
      email,
    });
    await newStudent.save();
    return res.status(200).json({message: "new student created",data: newStudent });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
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
module.exports = { createNewStudent, getAllStudents };
