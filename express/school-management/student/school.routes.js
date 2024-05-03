const { createNewStudent, getAllStudents } = require("./school.controller");
const studentRoutes = require('express').Router();

studentRoutes.post('/create', createNewStudent);
studentRoutes.get('/', getAllStudents);

module.exports = { studentRoutes };
