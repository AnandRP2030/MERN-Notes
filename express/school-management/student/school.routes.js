const {
  createNewStudent,
  getAllStudents,
  getStudentById,
  deleteStudentById,
  updateStudentById,
} = require("./school.controller");
const studentRoutes = require("express").Router();

studentRoutes.post("/create", createNewStudent);
studentRoutes.get("/", getAllStudents);
studentRoutes.get("/:id", getStudentById);
studentRoutes.patch("/:id", updateStudentById);
studentRoutes.delete("/:id", deleteStudentById);

module.exports = { studentRoutes };
