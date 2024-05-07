const express = require("express");
const app = express();
const port = 3000;
const {connectDb} = require('./connectDb')
app.use(express.json());
const { studentRoutes } = require("./student/school.routes");
const {examsRoutes} = require('./exams/exams.routes')
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/student", studentRoutes);
app.use("/exam", examsRoutes);

connectDb().then(() => {
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
})
