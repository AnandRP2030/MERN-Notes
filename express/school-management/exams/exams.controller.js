const { ExamModel } = require("./exams.model");
const mongoose = require("mongoose");
const createNewExam = async (req, res) => {
  try {
    console.log("bod", req.body);
    const { subject, marks, date, studentId } = req.body;
    if (!subject || !marks || !studentId) {
      return res.status(400).send("All fields are required");
    }

    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).send("Invalid exam id");
    }
    const newExam = new ExamModel({
      subject,
      marks,
      studentId,
    });
    await newExam.save();
    return res.status(200).json({ message: "new exam created", data: newExam });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getAllExams = async (req, res) => {
  try {
    const allExams = await ExamModel.find()
      .populate("studentId")
      .exec();
    if (allExams.length === 0) {
      return res.status(404).send({ message: "No exams found" });
    }
    return res
      .status(200)
      .json({ message: "All exams data found", data: allExams });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const getExamById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid exam id");
    }
    const exam = await ExamModel.findById(id);
    if (!exam) {
      return res.status(404).send("Exam not found");
    }
    return res.status(200).json({ message: "Exam found", data: exam });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createNewExam,
  getAllExams,
  getExamById,
};
