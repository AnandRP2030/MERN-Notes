const {
  createTeacher,
  loginTeacher,
  allTeachers,
  getTeacherById,updateTeacherById,
  deleteTeacherById
} = require("./teacher.controller");
const express = require("express");
const teacherRoutes = express.Router();

teacherRoutes.post("/signup", createTeacher);
teacherRoutes.post("/login", loginTeacher);
teacherRoutes.get("/", allTeachers);
teacherRoutes.get("/:id", getTeacherById);
teacherRoutes.patch("/:id", updateTeacherById);
teacherRoutes.delete("/:id", deleteTeacherById);

module.exports = {
  teacherRoutes,
};
