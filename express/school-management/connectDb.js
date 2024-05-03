const mongoose = require('mongoose')
const connectDb = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/school-management-system');
    console.log("Database connected successfully");
}
module.exports = {connectDb};