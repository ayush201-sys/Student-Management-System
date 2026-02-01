const express = require("express");
const router = express.Router();

const {
  createStudent,
  getAllStudents,
  deleteStudent,
 updateStudent,
} = require("../controllers/studentController");

router.post("/students", createStudent);
router.get("/students", getAllStudents);
router.delete("/students/:rollNo", deleteStudent);
router.put("/students/:rollNo", updateStudent);

module.exports = router;
