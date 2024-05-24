const {
  createTeacher,
  loginTeacher,
  allTeachers,
  getTeacherById,
} = require("./teacher.controller");
const express = require("express");
const teacherRoutes = express.Router();

teacherRoutes.post("/signup", createTeacher);
teacherRoutes.post("/login", loginTeacher);
teacherRoutes.get("/", allTeachers);
teacherRoutes.get("/:id", getTeacherById);
module.exports = {
  teacherRoutes,
};
