const fs = require("fs");

function doRead() {
  fs.readFile("dummy.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("data", data);
  });
}

// doRead();
function doWrite(textContent) {
  fs.writeFile("dummy.txt", textContent, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("data written");
  });
}

// doWrite("its a new data");
const dataToAppend = "New content to append to the file";

function appendNewData(dataToAppend) {
  fs.appendFile("dummy.txt", dataToAppend, "utf8", (err) => {
    if (err) {
      console.error("Error appending to file:", err);
      return;
    }
    console.log("Data has been appended to file.");
  });
}
// appendNewData(dataToAppend);

function delFile() {
  fs.unlink("dummy.txt", (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      return;
    }
    console.log("File has been deleted.");
  });
}
delFile()