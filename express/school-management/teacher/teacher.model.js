const mongoose = require("mongoose");
const { Schema } = mongoose;
const teacherSchema = Schema({
  fullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  activeStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const TeacherModel = mongoose.model("teacher", teacherSchema);
module.exports = { TeacherModel };
