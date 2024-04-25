const mongoose = require('mongoose');
// Destructure the Schema object
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    password: String
})



const UserModel = mongoose.model("user", userSchema);
module.exports = {UserModel};

