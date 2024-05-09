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
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, "a"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  const upload2 = multer ({storage})

app.post('/api/upload', upload2.single('img'), (req, res) => {
    res.json({message: 'Upload successfully.', filename: req.file})
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})