const mongoose = require("mongoose");

async function connectDb() {
   await mongoose.connect("mongodb://localhost:27017/student-management-system");
    console.log("Db connected");
}

module.exports = connectDb