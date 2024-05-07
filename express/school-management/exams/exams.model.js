const mongoose = require('mongoose')
const examSchema = mongoose.Schema({
    subject: {
        type:String,
        required: true
    },
    marks: {
        type:Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true

    }
})
const ExamModel = mongoose.model("exams", examSchema);
module.exports = {ExamModel}