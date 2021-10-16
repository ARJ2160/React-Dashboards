const mongoose = require('mongoose');

// <----------------------- Creating Two Schemas ---------------------------------->

const CollegeSchema = new mongoose.Schema ({
    id: { type: String },
    name: { type: String },
    year: { type: Number },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    students: { type: Number },
    courses: { type: Object },
});

const StudentSchema = new mongoose.Schema ({
    id: { type: String },
    name: { type: String },
    gender: { type: String },
    batch_year: { type: Number },
    college_id: { type: String },
    skills: { type: Object },
});

//Create Model
const College = mongoose.model("College", CollegeSchema);
const Student = mongoose.model("Student", StudentSchema);

//Export Models
module.exports = {
    College, Student
}