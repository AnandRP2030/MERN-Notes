const express = require('express');
const app = express();
const port = 3333;
const multer = require('multer');
const {upload} = require('./middlewares/uploadFile');



app.post('/api/hello', upload.single('file'),  (req, res) => {
    res.json({msg: 'file uploaded', filename: req.file})
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})