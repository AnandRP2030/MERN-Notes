const {
  createNewExam,
  getAllExams,
  getExamById,
} = require("./exams.controller");

const examsRoutes = require("express").Router();

examsRoutes.post("/", createNewExam);
examsRoutes.get("/:id", getExamById);
examsRoutes.get("/", getAllExams);

module.exports = { examsRoutes };
