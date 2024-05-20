const { createTeacher, loginTeacher } = require("./teacher.controller");
const express = require("express");
const teacherRoutes = express.Router();

teacherRoutes.post("/signup", createTeacher);

teacherRoutes.post("/login", loginTeacher);
module.exports = {
  teacherRoutes,
};
