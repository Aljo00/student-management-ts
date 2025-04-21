import express from "express";
import StudentService from "../services/StudentService";

const router = express.Router();

// Get all students
router.get("/students", async (req, res) => {
  try {
    const students = await StudentService.getAllStudents();
    res.render("students", { students });
  } catch (err) {
    res.status(500).send("Error fetching students");
  }
});

// Create a student
router.post("/students", async (req, res) => {
  try {
    const { name, age, course, department } = req.body;
    const student = await StudentService.createStudent({
      name,
      age,
      course,
      department,
    });
    res.redirect("/students");
  } catch (err) {
    res.status(500).send("Error creating student");
  }
});

export default router;
