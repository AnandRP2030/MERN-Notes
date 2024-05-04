const express = require("express");
const path = require('path')
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Server working  " });
});
app.use(express.static("public"));
// example routes
// http://localhost:3333/index.html

app.use("/file", express.static("files"));
// Now, you can load the files that are in the file directory from the /file path prefix.
// http://localhost:3333/file/profile.html



// absolute path
// However, the path that you provide to the express.static function is relative to the
// directory from where you launch your node process. If you run the express app from another directory,
// it’s safer to use the absolute path of the directory that you want to serve:

app.use('/assets', express.static(path.join(__dirname, 'assets')))

// console.log("current directory Name: ",__dirname) // C:\Users\Anand R P\Desktop\MERN-code-Notes\express\express-serving-static
// let joining = path.join(__dirname, 'assets'); // C:\Users\Anand R P\Desktop\MERN-code-Notes\express\express-serving-static\assets
// console.log("joining", joining); //


app.listen(3333, () => {
    console.log("url: http://localhost:3333");
  });

