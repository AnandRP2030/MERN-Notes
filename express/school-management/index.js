const express = require("express");
const app = express();
const port = 3000;
const { connectDb } = require("./connectDb");
const cors = require('cors')
app.use(express.json());
app.use(cors())
const { studentRoutes } = require("./student/school.routes");
const { examsRoutes } = require("./exams/exams.routes");
const { teacherRoutes } = require("./teacher/teacher.routes");
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/student", studentRoutes);
app.use("/exam", examsRoutes);


app.use("/teachers", teacherRoutes);
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
});
