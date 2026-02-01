const Student = require("../models/Student");

// CREATE student
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE student by roll number
const deleteStudent = async (req, res) => {
  try {
    const { rollNo } = req.params;

    const student = await Student.findOneAndDelete({ rollNo });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE Students
const updateStudent = async (req, res) => {
  try {
    const { rollNo } = req.params;

    const updatedStudent = await Student.findOneAndUpdate(
      { rollNo },
      req.body,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
deleteStudent,
updateStudent,
};
