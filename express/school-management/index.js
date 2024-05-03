const express = require("express");
const app = express();
const port = 3000;
const {connectDb} = require('./connectDb')
app.use(express.json());
const { studentRoutes } = require("./student/school.routes");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/student", studentRoutes);

connectDb().then(() => {
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
})
