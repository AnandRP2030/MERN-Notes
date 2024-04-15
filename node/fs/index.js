const fs = require('fs');
// create a folder in current directory
function createFolder () {

    fs.mkdir('./folder1', (err) => {
    if (err) {
    console.log("error occurred in creating new directory", err);
    }
    console.log("New directory created successfully");
    })
}

// createFolder();

// delete a folder
function deleteFolder () {
    fs.rmdir('./folder1', (err) => {
        if (err) {
        console.log("error occurred in deleting directory", err);
        }
        console.log("The directory deleted successfully");
        })

}
deleteFolder()