const express = require('express');
const app = express();
const port = 8050;
const multer = require('multer');
const {upload} = require('./middlewares/uploadFile');

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.post('/user/signup', upload.single("profilePicture"),  (req, res) => {
  console.log("")
  let obj = req.file;
  console.log("obj", obj)

    res.json({message: 'Upload successfully.', profilePicture: req.file})
})


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

